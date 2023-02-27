export class Card {
    constructor(Id:string, Value:number, Suit:string, Color:string, Used:boolean ) {
        this.id=Id;         
        this.value= Value;
        this.suit = Suit;
        this.used = Used;
        this.color = Color;
    }
    id : string="";
    value : number=0;
    suit : string="";   
    used : boolean = false; 
    color : string = "";
}
