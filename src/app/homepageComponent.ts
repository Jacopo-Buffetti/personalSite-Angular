import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'homepage',
  templateUrl: './views/homepageComponent.html',
  styleUrls: ['./app.component.css']
})
export class homepageComponent{
  data: any;

  constructor(private http: Http) {
    this.http.get('https://jacopobuffetti.com/project.json')
      .subscribe(res => this.data = res.json().project);
  }
}
