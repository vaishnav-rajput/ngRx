import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changechannelname, decrement, increment, reset } from 'src/app/services/store/counter.actions';
import { CounterModel } from 'src/app/services/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent {

  constructor(private store: Store<{counter: CounterModel}>){}
  OnIncrement(){
    this.store.dispatch(increment())

  }

  OnDecrement(){
    this.store.dispatch(decrement())
  }

  OnReset(){
    this.store.dispatch(reset())
  }

  OnRename(){
      this.store.dispatch(changechannelname({channel: 'Welcome to Nihira techiees'}))
  }
}
