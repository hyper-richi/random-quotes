import axios from "axios";

type ResQuotesType = {
  quotes: QuoteType[]
 }
export type QuoteType = {
    author : string
    quote : string
}

let quotesList:Array<QuoteType> = [];
    // методы get post put delete и др являются genericami
  export async function getRandomQuoteAPI() {
     if (quotesList.length === 0) {
      const response = await axios.get<ResQuotesType>('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'); // /
      const quotesData =  response.data.quotes;
      quotesList = quotesData;
     }
   return  quotesList[Math.floor(Math.random() * quotesList.length) as number];
  }