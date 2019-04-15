import { Component } from '@angular/core';
import {LoadingController, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage { 

  constructor(
    private loadingCtrl:LoadingController,
    private viewCtrl:ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  close(){
    this.viewCtrl.dismiss(0)
  }

  paying(){
    var myLoading = this.loadingCtrl.create({
      content:'支付中'
    })
    myLoading.present()
    setTimeout(()=>{
      myLoading.dismiss()
      this.viewCtrl.dismiss(1)
    },3000)
  }
}
