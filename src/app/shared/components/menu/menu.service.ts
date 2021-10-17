import { Injectable } from '@angular/core';
import { MenuListModel, MenuItemModel } from './menu.model';
import { ListItemKeys } from '../list-item/list-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: MenuListModel[] = [
    {
      label: 'ראשי',
      prefix: 'assets',
      links: [
        new MenuItemModel({ label: 'ספר נכסים', path: 'assets' }),
        new MenuItemModel({ label: 'חיפוש נכס', path: 'search' }),
        new MenuItemModel({ label: 'עסקאות', path: 'transactions' }),
        new MenuItemModel({ label: 'תבניות מייל', path: 'mail' }),
        new MenuItemModel({ label: 'רשימת עורכי דין', path: 'loyer' }),
      ],
    },
    {
      label: 'פיקוח',
      prefix: 'supervision',
      links: [],
    },
    {
      label: 'שומה',
      prefix: 'evaluation',
      links: [],
    },
    {
      label: 'עסקאות',
      prefix: 'transactions',
      links: [],
    },
    {
      label: 'מדידות',
      prefix: 'measurements',
      links: [],
    },
    {
      label: 'תכנון',
      prefix: 'design',
      links: [],
    },
  ];

  private modulePrefix: string;

  constructor() {}

  public getMenu() {
    return [...this.menu];
  }

  public getPrefix(): string {
    return this.modulePrefix;
  }

  public setPrefix(modulePrefix: string) {
    this.modulePrefix = modulePrefix;
  }

  // NETHODS TO HANDLE ACTIVE STEP STATUS
  private activeStep(items: MenuItemModel[], key: ListItemKeys, value: any) {
    items.find((item) => {
      if (item[key] === value) {
        item.active();
      }
    });
  }

  private unactiveStep(items: MenuItemModel[]) {
    items.find((item) => {
      if (item.isActive) {
        item.unactive();
      }
    });
  }

  public setSteps(
    items: MenuItemModel[],
    key: ListItemKeys,
    value: string
  ): MenuItemModel[] {
    this.unactiveStep(items);
    this.activeStep(items, key, value);
    return [...items];
  }

  public setList(
    menu: MenuListModel[],
    key: ListItemKeys,
    value: string
  ): MenuListModel[] {
    menu.find((list) => {
      if (list.prefix === this.modulePrefix) {
        list.links = this.setSteps(list.links, key, value);
      }
    });
    return menu;
  }

  public findList(key: string, value: string): MenuListModel {
    return {
      ...this.getMenu().find((list: MenuListModel) => list[key] === value),
    };
  }
}
