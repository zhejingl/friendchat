import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  constructor(private router: Router, 
    private cdr: ChangeDetectorRef) { }


  ngOnDestroy(): void {
    this.cdr.detach();
  }

  ngOnInit(): void {
  }
  loaddailymed() {
    this.router.navigate(['/dailymedupload']);
  }
  isLogin() {
    return true;
  }
  viewProfile() {

  }
  logoff() {

  }
  review() {

  }
  home() {
    
  }
}
