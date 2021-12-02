import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
value! :number;
channelName! : string;
 channelData$ !: Observable<string>;
  constructor(
    private store : Store<{counter: CounterState}>
    ) { }

  ngOnInit(): void {
    // this.store.select(getChannelName).subscribe(data=>{
    //   console.log(data);
    //   this.channelName = data;
    // })
    this.channelData$ = this.store.select(getChannelName)
  }
  onAdd(){
  console.log(this.value)
  this.store.dispatch(customIncrement({value:+this.value}))
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannelName())
  }
}
