import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customincrement } from 'src/app/services/store/counter.actions';
import { CounterModel } from 'src/app/services/store/counter.model';
import { getchannelname } from 'src/app/services/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent implements OnInit{

  constructor(private store: Store<{counter :CounterModel}>){}
  counterinput !: number;
  actiontype!: string;
  channelname = ''
  countersubscribe !: Subscription;

  ngOnInit(): void {
    this.countersubscribe = this.store.select(getchannelname).subscribe(data => {
      this.channelname = data
    })
  }

  OnIncrement(){
    this.store.dispatch(customincrement({value: +this.counterinput, action: this.actiontype}))

  }



}
