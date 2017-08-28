import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartService } from "./cart.service";
import { CartModel } from "./cart.model";
import { ProductDetailPage } from "../product-detail/product-detail";

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  loading: any;
  cart: CartModel = new CartModel();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService:CartService,
    public loadingCtrl:LoadingController
  ) {
    this.loading = loadingCtrl.create();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.loading.present();
    this.cartService
      .getData()
      .then(data => {
        console.log(data);
        this.cart = data;
        this.loading.dismiss();
      });
  }

  gotoProductDetail(item){
    this.navCtrl.push(ProductDetailPage,item)
  }
}
