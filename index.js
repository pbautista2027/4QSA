var cartDataARR = [] //Name, Price, both are the element themselves
const key = '81ca6e3ec819034c79e8edbea4d1baab'
localStorage.setItem(key, JSON.stringify(cartDataARR));

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
        const p = document.getElementsByClassName("product-wrapper");
        console.log(p)
        for (var i = 0; i < p.length; i++) {
            console.log(p[i])
            if(p.item(i).classList.contains('col-xl-4')) { //Switch to norm mode
                p.item(i).classList.remove('col-xl-4')
                p.item(i).classList.remove('col-xxl-12')
                p.item(i).classList.remove('col-xxl-6')
                if(p.item(i).classList.contains('first')){
                    p.item(i).classList.add('col-md-12')
                } else {
                    p.item(i).classList.add('col-md-6')
                }
                p.item(i).classList.add('col-lg-4')
            } else { //Switch to mobile mode
                if(p.item(i).classList.contains('first')){
                    p.item(i).classList.add('col-xxl-12')
                } else {
                    p.item(i).classList.add('col-xxl-6')
                }
                p.item(i).classList.remove('col-lg-4')
                p.item(i).classList.remove('col-md-6')
                p.item(i).classList.add('col-xl-4')
            }
        }
    }
}

function addToCart(idOfProductAdded) {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const productDiv = document.getElementById(idOfProductAdded)
    const productName = productDiv.querySelectorAll('.product-name-bg');
    
    productName.forEach(function(productName) {
        document.getElementById('item-popup').innerHTML = productName.innerHTML
    });


    if(count == 99){
        document.getElementById('item-popup-after').classList.remove(d-none)
        document.getElementById('item-popup').innerHTML = "Max limit of products reached!"
    }

    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 10000); // Popup will disappear after 10 seconds

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    const cce = document.getElementById('cart-count') //cart-count-element
    var count = parseInt(cce.innerHTML)

    if(count == 0){
        cce.classList.remove('d-none')
    }
    count++
    if(count >= 10 && !cce.classList.contains('cart-count-bg-bigger')){
        cce.classList.add('cart-count-bg-bigger')
        cce.classList.add('cart-count-md-bigger')
    }
    if(count > 99) {
        count--
    }
    cce.innerHTML = count

    productName.forEach(function(productName) {
        cartDataARR.push(productName.innerHTML)
    });

    const a = productDiv.querySelector('.product-misc-wrapper')
    const b = a.querySelector('.product-misc-bg')
    const c = b.querySelector('.product-price-bg')

    cartDataARR.push(c.innerHTML)

    cartDataARR.push(idOfProductAdded)
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

function getSimilarity(str1, str2) {
    const lengthA = str1.length;
    const lengthB = str2.length;
    const maxLength = Math.max(lengthA, lengthB);
    var commonLength = 0;

    for (var i = 0; i < Math.min(lengthA, lengthB); i++) {
        if (str1[i] === str2[i]) {
            commonLength++;
        }
    }

    return commonLength / maxLength;
}

function sortProducts(query) {
    const list = ['Barbie Airplane', 'Baker Barbie Duo', 'Supermarket Barbie', 'Barbie Camper', 'Barbie House', 'Barbie Bedroom', 'Beautiful Village Set', 'Peppa Pig Pack', 'Ferris Wheel Set', 'Peppa Pig House', 'Peppa Family & Friends', 'Peppa Pig School', 'Toy Truck Carrier', 'Dump Truck Toy', 'Construction Set', 'Tow Truck', 'Fire Truck Set', 'Rideable Car', 'Cocomelon Family', 'Doctor Melon Set', 'Coco Musical Train', 'Cocomelon Mini Plush', 'Learning Bus', 'Cocomelon Bath']

    // Create an array of objects with item and its similarity score
    const matches = list.map(item => ({
        item: item,
        similarity: getSimilarity(query.toLowerCase(), item.toLowerCase())
    }));

    // Filter out items with zero similarity
    const filteredMatches = matches.filter(match => match.similarity > 0);

    // Sort the matches by similarity score in descending order
    filteredMatches.sort((a, b) => b.similarity - a.similarity);

    // Return only the items, now sorted by their similarity
    return filteredMatches.map(match => match.item);
}

function updateProducts() {
    const searchBar = document.getElementById('search-input');
    const query = searchBar.value;
    const rankedResults = sortProducts(query);
    console.log(rankedResults)
    searchBar.value = null
    const productNamesList = ['Barbie Airplane', 'Baker Barbie Duo', 'Supermarket Barbie', 'Barbie Camper', 'Barbie House', 'Barbie Bedroom', 'Beautiful Village Set', 'Peppa Pig Pack', 'Ferris Wheel Set', 'Peppa Pig House', 'Peppa Family & Friends', 'Peppa Pig School', 'Toy Truck Carrier', 'Dump Truck Toy', 'Construction Set', 'Tow Truck', 'Fire Truck Set', 'Rideable Car', 'Cocomelon Family', 'Doctor Melon Set', 'Coco Musical Train', 'Cocomelon Mini Plush', 'Learning Bus', 'Cocomelon Bath']
    const productIdList = ['barbieAirplane', 'barbieBD' ,'barbieSPMRKT', 'barbieCamper', 'barbieHouse', 'barbieBedroom', 'peppaVillSet', 'peppaPP', 'peppaFW', 'peppaPH', 'peppaFNF', 'peppaPS', 'vehicleToyT', 'vehicleDT', 'vehicleCONST', 'vehicleTowT', 'vehicleFT', 'vehicleCar', 'cocoFam', 'cocoDoc', 'cocoMT', 'cocoMP', 'cocoLB', 'cocoBath']
    
    for(var i = 0; i < rankedResults.length; i++) {
        for(var j = 0; j < productNamesList.length; j++){
            if(rankedResults[i] == productNamesList[j]){rankedResults[i] = document.getElementById(`${productIdList[j]}`)}
        }
    }

    for(var i = 0; i < productIdList.length; i++){
        if(!rankedResults.includes(document.getElementById(`${productIdList[i]}`))){
            document.getElementById(`${productIdList[i]}`).classList.add('blocked-product')
        } else {
            document.getElementById(`${productIdList[i]}`).classList.remove('blocked-product')
        }
    }

    if(rankedResults.length <= 0) {
        productIdList.forEach(element => {
            document.getElementById(`${element}`).classList.remove('blocked-product')
        });
    }
}

//Cart stuff

function gotoCart() {
    localStorage.setItem(key, JSON.stringify(cartDataARR));
    window.location.href = "cart.html"; 
}



