export class Product {
    public id: number;
    public name: string;
    public quantity: number;
    public price: number;
    public imagePath: string;

    constructor(id: number, name: string, quantity: number, price: number, imagePath: string){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.imagePath = imagePath;
    }
}