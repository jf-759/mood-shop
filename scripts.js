import data from './data.js'

const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop is run
for (let i = 0; i < data.length; i += 1 ) {
    // create a new div element and give it a class name
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    // create an image element
    const img = document.createElement('img');
    // goes through each image in the list using 'i' and the for loop
    img.src = data [i].image
    img.width = 300
    img.height = 300
    // add the image to the div
    newDiv.appendChild(img)

    // put new div inside items container

    itemsContainer.appendChild(newDiv)

    // create a paragraph element
    const desc = document.createElement('P')
    // give the paragraph text from data
    desc.innerText = data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)
    // do the same for price
    const price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    const button = document.createElement('button')
    button.className = 'add-to-cart'

    button.dataset.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

}

const cart = []

const button = document.createElement('button')
button.className = 'add-to-cart'

  
document.body.addEventListener('click', (e) => {
    if (e.target.matches('.add-to-cart')) {
    console.log(e.target)
    const addItemToCart = (id, price) => {
        for (let i = 0; i < cart.length; i += 1) {
            if (cart[i].id === id) {
                cart[i].qty += 1
                return
            }
        }
        cart.push({id, price, qty: 1})
    }
    addItemToCart(e.target.dataset.id, e.target.dataset.price)
    console.log(cart)
    displayCart()
    const removeFromCart = (id) => {
// Loop over items in cart
    for (let i = 0; i < cart.length; i += 1 ) {
        // get an item 
        const item = cart[i]
        // Does id match the item id? 
        if (id === item.id) {
        // if so, subtract 1 from item qty
            item.qty -= 1
            // Check if the qty is 0
            if (item.qty === 0) {
                // If so remove this item from the cart
                cart.splice(i, 1)
            }
            return 
        }
    }
}
    } else if (e.target.matches('.button-add')) {
    const name = e.target.dataset.id
    addToCart(name)
    displayCart() 
    // increase qty by 1
    } else if (e.target.matches('.button-sub')) {
    
    const name = e.target.dataset.id
    removeFromCart(name)
    displayCart()
    // decrease qty by 1
    }
 })

const removeFromCart = (id) => {
// Loop over items in cart
    for (let i = 0; i < cart.length; i += 1 ) {
        // get an item 
        const item = cart[i]
        // Does id match the item id? 
        if (id === item.id) {
        // if so, subtract 1 from item qty
            item.qty -= 1
            // Check if the qty is 0
            if (item.qty === 0) {
                // If so remove this item from the cart
                cart.splice(i, 1)
            }
            return 
        }
    }
}

 const addToCart = (id) => {
    for (let i = 0; i < cart.length; i += 1) {
        const item = cart [i]
        if (id === item.id) {
            item.qty += 1
            return
        }
    }
 }
 
const displayCart = () => {
    let cartStr = ''
    for (let i = 0; i < cart.length; i += 1){
        const item = cart[i]
        cartStr += `<li>
            <span>${item.id}</span>
            <input type="number" value="${item.qty}" class="input-qty" data-id="${item.id}">
            <span>${item.price}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
            <button class="button-add" data-id="${item.id}">+</button>
            <button class="button-sub" data-id="${item.id}">-</button>
        </li>`
    }

    const cartItems = document.querySelector('#cart-items')
    cartItems.innerHTML = cartStr
}

document.body.addEventListener('keydown', (e) => {
    if (e.target.matches('.input-qty')) {
        if (e.key === "Enter") {
            const name = e.target.dataset.id
            const value = parseInt(e.target.value)
            const updateCart = (id, val) => {
                console.log(id, val)
                for (let i = 0; i < cart.length; i += 1) {
                    const item = cart [i]
                    if (id === item.id) {
                        item.qty = val

                        if (item.qty < 1) {
                            cart.splice(i, 1)
                        }
                        return
                    }
                }
            }
            updateCart (name, value)
            console.log(e)
            displayCart()
        }
    }
})


// document.body.addEventListener('click', (e) => {
//     console.log(e.target)
// })
// reminder notes for a new developer:

//      const newDiv = document.createElement('div') 
//      same as <div></div> in html
//      newDiv.className = 'item'
//      same as <div class = 'item'></div> in html