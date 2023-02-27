import { Component } from '@angular/core';
import { InitiativeService } from './initiative.service';
import { Initiativelist } from './initiativelist';
import { InitItem } from './init-item';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  initList : Initiativelist;
  timeleft : number = 5;
  saveInterval : any;
  newPlayerName : string = "";
  newPlayerInit : number = 0;
  deck : Card[] = [];

  constructor(private initService :InitiativeService) {
    this.initList= new Initiativelist;
    this.buildDeck();
    this.loadInit();
    this.startTimer();
  }
  
  startTimer() {
    this.saveInterval = setInterval(() => {
      if(this.timeleft > 0) {
        this.timeleft--;
      } else {
        this.timeleft = 5;
        this.loadInit();
      }
    },1000)
  }

  loadInit() {
     this.initService.getInit().subscribe(
      data => {
        console.log("get init called");
        Object.assign(this.initList,data);
        this.sortList();
        console.log(this.initList);
      }
     )
  }
  setInfo(name:string,init:number) {
    this.newPlayerName=name;
    this.newPlayerInit=init;
  }

  addPlayer() {
    if (this.newPlayerName.trim()=="") {
      alert("Player must have a name");
      return;
    }
    console.log("Add Player" + this.newPlayerName + " (" + this.newPlayerInit + ")");
    this.initService.setInit(this.newPlayerName,this.newPlayerInit).subscribe(
      data => {
        console.log("Player Added");
        this.newPlayerInit=0;
        this.newPlayerName="";
       this.loadInit();

      }
    );
  }

 removePlayer(name:string) {

    console.log("Remove Player" + name + ")");
    this.initService.removePlayer(name).subscribe(
      data => {
        console.log("Player Removed");
        this.newPlayerInit=0;
        this.newPlayerName="";
        this.loadInit();

      }
    );
  }
  
  clearInit() {
    this.initService.clearInit().subscribe(
      data => {
        console.log("Init Cleared");
        this.newPlayerInit=0;
        this.newPlayerName="";     
        this.loadInit();
      }
    );
  }
  
  sortList() {
    this.initList.list.sort(this.compare)
  }
  compare(a:InitItem,b:InitItem) {
    return b.init-a.init;
  }
  getCardToDisplay(index:number) {
    var cardidx = this.deck.findIndex( c=>c.value==index);
    var card = this.deck[cardidx];
    return card?.id + " " + card?.suit;
  }

  buildDeck() {
    this.deck = [];

    this.deck.push(new Card("Jo",153,"&#9787;","black",false));

    this.deck.push(new Card("A",152,"&spades;","black",false));
    this.deck.push(new Card("A",151,"&hearts;","red",false));
    this.deck.push(new Card("A",150,"&diams;","red",false));
    this.deck.push(new Card("A",149,"&clubs;","black",false));
   
    this.deck.push(new Card("K",148,"&spades;","black",false));
    this.deck.push(new Card("K",147,"&hearts;","red",false));
    this.deck.push(new Card("K",146,"&diams;","red",false));
    this.deck.push(new Card("K",145,"&clubs;","black",false));

    this.deck.push(new Card("Q",144,"&spades;","black",false));
    this.deck.push(new Card("Q",143,"&hearts;","red",false));
    this.deck.push(new Card("Q",142,"&diams;","red",false));
    this.deck.push(new Card("Q",141,"&clubs;","black",false));

    this.deck.push(new Card("J",140,"&spades;","black",false));
    this.deck.push(new Card("J",139,"&hearts;","red",false));
    this.deck.push(new Card("J",138,"&diams;","red",false));
    this.deck.push(new Card("J",137,"&clubs;","black",false));

    this.deck.push(new Card("10",136,"&spades;","black",false));
    this.deck.push(new Card("10",135,"&hearts;","red",false));
    this.deck.push(new Card("10",134,"&diams;","red",false));
    this.deck.push(new Card("10",133,"&clubs;","black",false));

    this.deck.push(new Card("9",132,"&spades;","black",false));
    this.deck.push(new Card("9",131,"&hearts;","red",false));
    this.deck.push(new Card("9",130,"&diams;","red",false));
    this.deck.push(new Card("9",129,"&clubs;","black",false));

    this.deck.push(new Card("8",128,"&spades;","black",false));
    this.deck.push(new Card("8",127,"&hearts;","red",false));
    this.deck.push(new Card("8",126,"&diams;","red",false));
    this.deck.push(new Card("8",125,"&clubs;","black",false));

    this.deck.push(new Card("7",124,"&spades;","black",false));
    this.deck.push(new Card("7",123,"&hearts;","red",false));
    this.deck.push(new Card("7",122,"&diams;","red",false));
    this.deck.push(new Card("7",121,"&clubs;","black",false));

    this.deck.push(new Card("6",120,"&spades;","black",false));
    this.deck.push(new Card("6",119,"&hearts;","red",false));
    this.deck.push(new Card("6",118,"&diams;","red",false));
    this.deck.push(new Card("6",117,"&clubs;","black",false));

    this.deck.push(new Card("5",116,"&spades;","black",false));
    this.deck.push(new Card("5",115,"&hearts;","red",false));
    this.deck.push(new Card("5",114,"&diams;","red",false));
    this.deck.push(new Card("5",113,"&clubs;","black",false));

    this.deck.push(new Card("4",112,"&spades;","black",false));
    this.deck.push(new Card("4",111,"&hearts;","red",false));
    this.deck.push(new Card("4",110,"&diams;","red",false));
    this.deck.push(new Card("4",109,"&clubs;","black",false));

    this.deck.push(new Card("3",108,"&spades;","black",false));
    this.deck.push(new Card("3",107,"&hearts;","red",false));
    this.deck.push(new Card("3",106,"&diams;","red",false));
    this.deck.push(new Card("3",105,"&clubs;","black",false));

    this.deck.push(new Card("2",104,"&spades;","black",false));
    this.deck.push(new Card("2",103,"&hearts;","red",false));
    this.deck.push(new Card("2",102,"&diams;","red",false));
    this.deck.push(new Card("2",101,"&clubs;","black",false));
  }
}
