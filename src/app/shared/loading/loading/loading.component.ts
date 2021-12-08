import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../shared/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  
  loading$ = new Observable<boolean>();

  constructor(private loadingService: LoadingService) { 
  }

  ngOnInit(): void {
    this.loading$ = this.loadingService.loadingStatus.asObservable();
  }


}
