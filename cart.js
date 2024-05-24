const key = '81ca6e3ec819034c79e8edbea4d1baab';

function hamburgerFunction() {
    const menu = document.getElementById('hamburger-menu-wrapper');
    const icon = document.getElementById('mobile-menu-md');
    if (menu.style.maxHeight == "0px" || menu.style.maxHeight == "0" || menu.style.maxHeight == "") {
        // Open
        menu.style.display = "flex";
        setTimeout(() => {
            menu.style.maxHeight = "500px";
        }, 0);
        icon.src = 'files/mobile-menu-inverted.png';
    } else {
        // Close
        menu.style.maxHeight = "0";
        setTimeout(() => {
            menu.style.display = "none";
        }, 200); //make sure it matches the transition speed of the hamburger menu wrapper
        icon.src = 'files/mobile-menu.png';
    }
}
function changeVisibility() {
    const menu = document.getElementById('hamburger-menu-wrapper');
    const icon = document.getElementById('mobile-menu-md');
    if (window.innerWidth > 1024) {
        menu.style.display = "none";
        icon.src = 'files/mobile-menu.png';
        document.getElementById('prod-wrapper').classList.remove('container')
    } else {
        document.getElementById('prod-wrapper').classList.add('container')
    }
}
function switchTab(tab) {
    if(tab == 'home'){
        window.location.href = "index.html"; 
    } else if(tab == 'about') {
        window.location.href = "about.html"; 
    } else if(tab == 'contact-us') {
        window.location.href = "contact.html"; 
    }
}

//Cart stuff

const storedArray = JSON.parse(localStorage.getItem(key));

function updateCartNO(count){
    const cce = document.getElementById('cart-count') //cart-count-element
    
    if(count >= 0){
        cce.classList.remove('d-none')
    }
    if(count >= 10 && !cce.classList.contains('cart-count-bg-bigger')){
        cce.classList.add('cart-count-bg-bigger')
        cce.classList.add('cart-count-md-bigger')
    }
    if(count > 99) {
        count--
    }
    cce.innerHTML = count
}

function deleteProduct(idInStack) {
    // Remove product from storedArray
    storedArray.splice(idInStack * 3, 3);

    // Update localStorage with the new array
    localStorage.setItem(key, JSON.stringify(storedArray));

    // Remove product element from DOM
    const productWrapper = document.getElementsByClassName('product-wrapper')[idInStack];
    productWrapper.remove();

    // Update the amount of items in cart
    amountOfItemsInCart--;
    updateCartNO(amountOfItemsInCart);
    location.reload()
}

    // Create main wrapper div
    const prodWrapper = document.getElementById("prod-wrapper");

    // Create row div
    const rowDiv = document.createElement("div");
    rowDiv.className = "row no-gutters margin-changer";

    // Create first column div
    const colDiv1 = document.createElement("div");
    colDiv1.className = "col-12 col-xl-8 mx-auto";

    // Create shopping cart header
    const headerDiv = document.createElement("div");
    headerDiv.className = "d-flex align-items-end";

    const shoppingIcon = document.createElement("img");
    shoppingIcon.className = "shopping-icon-bg shopping-icon-md";
    shoppingIcon.src = "files/shop.png";
    shoppingIcon.alt = "";
    shoppingIcon.draggable = false;

    const shoppingText = document.createElement("p");
    shoppingText.className = "shopping-text-bg shopping-text-md";
    shoppingText.textContent = "Shopping Cart";

    headerDiv.appendChild(shoppingIcon);
    headerDiv.appendChild(shoppingText);

    // Create main hr
    const mainHr = document.createElement("hr");
    mainHr.style.color = "#fe719f";
    mainHr.style.border = "2px solid #fe719f";
    mainHr.style.opacity = "100";

    // Create products section
    const productsDiv = document.createElement("div");
    productsDiv.className = "d-flex m-l-c flex-column"; // Added flex-column to stack products vertically

    // Track if it's the first product
    var isFirstProduct = true;

 // Function to add a new product
