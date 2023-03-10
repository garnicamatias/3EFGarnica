import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { Session } from '../../shared/models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private session : SessionService,
    private router : Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.getSession().pipe(
      map((session : Session ) => {
        if (session.isSessionActive) {
          return true
        } else {
          this.router.navigate(['login'])
          return false
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.getSession().pipe(
      map((session : Session ) => {
        if (session.isSessionActive) {
          return true
        } else {
          this.router.navigate(['login'])
          return false
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.getSession().pipe(
      map((session : Session ) => {
        if (session.isSessionActive) {
          return true
        } else {
          this.router.navigate(['login'])
          return false
        }
      })
    );
  }
}
