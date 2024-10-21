import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/services/store/counter.model';
import { getcounter } from 'src/app/services/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit, OnDestroy{

  constructor(private store: Store<{counter: CounterModel}>){

  }
  counterDisplay!: number;
  channelname= ''

  countersubscribe !: Subscription;
  counter$ !: Observable<CounterModel>
  ngOnInit(): void {
    this.countersubscribe = this.store.select(getcounter).subscribe(data => {
      this.counterDisplay = data
    })

    // this.counter$ = this.store.select('counter')
  }
  ngOnDestroy(): void {
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe()
    }
  }
}
