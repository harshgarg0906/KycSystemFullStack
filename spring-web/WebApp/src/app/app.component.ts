import { Component } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApp';

  constructor(private dataStorage:DataStorageService){
    console.log('hey');
  }

  onClick()
  {
    this.dataStorage.getKycDetail();
  }
}
