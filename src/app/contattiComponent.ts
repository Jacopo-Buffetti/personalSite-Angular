import {Component} from '@angular/core';
import { AppService, IMessage } from './app.service';


@Component({
  selector: 'contatti',
  templateUrl: './views/contattiComponent.html',
})

export class contattiComponent{
  message: IMessage = {};
  constructor(private appService: AppService) {}

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
