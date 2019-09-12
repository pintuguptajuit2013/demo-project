import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title ="CycleNetworkGrow";
  public isLogginVisible =true;
  constructor(private router:Router){

  }

  loginPage(path : string){
    this.router.navigate([`${path}`]);

  }
}
