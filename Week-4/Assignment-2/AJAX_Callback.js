const xhr = new XMLHttpRequest();
const main = document.getElementById('products-wapper');
const ul = document.createElement('ul');
ul.id = 'products-list';

function ajax(src, callback) {
  //Using XMLHttpRequest
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      console.log('success');
      console.log(response);
      //render Data into document
      callback(response);
    } else {
      console.log(`Status: ${xhr.status}`);
    }
  };
  xhr.open('GET', src);
  xhr.send();
}

function render(data) {
  // Create all items
  for (let i = 0; i < data.length; i++) {
    // Create list item
    const li = document.createElement('li');
    li.id = `item ${i + 1}`;

    //Create h2 tag for product name and append it into li
    const name = document.createElement('h2');
    const nameContent = document.createTextNode(data[i].name);
    name.className = 'name';
    console.log(data[i].name);
    name.appendChild(nameContent);
    li.appendChild(name);

    //Create p tag for product price and append it into li
    const price = document.createElement('p');
    const priceContent = document.createTextNode(`$${data[i].price}`);
    price.className = 'price';
    price.appendChild(priceContent);
    li.appendChild(price);

    //Create h2 tag for product description and append it into li
    const desc = document.createElement('p');
    const descContent = document.createTextNode(data[i].description);
    desc.className = 'desc';
    desc.appendChild(descContent);
    li.appendChild(desc);

    //Append li into ul
    ul.appendChild(li);
  }

  main.appendChild(ul);
}

//向school的API請求Data，並render在頁面上
ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products', function (response) {
  render(response);
}); // you should get product information in JSON format and render data in the page
