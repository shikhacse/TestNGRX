import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  //@Input() counter:any;
 
  counter$ ! : Observable<{ counter : number}>
  constructor(
    private store :Store<{counter : CounterState}>
  ) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe(data=>{
    //   this.counter = data.counter;
    // });
    this.counter$ = this.store.select('counter');
   
  }
  // ngOnDestroy(){
  //   if(this.counterSubscription){
  //     this.counterSubscription.unsubscribe();
  //   }
  // }

}
