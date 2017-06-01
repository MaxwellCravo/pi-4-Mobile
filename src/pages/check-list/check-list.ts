import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckList2Page } from '../check-list2/check-list2';

@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html'
})
export class CheckListPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCheckList2(params){
    if (!params) params = {};
    this.navCtrl.push(CheckList2Page);
  }
}
