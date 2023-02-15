// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
// opdracht 1.a
const tvSort = inventory.filter((tvType) => {
  return tvType.brand;
})
console.log(tvSort)

//opdracht 1.b

const soldOut = inventory.filter((tvSoldout) => {
  //(inventory.originalStock === inventory);{
      return tvSoldout.originalStock === tvSoldout.sold

});
console.log(soldOut)

// opdracht 1.c

//declareer een var waarin je nb lights opslaat
// loop over de array heen van tv's
//vergelijk voor iedere entry of de tv mb light heeft
// console log

const ambiTVlights = inventory.filter((tvLight) => {
  return tvLight.options.ambiLight;

})
console.log(ambiTVlights)

//opdracht 1.d

// delareer tv's van laagste naar hoogste prijs
//loop over alle tv's
//vergelijk prijs
// console log

const tvPrice = inventory.sort((a, b) => {
  if (a.price > b.price) {
    return 1
  }
  if (a.price < b.price) {
    return -1
  }
});
console.log(tvPrice)



//DOM & for-loop gebruiken; gebruik maken van getElementById en HTML dient id te hebben


// opdracht 2.a

// hoeveel tv's zijn er verkocht staat onder 'sold'
// declareer alle tv's die verkocht zijn in een variabele
// maak for-loop
// maak console.log

const soldTv = inventory.map((soldVerkocht) => {
return soldVerkocht.sold || 0;
});
console.log(soldTv)

//opdracht 2.b
// maak de uitkomst in groen
//maak in html en css  een tekst zodat het op de pagina zichtbaar groen genaakt kan worden

const tvOne = document.getElementById("tvOne");

console.log(tvOne);

tvOne.textContent = inventory[0].sold;

const tvTwo = document.getElementById("tvTwo");

console.log(tvTwo);

tvTwo.textContent = inventory[1].sold;


/*const tvTwee = document.getElementById( "tv2');
tv2.innerHTML =`
   <p>${inventory[1].sold}</p>
    <p>${inventory[1].brand}</p>`;*/

// heb de innerhtml geprobeerd, maar die lukt niet.

//OPDRACHT 2.C

//vraag: hoeveel tv's zijn er ingekocht, schrijf script en log in console
//SCRIPT SCHRIJVEN MET inventory + originalStock aan te spreken

const buyOriginalStock = inventory.map((inventorstock) => {
  return inventorstock.originalStock || 0;
});
console.log("%buyOriginalStock", "color:blue");

//OPDRACHT 2.D

//VRAAG: ZORG DAT DIT AANTAL IN BLAUW WORDT WEERGEGEVEN

//console.log("%buyOriginalStock", "color:"blue); nu in console blauw

//VRAAG 2.E

//GEEF IN ROOD WEER HOEVEEL TV'S ER VERKOCHT MOETEN WORDEN
//MAAK SCRIPT MET INVENTORY STOCK TV (originalStock) - SOLD TV (sold) = NOG TE VERKOPEN TV'S
//CONSOLE.LOG
//UITKOMST ROOD MAKEN

const tvsLeft = inventory.map((item) => {
  return item.originalStock - item.sold;
});

console.log(tvsLeft);

const itemOne = document.getElementById("item1");

console.log(item1);


//OPDRACHT 3.A

//ARRAY-METHODE OM ALLE TVMERKEN IN EEN LIJST OP DE PAGINA WEER TE
//(GEVEN). moet ook werken als er 200 instaan.

const allTvBrands = inventory.map((item) => {

  return item.brand
});

console.log( allTvBrands)

/*let = allTvBrands
for (let = i; i < allTvBrands.length; i++) {
  console.log(names.at[i])
  console.log(i)
}; Ik vermoed dat deze forloop ook toegevoegd dient te worden


 */

//OPDRACHT 3.B

// CODE UIT 3A OM NAAR EEN FUNCTIE DIE ARRAY MET TV OBJECTEN VERWACHT
// DENK AAN FUNCTIE-DECLARARTIE
// FUNCTION

Function allTvs(name); {
const outcome = inventory.brand;
return outcome;
}

const tvNameBrand = allTvs(inventory.brand);
console.log(tvNameBrand);