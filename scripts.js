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
    console.log(img)

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

}

    const button = document.createElement('button')

    button.dataset.id = data[i].name

    button.dataset.price = data[i].price

    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

// reminder notes for a new developer:

//      const newDiv = document.createElement('div') 
//      same as <div></div> in html
//      newDiv.className = 'item'
//      same as <div class = 'item'></div> in html