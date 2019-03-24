import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Well rested and proud of His work, on the 8th day He created the Avocado", "~'HE' said it",new Date() ),
    new Quote(2,"Eat guava they said, It will be fun they said", "~Wazza Struggle",new Date() ),
    new Quote(3, "Sadness and brocken promises, Watermellon!!", "~RnB Artist",new Date()  ),
    new Quote(4, "The juice stream floeth from thy mango, down thy arm, Happiness!!", "~Wiseman Tosh",new Date() ),
    new Quote(5, "Bananas are to rice what milk and honey is to heaven", "~Wiseman Raymond",new Date() ),
    new Quote(6, "Repeat after me! 'Pineapples do not belong on anything hot or cooked'", "~Take Myword",new Date() ),

]
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}
toogleDetails(index: string | number){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }
  constructor() { }

  ngOnInit() {
  }

}
