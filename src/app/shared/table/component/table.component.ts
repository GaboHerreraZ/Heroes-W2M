import { 
  AfterViewInit, 
  Component, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnInit, 
  Output, 
  SimpleChanges, 
  ViewChild 
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/app/heroes/shared/hero.model';
import { Action } from '../../models/action';
import { ColumnsTable } from '../../models/columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //Inputs
  @Input() actions: Action[];
  @Input() columnsTable: ColumnsTable[];
  @Input() displayedColumns: string[];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();


  //Outputs
  @Output() action =  new EventEmitter();
  @Output() filter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.dataSource = changes.dataSource.currentValue;
      this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  doAction(row: Hero, action: Action): void {
    const actionData = {
      hero: row,
      actionName: action.name
    };
    this.action.emit(actionData);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter.emit(filterValue);
  }
}
