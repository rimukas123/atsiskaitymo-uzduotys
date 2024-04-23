/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
  
    
    wasExpensive() {
      return this.budget > 100000000;
    }
  }
  
  
  const avengers = new Movie("Avengers: Endgame", "Anthony Russo, Joe Russo", 356000000);
  
  
  console.log(avengers.title);
  console.log(avengers.director);
  console.log(avengers.budget);
  console.log(avengers.wasExpensive());
  