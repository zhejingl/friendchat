import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  searchText = '';
  searchby = 'mname';
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  
  constructor() {
    
  }

  ngOnInit() {
    
  }
}