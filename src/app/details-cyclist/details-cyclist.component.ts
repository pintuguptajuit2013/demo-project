import { Component, OnInit } from '@angular/core';
import { CyclistService } from '../cyclist.service';
import { ICyclist } from '../cyclist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-cyclist',
  templateUrl: './details-cyclist.component.html',
  styleUrls: ['./details-cyclist.component.css']
})
export class DetailsCyclistComponent implements OnInit {

  public cyslistList:ICyclist[];

  constructor(private _cyclistService:CyclistService, private route:ActivatedRoute) { }

  ngOnInit() {

    this._cyclistService.getCyclist().subscribe(data=> this.cyslistList = data);
  }

}
