import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/account';
  balanceChanged = new Subject<void>();

  constructor(private http: HttpClient) {}

  getBalance(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/balance`);
  }

  deposit(amount: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/deposit?amount=${amount}`, {}).pipe(
      tap(() => this.balanceChanged.next())
    );
  }

  withdraw(amount: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/withdraw?amount=${amount}`, {}).pipe(
      tap(() => this.balanceChanged.next())
    );
  }
}