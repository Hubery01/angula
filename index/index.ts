import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  detail = DetailPage
  list = []
  list1 = []
  list2 = []

  constructor(private myH:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url = 'http://localhost:8080/index'
    this.myH.get(url).subscribe((result:any)=>{
      console.log(result)
      this.list = result.carouselItems
      this.list1 = result.newArrialItems
      this.list2 = result.recommendedItems 
      console.log(this.list2)
    })
  }
  
}
