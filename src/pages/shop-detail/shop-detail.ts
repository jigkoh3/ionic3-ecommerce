import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  private shop:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shop = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
  }

}
