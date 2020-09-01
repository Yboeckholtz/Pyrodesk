export class Product {
    public name: string;
    public quantity: number;
    public price: number;
    public imagePath: string;

    constructor(name: string, quantity: number, price: number, imagePath: string){
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.imagePath = imagePath;
    }
}