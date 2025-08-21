import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit, OnDestroy {
  balance: number = 0;
  private sub?: Subscription;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadBalance();
    this.sub = this.accountService.balanceChanged.subscribe(() => {
      this.loadBalance();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  loadBalance() {
    this.accountService.getBalance().subscribe(data => {
      this.balance = data;
    });
  }
}