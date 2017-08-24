export class HomeModel {
    populars: Array<ProductItemModel>;
    shops: Array<ShopItemModel>;
    images: Array<string>;
  }
  
  export class ProductItemModel {
    title: string;
    image: string;
  }
  export class ShopItemModel {
    title: string;
    image: string;
  }
  