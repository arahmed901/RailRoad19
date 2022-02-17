import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Record } from '../models/Record';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public get recordsData(): Observable<Record[]> {
    return this.records.asObservable();
  }

  protected records = new BehaviorSubject<Record[]>(undefined);

  constructor(private recordsSvc: RecordsService) { }

  ngOnInit(): void {
    console.log(this.records);
    this.recordsSvc.getRecords().subscribe(data => {
      this.records.next(data);
    })
  }

}
