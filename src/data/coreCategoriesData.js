import category1img1 from "../images/category1-img1.webp"
import category1img2 from "../images/category1-img2.png"

import category2img1 from "../images/category2-img1.webp"
import category2img2 from "../images/category2-img2.png"

import category3img1 from "../images/category3-img1.webp"
import category3img2 from "../images/category3-img2.png"

import category4img1 from "../images/category4-img1.webp"
import category4img2 from "../images/category4-img2.png"

import category5img1 from "../images/category5-img1.png"
import category5img2 from "../images/category5-img2.png"

import category6img1 from "../images/category6-img1.webp"
import category6img2 from "../images/category6-img2.png"

import category7img1 from "../images/category7-img1.webp"
import category7img2 from "../images/category7-img2.png"

import category8img1 from "../images/category8-img1.webp"
import category8img2 from "../images/category8-img2.png"









const coreCategories = [ 
    {
    "id": 1,
    "categoryTitle": "Tournament Chess Boards ",
    "categoryImage": category1img1,
    "dataTarget": "#toysgames",
    "altText" : "Toys & Games",
    "viewMoreLink": "https://indusmela.in/collections/tournament-chess"
    },
    {
    "id": 2,
    "categoryTitle": "Wooden Chess Boards",
    "categoryImage": category2img1,
    "dataTarget": "#homedecor",
    "altText" : "Home Decor",
    "viewMoreLink": "https://indusmela.in/collections/wooden-chess"
    },
    {
    "id": 3,
    "categoryTitle": "Marble Chess Boards",
    "categoryImage": category3img1,
    "dataTarget": "#homeorganiser",
    "altText" : "Home Organiser",
    "viewMoreLink": "https://indusmela.in/collections/marble-chess"
    
    },
    {
    "id": 4,
    "categoryTitle": "Chess Pieces",
    "categoryImage": category4img1,
    "dataTarget": "#artscraft",
    "altText" : "Arts & Craft",
    "viewMoreLink": "https://indusmela.in/collections/chess-pieces"
    },
    {
    "id": 5,
    "categoryTitle": "Premium Chess Sets",
    "categoryImage": category5img1,
    "dataTarget": "#kitchenbathroom",
    "altText" : "Kitchen & Bathroom",
    "viewMoreLink": "https://indusmela.in/collections/premium-chess"
    },
    {
    "id": 6,
    "categoryTitle": "Puzzles and 3D DIY Kits",
    "categoryImage": category6img1,
    "dataTarget": "#religiousitems",
    "altText" : "Religious Item",
    "viewMoreLink": "https://indusmela.in/collections/puzzles-construction-toys"
    },
    {
    "id": 7,
    "categoryTitle": "Sports Accessories",
    "categoryImage": category7img1,
    "dataTarget": "#sportsequipment",
    "altText" : "Sports and Equipments",
    "viewMoreLink": "https://indusmela.in/collections/sports"
    },
    {
    "id": 8,
    "categoryTitle": `Pet Accessories`,
    "categoryImage": category8img1,
    "dataTarget": "#statuessculptures",
    "altText" : "Statues & Sculptures",
    "viewMoreLink": "https://indusmela.in/collections/pet-toys"
    }
]




