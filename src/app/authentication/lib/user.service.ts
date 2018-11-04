import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export enum UserStorageKeys {
  UserName = 'Chat-User-Name'
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private session: Storage = window.sessionStorage;

  current(): Observable<string> {
    return of(this.session.getItem(UserStorageKeys.UserName)).pipe(
      map(userName => {
        if (userName) {
          return userName;
        }
        throw new Error('UserService: No User has been found. :(');
      })
    );
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
