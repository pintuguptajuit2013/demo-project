import { Component, OnInit } from '@angular/core';
import { CyclistService } from '../cyclist.service';
import { ICyclist } from '../cyclist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  public leaderList:ICyclist[];

  constructor(private _cyclistService:CyclistService, private route:ActivatedRoute) { }

  ngOnInit() {

    this._cyclistService.getLeaders().subscribe(data=> this.leaderList = data);
  }

}
