export class CartModel{
    items:Array<CartItemModel>;
    totalamount:Number;
};
export class CartItemModel{
    product: ProductModel;
    price:Number;
    qty:Number;
    amount:Number;
};
export class ProductModel{
    name:String;
    image:String;
    price:Number;
};