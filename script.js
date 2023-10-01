const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');


const mockDatabase = {
    "rice": "Water Footprint: 2,497 liters/kg",
    "chicken": "Water Footprint: 4,325 liters/kg",
    "beef": "Water Footprint: 15,415 liters/kg",
    "bread": "Water Footprint: 1,608 liters/kg",
    "apple": "Water Footprint: 822 liters/kg",
    "banana": "Water Footprint: 790 liters/kg",
    "potato": "Water Footprint: 287 liters/kg",
    "tomato": "Water Footprint: 214 liters/kg",
    "egg": "Water Footprint: 3,300 liters/kg",
    "cheese": "Water Footprint: 5,060 liters/kg",
    "sugar": "Water Footprint: 1,780 liters/kg",
    "chocolate": "Water Footprint: 17,196 liters/kg",
    "milk": "Water Footprint: 1,020 liters/liter",
    "tea": "Water Footprint: 132 liters/cup",
    "coffee": "Water Footprint: 18,900 liters/kg",
    "beer": "Water Footprint: 300 liters/glass",
    "wine": "Water Footprint: 110 liters/glass",
    "cotton shirt": "Water Footprint: 2,700 liters/shirt",
    "leather shoes": "Water Footprint: 8,000 liters/pair",
    "jeans": "Water Footprint: 7,600 liters/pair",
    "laptop": "Water Footprint: 20,000 liters/device",
    "smartphone": "Water Footprint: 12,000 liters/device",
    "paper": "Water Footprint: 10 liters/sheet",
    "car": "Water Footprint: 400,000 liters/car",
    "lettuce": "Water Footprint: 238 liters/kg",
    "pork": "Water Footprint: 5,988 liters/kg",
    "pasta": "Water Footprint: 1,850 liters/kg",
    "corn": "Water Footprint: 1,222 liters/kg",
    "wheat": "Water Footprint: 1,827 liters/kg",
    "orange juice": "Water Footprint: 560 liters/liter",
    "soybeans": "Water Footprint: 2,145 liters/kg",
    "olive oil": "Water Footprint: 2,421 liters/liter",
    "peanuts": "Water Footprint: 2,385 liters/kg",
    "almonds": "Water Footprint: 16,192 liters/kg",
    "broccoli": "Water Footprint: 34 liters/head",
    "onions": "Water Footprint: 814 liters/kg",
    "grapes": "Water Footprint: 290 liters/kg",
    "wool": "Water Footprint: 170 liters/g",
    "strawberries": "Water Footprint: 120 liters/250g",
    "butter": "Water Footprint: 5,553 liters/kg",
    "yogurt": "Water Footprint: 330 liters/kg",
    "spinach": "Water Footprint: 80 liters/bunch",
    "asparagus": "Water Footprint: 2,400 liters/kg",
    "shrimp": "Water Footprint: 24,000 liters/kg",
    "salmon": "Water Footprint: 3,900 liters/kg",
    "lamb": "Water Footprint: 10,412 liters/kg",
    "cabbage": "Water Footprint: 237 liters/kg",
    "peas": "Water Footprint: 1,000 liters/kg",
    "carrots": "Water Footprint: 131 liters/kg",
    "plums": "Water Footprint: 261 liters/kg",
    "cherries": "Water Footprint: 822 liters/kg",
    "avocado": "Water Footprint: 2,000 liters/kg",
    "cucumber": "Water Footprint: 353 liters/kg",
    "peppers": "Water Footprint: 5,977 liters/kg",
    "mango": "Water Footprint: 1,800 liters/kg",
    "tofu": "Water Footprint: 2,500 liters/kg",
    "honey": "Water Footprint: 4,100 liters/kg",
    "oats": "Water Footprint: 2,393 liters/kg",
    "rye": "Water Footprint: 1,682 liters/kg",
    "barley": "Water Footprint: 1,400 liters/kg",
    "turkey": "Water Footprint: 4,200 liters/kg",
    "pumpkin": "Water Footprint: 420 liters/kg",
    "pineapple": "Water Footprint: 1,400 liters/kg",
    "watermelon": "Water Footprint: 1,000 liters/kg",
    "squash": "Water Footprint: 1,100 liters/kg",
    "peach": "Water Footprint: 910 liters/kg",
    "kiwi": "Water Footprint: 140 liters/kg",
    "coconut": "Water Footprint: 1,500 liters/kg",
    "blueberries": "Water Footprint: 310 liters/kg",
    "raspberries": "Water Footprint: 460 liters/kg",
    "blackberries": "Water Footprint: 430 liters/kg",
    "cranberries": "Water Footprint: 260 liters/kg",
    "figs": "Water Footprint: 1,200 liters/kg",
    "goat meat": "Water Footprint: 4,650 liters/kg",
    "duck": "Water Footprint: 3,900 liters/kg",
    "lobster": "Water Footprint: 5,680 liters/kg",
    "clams": "Water Footprint: 4,900 liters/kg",
    "mussels": "Water Footprint: 1,500 liters/kg",
    "oysters": "Water Footprint: 330 liters/kg",
    "sardines": "Water Footprint: 1,400 liters/kg",
    "cod": "Water Footprint: 1,260 liters/kg",
    "tuna": "Water Footprint: 1,800 liters/kg",
    "soy milk": "Water Footprint: 300 liters/liter",
    "hemp": "Water Footprint: 3,500 liters/kg",
    "flaxseed": "Water Footprint: 2,700 liters/kg",
    "quinoa": "Water Footprint: 2,600 liters/kg",
    "kale": "Water Footprint: 120 liters/kg",
    "beets": "Water Footprint: 250 liters/kg",
    "chard": "Water Footprint: 98 liters/kg",
    "radish": "Water Footprint: 90 liters/kg",
    "brussels sprouts": "Water Footprint: 480 liters/kg",
        // ... Continuing from the previous mockDatabase
"oranges": "Water Footprint: 560 liters/kg",
"pomegranate": "Water Footprint: 1,230 liters/kg",
"lychee": "Water Footprint: 1,400 liters/kg",
"guava": "Water Footprint: 460 liters/kg",
"persimmon": "Water Footprint: 610 liters/kg",

// Electronics
"television": "Water Footprint: 1,500 liters/device",
"desktop computer": "Water Footprint: 20,400 liters/device",
"tablet": "Water Footprint: 13,000 liters/device",
"printer": "Water Footprint: 7,600 liters/device",
"game console": "Water Footprint: 12,200 liters/device",
"smartwatch": "Water Footprint: 5,700 liters/device",
"headphones": "Water Footprint: 1,100 liters/device",

// Household Items
"sofa": "Water Footprint: 6,800 liters/item",
"carpet (1 sq.m.)": "Water Footprint: 60 liters/sq.m.",
"light bulb": "Water Footprint: 40 liters/item",
"toothbrush": "Water Footprint: 1.5 liters/item",
"toothpaste (100g tube)": "Water Footprint: 10 liters/tube",
"shampoo (250ml bottle)": "Water Footprint: 70 liters/bottle",
"soap bar": "Water Footprint: 15 liters/bar",

// Miscellaneous
"book": "Water Footprint: 300 liters/book",
"bicycle": "Water Footprint: 5,000 liters/bicycle",
"plastic bottle (1L)": "Water Footprint: 6 liters/bottle",
"glass bottle (1L)": "Water Footprint: 8 liters/bottle",
"aluminum can (330ml)": "Water Footprint: 35 liters/can",
"ceramic mug": "Water Footprint: 34 liters/mug",
"paper (A4 sheet)": "Water Footprint: 10 liters/sheet",
"plastic bag": "Water Footprint: 6 liters/bag",
"wooden chair": "Water Footprint: 2,500 liters/chair",
"rubber tire": "Water Footprint: 2,200 liters/tire",

// Apparel and Accessories
"silk dress": "Water Footprint: 8,800 liters/dress",
"wool sweater": "Water Footprint: 5,700 liters/sweater",
"leather belt": "Water Footprint: 2,100 liters/belt",
"nylon stockings": "Water Footprint: 1,360 liters/pair",
"cotton socks": "Water Footprint: 400 liters/pair",

// Building Materials
"cement (50kg bag)": "Water Footprint: 50 liters/bag",
"brick": "Water Footprint: 0.8 liters/brick",
"glass (1 sq.m.)": "Water Footprint: 80 liters/sq.m.",
"steel (1kg)": "Water Footprint: 30 liters/kg"
};



