import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, pipe } from 'rxjs';
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from '../counter.actions';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styles: [
  ]
})
export class MyCounterComponent implements OnInit, OnDestroy {


  ngOnInit(): void {
  }

  //count$: Observable<number> = new Observable();

  count: number;
  public subsc: Subscription[] = [];

  constructor(private store: Store<{ count: number }>) {
    //this.count$ = store.select("count");
    this.count = 0;
    this.subsc.push(store.select("count")
      .pipe(
        tap(console.log)
      )
      .subscribe(valor => {
        this.count = valor;
      }));

  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());

  }

  reset() {
    this.store.dispatch(reset());
    this.subsc.forEach(subsc => subsc.unsubscribe());
  }

  ngOnDestroy(): void {

  }

}
