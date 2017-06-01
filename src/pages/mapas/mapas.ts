import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RotasPage } from '../rotas/rotas';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-mapas',
  templateUrl: 'mapas.html'
})
export class MapasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  predio: {nome:string, local:string};

  constructor(public navCtrl: NavController,private nativeStorage: NativeStorage) {
  }


  public storePredio():void {
    this.nativeStorage.setItem('predio', {
      nome: this.predio.nome,
      local: this.predio.local
    })
      .then(
        () => console.log('Predio Salvo'),
        error => console.error('Error storing item', error)
      )
  };
   public getPredio(){
    this.nativeStorage.getItem('predio')
    .then(
      data => console.log(data),
      error => console.error(error)
    )
  }


  goToRotas(params){
      if (!params) params = {};
    this.navCtrl.push(RotasPage);
  }
}
