package com.bankBackend.controller;

import com.bankBackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = {
        "https://banking-at-gabriels.vercel.app",
        "https://<your-service-name>.koyeb.app"
})
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/balance")
    public double getBalance() {
        return accountService.getBalance();
    }

    @PostMapping("/deposit")
    public double deposit(@RequestParam double amount) {
        return accountService.deposit(amount);
    }

    @PostMapping("/withdraw")
    public double withdraw(@RequestParam double amount) {
        return accountService.withdraw(amount);
    }
}