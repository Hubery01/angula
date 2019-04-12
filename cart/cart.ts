import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { OrderConfirmPage } from '../order-confirm/order-confirm'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage { 
  list = []
  isAll = false


  constructor(
    private myH:HttpClient,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad CartPage');
    var url = 'http://localhost:8080/cart/list'
    this.myH.get(url,{withCredentials:true}).subscribe((result:any)=>{
      console.log(result)
      if(result.code==300){
        this.navCtrl.push(LoginPage)
      }else if(result.code==200){
        if(result.data.length>0){
          this.list=result.data
          for(var i = 0;i<this.list.length;i++){
            this.list[i].isSelected=false
          }
        }
      }
    })
  }

  change(){
    if(this.isAll){
      for(var i=0;i<this.list.length;i++){
        this.list[i].isSelected=true
      }
    }else{
      for(var i=0;i<this.list.length;i++){
        this.list[i].isSelected=false
      }
    }
  }

  c1(){
    var result = true
    for(var i = 0;i<this.list.length;i++)
    {
      result = this.list[i].isSelected && result
    }
    this.isAll = result
  }

  le(i){
    if(this.list[i].count==1){
      return
    }
      this.list[i].count--
  }

  mo(i){
    this.list[i].count++
  }

  goPay(){
    this.navCtrl.push(OrderConfirmPage)
  }

  calc(){
    var sum = 0 
    for(var i=0;i<this.list.length;i++){
      var p = this.list[i]
      if(p.isSelected){
        sum += (p.price*p.count)
      }
    }
    return sum
  }

}
