const Card = require('./card')
const FiveCards = require('./fivecards')

const LINE_MAX = 13

function printList(list) {
  let res = []
  list.forEach((card, i) => {
    res.push(card)
    i += 1
    if (i % LINE_MAX === 0) {
      console.log(`${res.join(' ')}`)
      res = []
    }
  })
}

function generate5CardList(gencount) {
		// Generate List<FiveCards>
		p5CardsList = [];
		deckCard = [];

		// Make a Card Deck
		for (let s=Card.CLUB; s<=Card.SPADE; s++)
			for (let r=Card.ACE; r<=Card.KING; r++){
				deckCard.push(new Card(s,r));
			}

		for (let i=1; i<=gencount; i++) {

			suffle(deckCard);

			// Make a Card Deck
			let indDeck = 0;

			fc = new Array(5);
			let ipos = 0;
			while (indDeck < deckCard.size()) {
				fc[ipos] = deckCard[indDeck];
				indDeck++;
				ipos++;
				if (ipos == 5) {
					p5CardsList.add(new FiveCards(fc));
					ipos = 0;
				}
			}
		}
		return p5CardsList;
	}
	function suffle (list) {
		const  SUFFLECOUNT = 100;

		//println "List before Suffle"
		//printList(list);
		let oneOrzero = 0;
		let lsize = list.length;
		let ind = 0;
		for (let i=1; i <= SUFFLECOUNT*lsize; i++) {
			// random number  0 or 1
			oneOrzero = Math.random() <=0,5 ? 0 : 1
			//println "ind=$ind rand=$oneOrzero card=${list[ind]}"
			if (oneOrzero === 0) {
				// move to back
				list.push(list.remove(ind));
			}
			else {
				ind++;
				ind %= lsize;
			}
		}
		//println "List after Suffle"
		//printList(list);
	}
	function printFiveCardsList(List<FiveCards> fcList) {
		int ccount = 0;
		for (FiveCards fc : fcList) {
			println "${++ccount} $fc";
		}
	}

// Main

// Test for a Card Deck
let deck = []
for (let s = Card.CLUB; s <= Card.SPADE; s++) {
  for (let r = Card.ACE; r <= Card.KING; r++) {
    deck.push(new Card(s, r))
  }
}
printList(deck)

// Test for Five Cards List