var amntOfProducts = 0;
function addProduct(product) {
    // Create product wrapper
    const productWrapper = document.createElement("div");
    productWrapper.className = "product-wrapper d-flex";

    // Create products data wrapper
    const productsDataWrapper = document.createElement("div");
    productsDataWrapper.className = "products-data-wrapper";

    if (isFirstProduct) {
        const productTitle = document.createElement("p");
        productTitle.className = "prod-title-bg prod-title-md";
        productTitle.textContent = "product";
        productsDataWrapper.appendChild(productTitle);

        const productHr = document.createElement("hr");
        productHr.className = "pink-line-md";
        productsDataWrapper.appendChild(productHr);
    }

    const productDetailsDiv = document.createElement("div");
    productDetailsDiv.className = "d-flex align-items-center";

    const removeProduct = document.createElement("img");
    removeProduct.className = "remove-product-bg remove-product-md";
    removeProduct.src = "files/exit.png";
    removeProduct.draggable = false;
    removeProduct.alt = "";
    
    (function(index) {
        removeProduct.onclick = function() {
            deleteProduct(index);
        };
    })(amntOfProducts);

    const productImage = document.createElement("img");
    productImage.className = "product-image-bg product-image-md";
    productImage.src = product.imageSrc;
    productImage.draggable = false;
    productImage.alt = "";

    const productName = document.createElement("p");
    productName.className = "product-mame-bg product-mame-md";
    productName.textContent = product.name;

    productDetailsDiv.appendChild(removeProduct);
    productDetailsDiv.appendChild(productImage);
    productDetailsDiv.appendChild(productName);

    productsDataWrapper.appendChild(productDetailsDiv);

    // Create products price wrapper
    const productsPriceWrapper = document.createElement("div");
    productsPriceWrapper.className = "products-price-wrapper";

    if (isFirstProduct) {
        const priceTitle = document.createElement("p");
        priceTitle.className = "prod-title-bg prod-title-md";
        priceTitle.textContent = "price";
        productsPriceWrapper.appendChild(priceTitle);

        const priceHr = document.createElement("hr");
        priceHr.className = "pink-line-md";
        productsPriceWrapper.appendChild(priceHr);
    }

    const priceDetailsDiv = document.createElement("div");
    priceDetailsDiv.className = "d-flex align-items-center";

    const heightSetterPrice = document.createElement("img");
    heightSetterPrice.className = "height-setter-bg height-setter-md";
    heightSetterPrice.src = "files/heightSetter.png";
    heightSetterPrice.draggable = false;
    heightSetterPrice.alt = "";

    const productPrice = document.createElement("p");
    productPrice.className = "product-price-bg product-price-md";
    productPrice.textContent = product.price;

    priceDetailsDiv.appendChild(heightSetterPrice);
    priceDetailsDiv.appendChild(productPrice);

    productsPriceWrapper.appendChild(priceDetailsDiv);

    // Create products quantity wrapper
    const productsQuantityWrapper = document.createElement("div");
    productsQuantityWrapper.className = "products-quantity-wrapper";

    if (isFirstProduct) {
        const quantityTitle = document.createElement("p");
        quantityTitle.className = "prod-title-bg prod-title-md";
        quantityTitle.textContent = "quantity";
        productsQuantityWrapper.appendChild(quantityTitle);

        const quantityHr = document.createElement("hr");
        quantityHr.className = "pink-line-md";
        productsQuantityWrapper.appendChild(quantityHr);
    }

    const quantityDetailsDiv = document.createElement("div");
    quantityDetailsDiv.className = "d-flex align-items-center";

    const heightSetterQuantity = document.createElement("img");
    heightSetterQuantity.className = "height-setter-bg height-setter-md";
    heightSetterQuantity.src = "files/heightSetter.png";
    heightSetterQuantity.draggable = false;
    heightSetterQuantity.alt = "";

    const addAmountChanger = document.createElement("img");
    addAmountChanger.className = "amount-changer-bg amount-changer-md";
    addAmountChanger.src = "files/add.png";
    addAmountChanger.draggable = false;
    addAmountChanger.alt = "";

    const productAmount = document.createElement("p");
    productAmount.className = "product-amount-bg product-amount-md";
    productAmount.textContent = product.quantity;

    const subtractAmountChanger = document.createElement("img");
    subtractAmountChanger.className = "amount-changer-bg amount-changer-md";
    subtractAmountChanger.src = "files/subtract.png";
    subtractAmountChanger.draggable = false;
    subtractAmountChanger.alt = "";

    quantityDetailsDiv.appendChild(heightSetterQuantity);
    quantityDetailsDiv.appendChild(subtractAmountChanger);
    quantityDetailsDiv.appendChild(productAmount);
    quantityDetailsDiv.appendChild(addAmountChanger);

    productsQuantityWrapper.appendChild(quantityDetailsDiv);

    // Create fill in line
    if (isFirstProduct) {
        const fillInLine = document.createElement("div");
        fillInLine.className = "fill-in-line";

        const fillTitle = document.createElement("p");
        fillTitle.className = "prod-title-bg prod-title-md";
        fillTitle.innerHTML = "&nbsp;";

        const fillHr = document.createElement("hr");
        fillHr.className = "pink-line-md pink-line-fill";

        fillInLine.appendChild(fillTitle);
        fillInLine.appendChild(fillHr);
        // Append all wrappers to product wrapper
        productWrapper.appendChild(productsDataWrapper);
        productWrapper.appendChild(productsPriceWrapper);
        productWrapper.appendChild(productsQuantityWrapper);
        productWrapper.appendChild(fillInLine);
    } else {
        productWrapper.appendChild(productsDataWrapper);
        productWrapper.appendChild(productsPriceWrapper);
        productWrapper.appendChild(productsQuantityWrapper);
    }

    productsDiv.appendChild(productWrapper);

    // Set isFirstProduct to false after the first product is added
    isFirstProduct = false;
    amntOfProducts++;
}


    var cartDataARR = []
    cartDataARR = storedArray
    var totalCost = 0
    var amountOfItemsInCart = storedArray.length/3

    for(var i = 0 ; i < storedArray.length ; i += 3){
        var temp = storedArray[i+1]
        temp = temp.substr(1)
        totalCost += parseInt(temp)
    }

    //Name, Price, both are the element themselves

    for(var i = 0; i < cartDataARR.length; i += 3){
        var count = 0
        for (var j = 0; j < cartDataARR.length; j++){
            if (cartDataARR[i] == cartDataARR[j]){
                count++
            }
        }
        var nameElement = cartDataARR[i]
        if(count > 1) {
            var count1 = 0
            for(var j = 0; j < cartDataARR.length; j++){
                
                if(nameElement == cartDataARR[j]){
                    count1++
                }
                if(count1 > 1) {
                    count1--
                    cartDataARR.splice(j, 3)
                    console.log(cartDataARR)
                }
            }
        }
        const newProduct = {
            name: cartDataARR[i],
            imageSrc: "files/products/" + `${cartDataARR[i + 2]}` + ".png",
            price: cartDataARR[i+1],
            quantity: count
        }
        console.log(cartDataARR)
        addProduct(newProduct)
    }


    colDiv1.appendChild(headerDiv);
    colDiv1.appendChild(mainHr);
    colDiv1.appendChild(productsDiv);

    // Create second column div
    const colDiv2 = document.createElement("div");
    colDiv2.className = "col-12 col-xl-4";

    // Create form
    const form = document.createElement("form");
    form.classList.add('checkout-wrapper')
    formautocomplete = "off"

    // Name input
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.classList.add('name-label')
    nameLabel.htmlFor = "name";
    form.appendChild(nameLabel);

    form.appendChild(document.createElement("br"))
    
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.classList.add('name-input')
    nameInput.name = "name";
    nameInput.required = true;
    form.appendChild(nameInput);

    form.appendChild(document.createElement("br"))

    // Email input
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.classList.add('email-label')
    emailLabel.htmlFor = "email";
    form.appendChild(emailLabel);

    form.appendChild(document.createElement("br"))

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.classList.add('email-input')
    emailInput.name = "email";
    emailInput.required = true;
    form.appendChild(emailInput);

    form.appendChild(document.createElement("br"))

    // Address input
    const addressLabel = document.createElement("label");
    addressLabel.textContent = "Address:";
    addressLabel.classList.add('address-label')
    addressLabel.htmlFor = "address";
    form.appendChild(addressLabel);

    form.appendChild(document.createElement("br"))
    
    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.id = "address";
    addressInput.classList.add('address-input')
    addressInput.name = "address";
    addressInput.required = true;
    form.appendChild(addressInput);

    // Estimated total 
    const estimatedTotal = document.createElement("p");
    estimatedTotal.innerHTML = "Estimated cost: ₱" + totalCost;
    estimatedTotal.classList.add('estimated-cost')
    form.appendChild(estimatedTotal);

    // Place order button
    const placeOrderButton = document.createElement("button");
    placeOrderButton.classList = "order"
    placeOrderButton.textContent = "Place Order";

    placeOrderButton.onclick = function() {
        placeOrder();
    };

    colDiv2.appendChild(form);
    colDiv2.appendChild(placeOrderButton);

    // Append both column divs to the row div
    rowDiv.appendChild(colDiv1);
    rowDiv.appendChild(colDiv2);

    // Append the row div to the main wrapper div
    prodWrapper.appendChild(rowDiv);

    function placeOrder() {
        const cce = document.getElementById('cart-count') //cart-count-element
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        if(name == "" || email == "" || address == "") {
            alert('Please fill in all forms!')
            return
        }
    
        // Construct cust_order array from storedArray
        const cust_order = [];


        const amntOfProd = document.getElementsByClassName('product-wrapper')

        var amntChange = 0
        for (var i = 0; i < amntOfProd.length; i++) {
            const prodName = amntOfProd[i].getElementsByClassName('product-mame-bg')[0].innerHTML
            var amntOfCurrProd = parseInt(amntOfProd[i].getElementsByClassName('product-amount-bg')[0].innerHTML) - amntChange
            const price = parseInt(amntOfProd[i].getElementsByClassName('product-price-bg')[0].innerHTML.slice(1))

            cust_order.push({
                prod_name: prodName,
                prod_price: price
            });

            if(amntOfCurrProd > 1) {
                amntChange++
                i--
            } else {
                amntChange = 0
            }
        }
    
        // Construct data object to be sent
        const data = {
            cust_name: name,
            cust_addr: address,
            cust_email: email,
            cust_order: JSON.stringify(cust_order)
        };
        console.log(cust_order)
    
        // Convert data object to URL-encoded format
        const params = new URLSearchParams(data).toString();
    
        // Redirect to the specified online page with the data as query 
        window.location.href = "http://sirjm.infinityfreeapp.com/checkout.php?" + params;
    }
    function updateCartNO(count){
        const cce = document.getElementById('cart-count') //cart-count-element
        
        if(count >= 0){
            cce.classList.remove('d-none')
        }
        if(count >= 10 && !cce.classList.contains('cart-count-bg-bigger')){
            cce.classList.add('cart-count-bg-bigger')
            cce.classList.add('cart-count-md-bigger')
        }
        if(count > 99) {
            count--
        }
        cce.innerHTML = count
    }

updateCartNO(amountOfItemsInCart)