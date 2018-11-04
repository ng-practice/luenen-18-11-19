import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export enum UserStorageKeys {
  UserName = 'Chat-User-Name'
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private session: Storage = window.sessionStorage;

  current(): Observable<string> {
    return of(this.session.getItem(UserStorageKeys.UserName) || '');
  }

  login(userName: string): Observable<string> {
    this.session.setItem(UserStorageKeys.UserName, userName);
    return of(userName);
  }

  logout(): Observable<string> {
    return this.current().pipe(
      tap(() => this.session.removeItem(UserStorageKeys.UserName))
    );
  }
}
