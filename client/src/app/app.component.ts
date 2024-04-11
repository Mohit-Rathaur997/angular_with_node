import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'client';
  itemsArr = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    this.itemsArr.push(newItem);
  }

  routeToHome(){
    this.router.navigate(['/home'],{queryParams:{data:'Hello'}})
  }
}
