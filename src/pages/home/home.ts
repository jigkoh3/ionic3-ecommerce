import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


import { HomeService } from './home.service';
import { HomeModel } from "./home.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { ShopDetailPage } from "../shop-detail/shop-detail";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  //images: Array<string> = [];
  home: HomeModel = new HomeModel();
  loading: any;
  constructor(public navCtrl: NavController, 
    public homeService: HomeService,
    public loadingCtrl: LoadingController
  ) {
    
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
    this.loading.present();
    this.homeService
      .getData()
      .then(data => {
        this.home = data;
        this.loading.dismiss();
      });
  }

  selectedItem(e){
    this.navCtrl.push(ProductDetailPage, e);
  }

  selectedShop(e){
    this.navCtrl.push(ShopDetailPage, e);
  }

  xxxx(e){
    alert(e);
  }

}
