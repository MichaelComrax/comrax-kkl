import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import {
  ADD_ICON,
  LIST_ICON,
  CALENDAR_ICON,
  LOGO_ICON,
  TREE_ICON,
  BOTTOM_TREE_LOGO_LANDS_ICON,
  ASSETS_ICON,
  MAIL_ICON,
  LOYER_ICON,
  TREE_GRADIENT_LANDS_ICON,
  TRANSACTION_ICON,
  PLANING_ICON,
  EVALUATION_ICON,
  SUPERVISION_ICON,
  MEASUREMENTS_ICON,
  LOCATION_ICON,
  BUILDING_ICON,
  HOME_ICON,
  SAVE_ICON,
  PRINT_ICON,
  SELECT_ICON,
  RELOAD_ICON,
  FLAG_ICON,
  TIME_LEFT_ICON,
  CLIPBOARD_ICON,
  CONNECT_ICON,
  GROUP_ICON,
  REPORTS_ICON,
  OPEN_PLUS,
  OFFER_ICON,
  DELETE_ICON,
  CONTACT_DETAILS_ICON,
  SEND_MAIL_ICON,
  MEDAL_ICON,
  ORDER_ICON,
  SEARCH_ICON
} from './icons.list';

export interface IconItem {
  key: string;
  svgUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }


  public icons = {
    search:SEARCH_ICON,
    delete:DELETE_ICON,
    medal:MEDAL_ICON,
    order:ORDER_ICON,
    send_mail: SEND_MAIL_ICON,
    contact:CONTACT_DETAILS_ICON,
    offer:OFFER_ICON,
    open:OPEN_PLUS,
    reports:REPORTS_ICON,
    group:GROUP_ICON,
    connect:CONNECT_ICON,
    clipboard:CLIPBOARD_ICON,
    time:TIME_LEFT_ICON,
    flag: FLAG_ICON,
    reload: RELOAD_ICON,
    select: SELECT_ICON,
    print: PRINT_ICON,
    save: SAVE_ICON,
    home: HOME_ICON,
    building: BUILDING_ICON,
    measurements: MEASUREMENTS_ICON,
    list: LIST_ICON,
    add: ADD_ICON,
    supervision: SUPERVISION_ICON,
    evaluation: EVALUATION_ICON,
    planing: PLANING_ICON,
    transactions: TRANSACTION_ICON,
    tree: TREE_ICON,
    treegradientlands: TREE_GRADIENT_LANDS_ICON,
    bottomtreelands: BOTTOM_TREE_LOGO_LANDS_ICON,
    assets: ASSETS_ICON,
    loyer: LOYER_ICON,
    mail: MAIL_ICON,
    logo: LOGO_ICON,
    location: LOCATION_ICON,
    calendar: CALENDAR_ICON,
  }

  private findIcon(key: string): string {
    const icon = this.icons[key.toLocaleLowerCase()]
    return icon ? icon : null;
  }

  private registerIcon(key: string, icon: string) {
    this.iconRegistry.addSvgIconLiteral(
      key,
      this.sanitizer.bypassSecurityTrustHtml(icon)
    );
  }

  public setIcon(key: string): boolean {

    const icon = this.findIcon(key)

    if (icon) {
      this.registerIcon(key, icon)
      return true

    }

    return false

  }

  public setIconsList(items: any[]) {
    items.map((item) => {
      this.setIcon(item.svgUrl);
    });
  }
}
