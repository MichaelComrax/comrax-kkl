import { BehaviorSubject, Observable } from 'rxjs';
import { ListItem } from 'src/app/shared/components/list-item/list-item.model';

export class MenuItemModel implements ListItem {
  public key?: string;
  public label?: string;
  public path?: string;
  public svgUrl?: string;
  public scale?: number;
  public size?: number;
  public isActive?: boolean;

  private $active: BehaviorSubject<boolean>;

  constructor(options: {
    label?: string;
    path?: string;
    svgUrl?: string;
    isActive?: boolean;
  }) {
    this.label = options?.label;
    this.path = options?.path;
    this.isActive = options?.isActive || false;
    this.svgUrl = options?.svgUrl || 'arrow_right_alt';
    this.$active = new BehaviorSubject(this.isActive || false);
  }


  public getActiveObs(): Observable<boolean> {
    return this.$active.asObservable();
  }

  private emitActive(state: boolean) {
    this.$active.next(state);
  }

  public active(): void {
    this.isActive = true;
    this.emitActive(this.isActive)
  }
  public unactive(): void {
    this.isActive = false;
    this.emitActive(this.isActive)
  }
}

export class MenuListModel {
  public label?: string;
  public prefix?: string;
  public links?: MenuItemModel[];

  constructor(options: {
    label?: string;
    prefix?: string;
    links?: MenuItemModel[];
  }) {
    this.label = options?.label || '';
    this.prefix = options?.prefix || '';
    this.links = options?.links || [];
  }
}
