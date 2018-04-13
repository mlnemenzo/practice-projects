


class Deck {

    constructor() {

        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var deck = [];
    }

    cardDeck(suits, cards) {
        for (var s = 0; s < this.suits.length; s++) {
            for (var n = 0; n < this.names.length; n++) {
                // cards.push(new card(n + 1,this.names[n], this.suits[s]));
                $('<div>').

            }
        }
    }

    shuffleCards(cards) {
        return Math.floor(Math.random() * 10);
        this.cardDeck()
    }

    playerCards() {



    }



}




// class playerObj {
//     constructor(name, player, cards) {
//         this.name = '';
//         this.player = '';
//         this.cards = []
//     }
//
//     // function to give player 6 cards
// }