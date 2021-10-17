import {
  Directive,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { theme, Palette } from 'src/styles/theme';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit, OnDestroy {
  private palette = theme.palette;
  private subscribtion: Subscription

  @Input() public color: Palette;
  @Input() public color$: Observable<Palette>;

  @HostBinding('style.color') private iconColor: string;

  constructor() { }

  ngOnInit(): void {
    this.iconColor = this.palette[this.color];
    this.subscribeToColor()
  }

  ngOnDestroy(): void {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe()
    }
  }

  private subscribeToColor() {
    if (this.color$) {
      this.subscribtion = this.color$.subscribe(
        (color) => {
          this.iconColor = this.palette[color]
        }
      )
    }
  }

}
