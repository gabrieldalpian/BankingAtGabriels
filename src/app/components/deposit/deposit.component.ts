import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  amount: number = 0;

  constructor(private accountService: AccountService) {}

  deposit() {
    if (this.amount > 0) {
      this.accountService.deposit(this.amount).subscribe(newBalance => {
        this.amount = 0;
      });
    }
  }
}