searchButton.addEventListener('click', function() {
    const query = searchBar.value.trim().toLowerCase(); // Convert to lowercase and remove any whitespace

    if(mockDatabase[query]) {
        searchResults.innerHTML = mockDatabase[query];
    } else {
        searchResults.innerHTML = "Product not found!";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    const scanButton = document.querySelector("#scanButton");
    
    if (scanButton) {
        scanButton.addEventListener("click", startScanner);
    }

    function startScanner() {
        // Add the 'scanning' class for visual feedback
        const interactiveDiv = document.getElementById('interactive');
        interactiveDiv.classList.add('scanning');
        
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: interactiveDiv
            },
            decoder: {
                readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader"]
            }
        }, function(error) {
            if (error) {
                console.error(error);
                alert("Error initializing scanner");
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected(function(result) {
            // Stop Quagga after detecting the barcode
            Quagga.stop();

            // Remove the 'scanning' class
            interactiveDiv.classList.remove('scanning');

            let code = result.codeResult.code;

            // Display the barcode value
            document.getElementById('results').innerHTML = 'Barcode: ' + code;

            // Fetch product details using the barcode
            fetchProductDetails(code);
        });
    }

    function fetchProductDetails(barcode) {
        // Mocked example for fetching product details.
        // Adjust this function based on your backend/API setup.
        
        // Assuming you have some kind of API to get the product details
        fetch('/api/products/' + barcode)
            .then(response => response.json())
            .then(data => {
                let output = `
                    <h3>${data.productName}</h3>
                    <p>Water Footprint: ${data.waterFootprint}</p>
                `;
                document.getElementById('results').innerHTML += output;
            })
            .catch(err => {
                console.error("Error fetching product details:", err);
            });
    }
});


// Fetch product information and display water footprint
function fetchProductInfo(barcode) {
    // Use the barcode to query your database or external API
    // Display the product name and its water footprint to the user
}

// const API_KEY = "7vwmkv6oufgn22nigvy7gzov8986dh";

// async function fetchProductData() {
//     const barcode = document.getElementById("barcodeInput").value;
//     const apiUrl = `https://api.barcodelookup.com/v3/products?barcode=${barcode}&key=${API_KEY}`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         displayProductData(data);
//     } catch (error) {
//         console.error("There was an error fetching the data:", error);
//     }
// }

// function displayProductData(data) {
//     const productInfo = document.getElementById("productInfo");

//     // Here you'd typically map the product name to your water footprint database
//     const waterFootprint = "Sample Water Footprint"; // Replace with actual lookup

//     productInfo.innerHTML = `
//         <h3>${data.products[0].product_name}</h3>
//         <img src="${data.products[0].images[0]}" alt="${data.products[0].product_name}">
//         <p>Water Footprint: ${waterFootprint}</p>
//     `;
// }
