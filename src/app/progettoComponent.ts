import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'progetto',
  templateUrl: './views/progettoComponent.html'
})

export class ProgettoComponent {
  /*dichiaro le due variabili la prima dichiaro l'array finale e path per richiamare l'id dell'url*/
  data: any= [];
  path: string;
  constructor(private route: ActivatedRoute, private http: Http) {
    /*Recupero il Json del progetto*/
    this.http.get('https://jacopobuffetti.com/project.json')
    /*Recupero del Json e lo fisltro secondo quello che mi serve*/
      .subscribe(res => this.filterByProperty(res.json().project, 'url', this.path));
  }
  /*ngOnit la forza come prima partenza*/
  ngOnInit() {
    /*Recupero lo slash finale come dichiarato in app.module*/
    this.route.params.subscribe(params => {
      this.path = params['id'];
    });
  }
  // Funzione generica per filtrare l'array
  filterByProperty(array: any, prop: any, value: string) {
    /*cicli tutti i valori del Json*/
    array.forEach(function (eachObj: any) {
      /*Con questa If prendo solo i valori che mi servono in questo caso l'url*/
      if (eachObj.url === value) {
        console.log(eachObj);
        this.data = eachObj;
      }
    }, this);
  }

  totlaBalance: number = 1;

  tabIndex(e: any, val: number) {
    e.preventDefault();
    console.log('test');
    console.log('preview');
    this.totlaBalance = val;
  }
  totlaBalance2: number = 1;

  tabIndex2(e: any, val: number) {
    e.preventDefault();
    console.log('test');
    console.log('preview');
    this.totlaBalance2 = val;
  }
}
