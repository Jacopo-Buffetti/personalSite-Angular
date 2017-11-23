import {Component} from '@angular/core';
@Component({
  selector: 'about',
  templateUrl: './views/aboutComponent.html',
})
export class aboutComponent{
  totlaBalance: number = 1;

  tabIndex(e: any, val: number) {
    e.preventDefault();
    console.log('test');
    console.log('preview');
    this.totlaBalance = val;
  }
}
