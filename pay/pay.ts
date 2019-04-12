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
    private myL:LoadingController,
    private myV:ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  close(){
    this.myV.dismiss(0)
  }

  paying(){
    var myl = this.myL.create({
      content:'支付中'
    })
    myl.present()
    console.log(myl)
    setTimeout(()=>{
      this.myV.dismiss(1)
    },3000)
  }
}
