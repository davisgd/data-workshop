import React from 'react';
import DATA from './DATA';

// returns user object based on user ID #
const getUserById = (id) => {
  let user
  for(let n = 0; n < DATA.users.length; n += 1){
    if(DATA.users[n].id === id){
      user = DATA.users[n]
    }
  }
  return user
}

// returns product object based on product ID #
const getProductById = (id) => {
  let product
  for(let n = 0; n < DATA.products.length; n += 1){
    if(DATA.products[n].id === id){
      product = DATA.products[n]
    }
  }
  return product
}

// returns product by ID, using forEach method
const getProductByIdTwo = (id) => {
  let product
  DATA.products.forEach((p) => {
    if(p.id === id){
      product = p
    }
  })
  return product
}

// return product by ID, using .find method
const getProductByIdThree = (id) => {
  return DATA.products.find((p) => {
    return p.id === id
  })
}

// loop over the orders, print user's name and product's name
// use functions above

const getUserProductName = (id) => {
  DATA.orders.forEach((o) => {
   console.log(getUserById(o.userId))
   console.log(getProductById(o.productId))
  })
}

const getOrderById = (id) => {
  let order
  DATA.orders.forEach((o) => {
    if(o.id === id){
      order = o
    }
  })
  return order
}

const App = () => {
  console.log(getMostExpensiveProduct())
  console.log(getOrderInfo())
  return (
    <div>
      hello world
    </div>
  );
}

// Works like a charm
const getActiveUsers = (id) => {
  let activeUserArray = [];
  DATA.users.forEach((u) => {
    if(u.accountActive === true){
      activeUserArray.push(u)
    }
  return activeUserArray
  })
  console.log(activeUserArray)
}

// Works like a charm
const getMostExpensiveProduct = (id) => {
  let mostExpensiveProduct = 0
  DATA.products.forEach((m) => {
    if(m.price > mostExpensiveProduct){
      mostExpensiveProduct = m.price
    }
  })
  return mostExpensiveProduct
}

// Works like a charm
const getOrderInfo = (id) => {
  let orderArray = []
  DATA.orders.forEach((o) => {
    orderArray.push({
      userName: getUserById(o.userId).name,
      orderId: o.id,
      price: getProductById(o.productId).price
    })
  })
  return orderArray
}

export default App;
