import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TutorRegister } from '../onboarding/tutorRegister/tutorRegister'
import { DsService } from '../../shared/ds.service';

@Component({
  selector: 'page-preOnboarding',
  templateUrl: 'preOnboarding.html',
})
export class PreOnboarding {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public menuCtrl:MenuController, public navParams:NavParams, private ds: DsService) {
  }


  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false)
  }

  onboard(i) {
    if (i) {
      this.navCtrl.setRoot(LoginPage);
    } else {
      this.slides.slideTo(2, 500);
    }
  }
}
