console.log('loaded app');

"this is string"
5
12
true
false

undefined
null

let x = 9
let greeting = `He Said "how's it going"`
let decision = true

console.log(x)

if (x > 10) {
  console.log('x is greater than 10');
}

if (decision) {
  console.log('they said yes')
}

for (let i = 1; i <= 10; i++) {
  // console.log('looping', i * x);
}

let arr = [1, 2, 3, 5, 96]
let stringArr = ['hello', 'whats good', 'howdy']
let mixedArr = [1, 'howdy', '🦄', true, [1, 10]]

// console.log(stringArr[0]);
// console.log(stringArr[1]);
// console.log(stringArr[2]);

for (let i = 0; i < stringArr.length; i++) {
  console.log('array loop', stringArr[i]);
}

let catName = 'Cheese'
let catAge = 8
let catLikes = 'beans'
let catColor = 'orange'

let catExample = {
  name: 'Cheese',
  age: 8,
  likes: 'beans',
  color: 'orange'
}

let cats = [
  {
    name: 'Cheese',
    age: 8,
    likes: 'beans',
    color: 'orange'
  },
  {
    name: 'Bean',
    age: 6,
    likes: 'cheeses',
    color: 'black'
  },
  {
    name: 'Cream',
    age: 7,
    likes: null,
    color: 'white'
  }
]
console.log('this is Bean, they are a black cat who likes cheeses');

for (let i = 0; i < cats.length; i++) {
  let cat = cats[i]
  console.log(cat);
  // console.log('this is Bean, they are a black cat who likes cheeses');
  // console.log(cat.name, cat.color, cat.likes);
  console.log(`this is ${cat.name}, they are a ${cat.color} cat who likes ${cat.likes}`);
}

function doSomething() {
  console.log('I did it');
}

function meetTheCats() {
  for (let i = 0; i < cats.length; i++) {
    let cat = cats[i]
    console.log(`this is ${cat.name}, they are a ${cat.color} cat who likes ${cat.likes}`);
  }
}

// WIZBANGS LOGIC -----------------------------------
let shopItems = [
  {
    type: 'boots',
    price: 10
  },
  {
    type: 'bow',
    price: 15
  },
  {
    type: 'razor',
    price: 100
  },
  {
    type: 'helm',
    price: 20
  },
  {
    type: 'beans',
    price: 1
  },
  {
    type: 'ring',
    price: 5000
  },
  {
    type: 'rope',
    price: 5
  },
  {
    type: 'bag',
    price: 32
  }
]

let cart = []

let cartCount = 0

function addItemToCart(type) {
  console.log('adding an item', type);
  cartCount++
  // console.log(cartCount);
  // @ts-ignore // just to make the type conversion happy
  document.getElementById('cart-count').innerText = cartCount

  let foundItem = shopItems.find(item => item.type == type)
  console.log(foundItem);
  cart.push(foundItem)
  // console.log(cart);
  drawCartItems()
}

function drawCartItems() {
  console.log('drawing the cart');
  let itemsString = ''
  let itemsTotal = 0
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i]
    itemsString += `<div> ${cartItem.type} |  🪙${cartItem.price}  </div>`
    itemsTotal += cartItem.price
  }
  console.log(itemsString);
  document.getElementById('cart-items').innerHTML = itemsString
  // @ts-ignore
  document.getElementById('cart-total').innerText = itemsTotal
}