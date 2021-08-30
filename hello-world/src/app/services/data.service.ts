import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(tap(r => {
      console.log('I am a data service');
      r.hello = 'world';
    }));
  }
}

@Component({
  selector: 'app-root',
  template: ``
})
export class AppRootComponent implements OnInit {
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    const r: any = this.dataService.get('http://api.example.com/Examples');
    console.log(r.hello);
    console.log('AppRootComponent initialized');
  }
}

@NgModule({
  declarations: [AppRootComponent],
  providers: [DataService]
})
export class AppModule{}
