import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { SearchPage } from "../search/search";
import { CartPage } from "../cart/cart";
import { ProfilePage } from "../profile/profile";
import { FavoritePage } from "../favorite/favorite";


@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = SearchPage;
    this.tab3Root = CartPage;
    this.tab4Root = FavoritePage;
    this.tab5Root = ProfilePage;
  }
}
