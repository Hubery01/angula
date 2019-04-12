import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NotFoundPage } from '../not-found/not-found';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  tab1 = NotFoundPage
  tab2 = CartPage
  title = ''
  subtitle = ''
  price = ''
  pid = ''
  imglist = []

  constructor(
    private myH:HttpClient, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast:ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.pid = this.navParams.get('id')
    var url = 'http://localhost:8080/product/detail?lid='+this.pid
    this.myH.get(url).subscribe((result:any)=>{
      console.log(result) 
      this.title = result.details.title
      this.subtitle = result.details.subtitle
      this.price = result.details.price
      this.imglist = result.details.picList
    })
  }

  add(){
    console.log(this.pid)
    var url = 'http://localhost:8080/cart/add?buyCount=1&lid='+this.pid
    this.myH.get(url).subscribe((result:any)=>{
      console.log(result)
      if(result.code==300){
        this.navCtrl.push(LoginPage)
      }else if(result.code==200){
        var myT = this.toast.create({message:'success'})
        myT.present()
      }else{
        var myT1 = this.toast.create({message:'defaet'})
        myT1.present()
      }
    })
  }

}