const categoryRelatedData = [
    {   
        "id": 1,
        "modalId": "toysgames",
        "name": "Tournament Chessboards",
        "description": "Engineered for precision and performance, our Tournament Chessboards meet official standards, offering durability and clarity. Ideal for serious players and competitions, they bring professional quality to every move.",
 
        "image1": category1img1,
        "image1_altText": "Chess Table",
 
        "image2": category1img2,
        "image2_altText": "Board Games",
        
        "image3": category1img1,
        "image3_altText": "Card Games",
 
        "link1": "",
        "link1_title": "",
        "link1_Image": "",
 
        "link2":"",
        "link2_title":"",
        "link2_Image": "",
 
        "link3": "",
        "link3_title":"",
        "link3_Image": "",

        "viewMoreLink": "https://indusmela.in/collections/tournament-chess"
    },
    {   
        "id": 2,
        "modalId": "homedecor",
        "name": "Wooden Chessboard",
        "description": "Crafted from fine woods, our chessboards blend beauty with utility. Perfect for casual and classic gameplay, they’re a timeless addition to any collection or living space.",
 
        "image1": category2img1,
        "image1_altText": "Show Piece",
 
        "image2": category2img2,
        "image2_altText": "Idols",
        
 
        "link1": "https://indusmela.in/collections/stonkraft?filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Standing+Diya&sort_by=best-selling",
        "link1_title": "show piece",
        "link1_Image":"",
 
        "link2":"https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=",
        "link2_title":"idols",
        "link2_Image":"idols",
 
        "viewMoreLink": "https://indusmela.in/collections/wooden-chess"
    },
    {   
        "id": 3,
        "modalId": "homeorganiser",
        "name": "Marble Chessboard",
        "description": "Elevate your game with the elegance of handcrafted marble. Each board is a unique masterpiece, combining luxury with strategy for a striking chess experience.",
 
        "image1": category3img1,
        "image1_altText": "show piece",
 
        "image2": category3img2,
        "image2_altText": "idols",
        

        "viewMoreLink": "https://indusmela.in/collections/marble-chess"
    },
    {   
        "id": 4,
        "modalId": "artscraft",
        "name": "Chess Pieces",
        "description": "Explore finely detailed chess pieces that balance tradition and craftsmanship. From casual games to cherished collections, each set is made to inspire smart play and admiration.",
 
        "image1": category4img1,
        "image1_altText": "show piece",
 
        "image2": category4img2,
        "image2_altText": "idols",
        
 

        "viewMoreLink": "https://indusmela.in/collections/chess-pieces"
    },
    {   
        "id": 5,
        "modalId": "kitchenbathroom",
        "name": "Premium Chess Pieces",
        "description": "Our premium sets are the epitome of sophistication. Intricately carved and perfectly weighted, they bring luxury and distinction to every match, whether you're playing or displaying.",
 
        "image1": category5img1,
        "image1_altText": "Kitchen bathroom",
 
        "image2": category5img2,
        "image2_altText": "idols",


        "viewMoreLink": "https://indusmela.in/collections/premium-chess"
    },
    {   
        "id": 6,
        "modalId": "religiousitems",
        "name": "Puzzles and 3D DIY Kits",
        "description": "Fuel your child’s imagination with our 3D puzzles and DIY kits. Hands-on, educational, and fun—these engaging builds spark creativity and problem-solving with every piece.",
 
        "image1": category6img1,
        "image1_altText": "Chess Table",
 
        "image2": category6img2,
        "image2_altText": "Board Games",
        
 
        "link1": "https://indusmela.in/search?q=cross&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&sort_by=relevance",
        "link1_title": "Cross",
        "link1_Image": "",
 
        "link2":"https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=",
        "link2_title":"Hindu Idols",
        "link2_Image": "",
 
        "link3": "https://indusmela.in/search?q=diya&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Hanging+Diya&filter.p.product_type=Standing+Diya&sort_by=relevance",
        "link3_title":"Diyas",
        "link3_Image": "",

        "viewMoreLink": "https://indusmela.in/collections/puzzles-construction-toys"
    },
    {   
        "id": 7,
        "modalId": "sportsequipment",
        "name": "Sports Accessories",
        "description": "Gear up with Stonekraft’s durable and stylish sports accessories. Designed for comfort, performance, and everyday action—because every athlete deserves the right tools to play their best.",
 
        "image1": category7img1,
        "image1_altText": "Chess Table",
 
        "image2": category7img2,
        "image2_altText": "Board Games",

        "viewMoreLink": "https://indusmela.in/collections/sports"
    },
    {   
        "id": 8,
        "modalId": "statuessculptures",
        "name": "Pet Accessories",
        "description": "Pamper your pets with thoughtfully designed accessories. From playtime to downtime, our collection ensures comfort, joy, and a wag-worthy lifestyle for your furry companions.",
 
        "image1": category8img1,
        "image1_altText": "Chess Table",
 
        "image2": category8img2,
        "image2_altText": "Board Games",

        "viewMoreLink": "https://indusmela.in/collections/pet-toys"
    }
]






export { coreCategories, categoryRelatedData }