import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  nome?: string,
  cognome?: string,
  email?: string,
  oggetto?: string,
  messaggio?: string
}
@Injectable()
export class AppService {
  constructor(private http: Http) {}
  private emailUrl = 'https://jacopobuffetti.com/email.php';

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Email inviata correttamente', response);
        return response;
      })
      .catch(error => {
        console.log('Email fallita', error);
        return Observable.throw(error)
      })
  }
}
