import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/services/store/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent {

  constructor(private store: Store<{counter: {counter: number}}>){}
  OnIncrement(){
    this.store.dispatch(increment())

  }

  OnDecrement(){
    this.store.dispatch(decrement())
  }

  OnReset(){
    this.store.dispatch(reset())
  }
}
