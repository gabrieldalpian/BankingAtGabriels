package com.bankBackend.service;

import com.bankBackend.model.Account;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    private Account account = new Account(1L, 5000.0);

    public double getBalance() {
        return account.getBalance();
    }

    public double deposit(double amount) {
        account.setBalance(account.getBalance() + amount);
        return account.getBalance();
    }

    public double withdraw(double amount) {
        if (amount > account.getBalance()) {
            throw new IllegalArgumentException("Insufficient funds");
        }
        account.setBalance(account.getBalance() - amount);
        return account.getBalance();
    }
}