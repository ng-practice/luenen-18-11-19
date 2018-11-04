import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class IsLoggedIn implements CanActivate {
  constructor(private _router: Router, private _user: UserService) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._user.current().pipe(
      map(() => true),
      catchError(() => {
        this._router.navigateByUrl('/login');
        return of(false);
      })
    );
  }
}
