import { Component, OnInit } from '@angular/core';
import { CyclistService } from '../cyclist.service';
import { ICyclist } from '../cyclist';

@Component({
  selector: 'app-list-cyclist',
  templateUrl: './list-cyclist.component.html',
  styleUrls: ['./list-cyclist.component.css']
})
export class ListCyclistComponent implements OnInit {

  public cyslistList:ICyclist[];

  constructor(private _cyclistService:CyclistService) { }

  ngOnInit() {

    this._cyclistService.getCyclist().subscribe(data=> this.cyslistList = data);
  }

}
