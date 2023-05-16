import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styles: [
  ]
})
export class MyCounterComponent implements OnInit {


  ngOnInit(): void {
  }

  count$: Observable<number> = new Observable();

  constructor(private store: Store<{count:number}>) {
    this.count$ = store.select("count");
    
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
