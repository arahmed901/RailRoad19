import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Record } from '../models/Record';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public records = new BehaviorSubject<Record[]>(undefined);

  constructor(private recordsSvc: RecordsService) { }

  ngOnInit(): void {
    this.recordsSvc.getRecords().subscribe( data => {
      this.records.next(data);
    })
  }

}
