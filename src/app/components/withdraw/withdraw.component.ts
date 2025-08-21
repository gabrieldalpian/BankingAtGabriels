import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
  amount: number = 0;

  constructor(private accountService: AccountService) {}

  withdraw() {
    if (this.amount > 0) {
      this.accountService.withdraw(this.amount).subscribe({
        next: newBalance => {
          this.amount = 0;
        },
        error: err => {
          alert(err.error.message || 'Insufficient funds');
        }
      });
    }
  }
}
