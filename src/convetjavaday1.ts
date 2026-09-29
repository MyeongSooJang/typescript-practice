class Product{
     private name: string;
     private price: number;

     private constructor(name: string, price: number){
        this.name = name;
        this.price = price;
     }
}

interface PaymentService{
    pay(userId: string, amount: number): boolean;
    getPaymentMethod(): string;
}

class Order{
    private name: string;
    private orderId: string;
    private items: string[];
    private status: "PENDING" | "COMPLETED" | "CANCELLED";
    private deliveryAddress?: string | undefined;

     constructor(name: string, orderId: string, items: string[], status: "PENDING" | "COMPLETED" | "CANCELLED", deliveryAddress?: string){
        this.name = name;
        this.orderId = orderId;
        this.items = items;
        this.status = status;
        this.deliveryAddress = deliveryAddress;
    }
}