import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = ''
  pwd = ''

  constructor(
    private myH:HttpClient,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tCtrl:ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  log(){
    var url = 'http://localhost:8080/user/login'
    var body = {
      uname:this.user,
      upwd:this.pwd
    }
    this.myH.post(url,body,{withCredentials:true}).subscribe((result:any)=>{
      console.log(result)
      if(result.code == 200){
        this.navCtrl.pop()
      }else{
        this.tCtrl.create({
          message:result.msg,
          duration:1500
        }).present()
      }
    })
  }
}
