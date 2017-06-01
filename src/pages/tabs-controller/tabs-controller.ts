import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SOSPage } from '../s-os/s-os';
import { MapasPage } from '../mapas/mapas';
import { CheckListPage } from '../check-list/check-list';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SOSPage;
  tab2Root: any = MapasPage;
  tab3Root: any = CheckListPage;
  constructor(public navCtrl: NavController) {
  }
  
}
