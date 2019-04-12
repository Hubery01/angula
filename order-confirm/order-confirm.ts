import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams,} from 'ionic-angular';
import { PayPage } from '../pay/pay';

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  constructor(
    private myM:ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
  }

  pay(){
    var a = this.myM.create(PayPage)
    a.present()

    a.onDidDismiss((data)=>{
      if(data==1){
        this.navCtrl.parent.select(0)
      }
    })
  }
}
