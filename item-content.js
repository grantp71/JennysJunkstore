  /*
   *javascript to generate an initial price
   *then as up or down buttons are clicked
   *the new price is recalculated
   */
function Item(maker, desc, size, price, amt){  // object constructor function
  this.maker = maker;                                // object prototype
  this.desc = desc;
  this.size = size;
  this.price = price;
  this.amt = amt;
}

var delft_chargerItem = new Item('Delft', 'Charger', '18 dia', 100, 10);

// set ranges for number
var pR = delft_chargerItem.price;
var rangeMin = pR / 2;
var rangeMax = pR + rangeMin;
console.log(pR, rangeMin, rangeMax);

var initialGamePrice = 0;
var gamePrice = 0;
var subPrice = 0;
var addPrice = 0;
initialGamePrice = Math.floor( (Math.random() * (rangeMax)) - (Math.random() * (rangeMin) + 1) ) + rangeMin;

console.log(initialGamePrice);

var amt = delft_chargerItem.amt;

console.log(delft_chargerItem.amt);

function changePriceSub(gamePrice, amt) {
  subPrice = initialGamePrice;
  var gamePrice = subPrice - amt;
  return subPrice;

  return gamePrice;

}
console.log(subPrice);
console.log(gamePrice);


function changePriceAdd(gamePrice, amt) {
  var gamePrice = initialGamePrice;
  var addPrice = gamePrice + amt;
  return addPrice;

}
console.log(addPrice);

console.log(changePriceSub(gamePrice, amt));
console.log(changePriceAdd(gamePrice, amt));


var bidOk;    // initialize bidOk
function bidOK(){
    var i; bid = 0;
    for (var i = 0; i < arguments.length; i++) {
      num = arguments[randrange];
    }
  return True;
  }

var checkBid = gamePrice.onclick;

var el = document.getElementById('gamePrice');        // creating event listener
//el.addEventListener('onclick', changePrice, false);   //

/*
var item = {        //create a new item object
  class:'';         //using literal method
  name:['',''];
  size:[ ,'x', ];
  price:['$', num]  //num will be used  below to
}                   //to access item.price[1]
var itemName = item.name;
var itemDescrip = item.size + item.class;
*/

/*
function updatePrice(a){
  var i; num = 0;
  for(i = 0; i < arguments.length; i++) {
    num = arguments[randrange];
  }
  return num;
}
*/
