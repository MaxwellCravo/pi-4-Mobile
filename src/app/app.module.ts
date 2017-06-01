import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapasPage } from '../pages/mapas/mapas';
import { CheckListPage } from '../pages/check-list/check-list';
import { SOSPage } from '../pages/s-os/s-os';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { RotasPage } from '../pages/rotas/rotas';
import { CheckList2Page } from '../pages/check-list2/check-list2';
import { NativeStorage } from '@ionic-native/native-storage';

import { Predio } from './predio/predio.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapasPage,
    CheckListPage,
    SOSPage,
    TabsControllerPage,
    RotasPage,
    CheckList2Page,
    Predio
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapasPage,
    CheckListPage,
    SOSPage,
    TabsControllerPage,
    RotasPage,
    CheckList2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  local: string;

  /*directive(

  'public name'
  'public local'
,
  function

  factory() {
    var directiveDefinitionObject = {

      compile
  :
    function compile(tElement, tAttrs, transclude) {

      return function (scope, element, attrs) {
      }
    }
  }
    ;
    return directiveDefinitionObject;
  }

)*/

}
