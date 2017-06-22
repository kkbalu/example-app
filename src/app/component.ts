import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'zoo-root',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Welcome to the Zoo';
  @select('myUndefined') myUndefined$: Observable<any>;
  @select(['myObjects', 'country']) country$: Observable<any>;

  private disposer$ = new ReplaySubject();

  ngOnInit() {
    this.myUndefined$
        .takeUntil(this.disposer$)
        .subscribe(value => console.log(11111, value));

    this.country$
        .takeUntil(this.disposer$)
        .subscribe(value => console.log(11112, value));
  }

  ngOnDestroy() {
    this.disposer$.next(true);
  }
}
