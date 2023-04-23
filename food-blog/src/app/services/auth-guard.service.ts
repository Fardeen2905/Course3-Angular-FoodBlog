import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate() : boolean {
    if(sessionStorage.getItem('user') != null){
      return true
    }else{
      return false
    }
}

}

