require("dotenv/config");
const cafes = [
  {
    images: [
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/67/cc/63/counter.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/dc/d2/07/miam-cafe-boutique.jpg",
      "https://trendeat.co/wp-content/uploads/2019/11/miam-cafe.jpg",
      "https://static.wixstatic.com/media/bb1d9b_7719cd4f3f5c4391ac9e437cf360e550~mv2.jpg/v1/crop/x_0,y_1483,w_4801,h_4410/fill/w_560,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bb1d9b_7719cd4f3f5c4391ac9e437cf360e550~mv2.jpg",
      "https://cdn.vox-cdn.com/thumbor/EwXLDxEm4rnCNiTvhbMQPnz0xVU=/457x0:4986x3397/1400x788/filters:focal(457x0:4986x3397):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/45248290/Miam_MG_0437.0.jpg",
    ],
    name: "MIAM Cafe",
    city: "Miami",
    rating: 4.3,
    cost: "$$",
    about:
      "Industrial-style European bistro for daytime fare made with natural ingredients, plus wine & beer.",
    serviceOptions: ["Dine-in", "Curbside pickup", "No-contact delivery"],
    address: "2750 NW 3rd Ave Suite 21, Miami, FL 33127",
    placeId: "ChIJMZYy4rK22YgRM_O-D2pKGDw",
  },
  {
    images: [
      "https://www.greatkosherrestaurants.com/kosher_images/uploads/slideshow/1784236095_Grand_Cafe.jpg",
      "https://www.greatkosherrestaurants.com/kosher_images/uploads/533_pop.jpg",
      "https://www.greatkosherrestaurants.com/kosher_images/uploads/slideshow/2116937251_Grand_Espressp.jpg",
      "https://images.otstatic.com/prod1/42051892/3/huge.jpg",
      "https://www.greatkosherrestaurants.com/kosher_images/uploads/533_pop.jpg",
    ],
    name: "Grand Cafe Miami",
    city: "Miami",
    rating: 4.9,
    cost: "$$",
    about:
      "Vegetarian Cafe. Serving breakfast lunch and dinner. Specialized in coffee and cold drinks.",
    serviceOptions: ["Dine-in", "Takeout", "No-contact delivery"],
    address: "540 Collins Ave, Miami Beach, FL 33139",
    placeId: "ChIJv_AtbnO12YgRybLTQ7VDSMI",
  },
  {
    images: [
      "https://media.timeout.com/images/105873134/image.jpg",
      "https://images.squarespace-cdn.com/content/v1/5233e34fe4b041a1186be3ca/1621972359879-Q7GH7NXE0Y6COBSXUWKZ/SHIM_PROJECTS_Bebitos_079-HDR-Pano-Edit_4K-2.jpg",
      "https://hopefuloutsiders.com/wp-content/uploads/sites/16956/2021/12/BebitosCafe_Miami-3-748x1024.jpg",
      "https://southfloridatravels.com/wp-content/uploads/2022/03/bebitos.jpg",
      "http://static1.squarespace.com/static/5233e34fe4b041a1186be3ca/t/60ad7514181e9f0ac929822f/1621980446002/SHIM_PROJECTS_Bebitos_127-HDR-Edit_4K.jpg",
    ],
    name: "Bebito's",
    city: "Miami",
    rating: 4.6,
    cost: "$$",
    about:
      "Bebito’s is a neighborhood staple and Miami Beach dining destination. Our chefs bring the same level of artistry and innovation to bistro classics and divine pastries that they have honed over the years to this new neighborhood cafe. Bebito’s Private Label signature blend is roasted locally in Miami featuring a powerful mix of central and south american beans. The brew will be offered in all traditional forms including a signature cafecito, traditional café con leche and many more variations. Non-dairy customizations like almond and coconut milks are offered as well.",
    serviceOptions: ["Dine-in", "Takeout", "Delivery"],
    address: "1504 Bay Rd #106, Miami Beach, FL 33139",
    placeId: "ChIJ6cjlxj-12YgR-08lh2Xj7ss",
  },
  {
    images: [
      "http://res.cloudinary.com/the-infatuation/image/upload/v1656120753/cms/Vice_20CIty-2.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-p/0e/9b/62/bb/vice-city-bean.jpg",
      "https://images.squarespace-cdn.com/content/v1/5923a0d0ff7c50d17e22589f/1568670273640-08KY7PF0HD6MVU56NOSI/ke17ZwdGBToddI8pDm48kGIUEq3oaRq9dkB4gSudpNN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URplosLUCOAleJwc1Y_QHNegG23HSEqgCsKxAefHU-kN6rk8g15fLUVVwsR7SW1WBA/IMG_3011.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/0WYZsffATJF2She79ekh4Q/l.jpg",
      "https://media2.miaminewtimes.com/mia/imager/u/zoom/9415792/vice-city-bean-latte-pour.jpg",
    ],
    name: "Vice City Bean",
    city: "Miami",
    rating: 4.7,
    cost: "$$",
    about:
      "Bright & modern neighborhood coffee shop offering a variety of espresso drinks, plus tea & snacks.",
    serviceOptions: ["Dine-in", "Takeout"],
    address: "1657 N Miami Ave unit c, Miami, FL 33136",
    placeId: "ChIJPafykqW22YgRgVtxDd-DJUs",
  },
  {
    images: [
      "https://cdn.vox-cdn.com/thumbor/PLPtgjTVojXjdDWMJXb1i7VDqWw=/28x0:472x333/1400x1050/filters:focal(28x0:472x333):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/38804286/panther.0.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/79/e0/dc/photo5jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/09/9c/3c/a6/photo0jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/16/c6/37/79/photo1jpg.jpg",
      "https://media.timeout.com/images/101552083/image.jpg",
    ],
    name: "Panther Coffee",
    city: "Miami",
    rating: 4.5,
    cost: "$$",
    about:
      "Hip local cafe with barista drinks, plus coffee beans roasted in small batches & sold by the pound.",
    serviceOptions: ["Dine-in", "Takeout", "Delivery"],
    address: "2390 NW 2nd Ave, Miami, FL 33127",
    placeId: "ChIJG6HQcrK22YgREOwX4PyCF8c",
  },
  {
    images: [
      "https://static.wixstatic.com/media/75f5f1_4d9eafad5452470d895e52c53fcd6de0~mv2.png/v1/fill/w_560,h_390,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202020-05-25%20at%208_33_01%20PM.png",
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/ba/e8/02/photo5jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/a8/bf/7b/all-day-coffee-and-eggs.jpg",
      "https://i.pinimg.com/736x/db/d2/ab/dbd2abf5c621c27627f86044cbacf45e--the-coffee-camila.jpg",
      "https://images.squarespace-cdn.com/content/v1/53236388e4b07b2197464417/1521468446683-6924649TPB4OLXDMPKTJ/all+day+miami",
    ],
    name: "All Day",
    city: "Miami",
    rating: 4.5,
    cost: "$$",
    about:
      "Serious roasts pair with gourmet eats & cocktails in a minimalist space.",
    serviceOptions: ["Dine-in", "Takeout", "Delivery"],
    address: "1035 N Miami Ave, Miami, FL 33136",
    placeId: "ChIJ23awxKO22YgRT3o5P_CHuNM",
  },
  {
    images: [
      "https://assets3.thrillist.com/v1/image/1733390/1200x630",
      "https://media-cdn.tripadvisor.com/media/photo-p/13/04/e1/3f/menu.jpg",
      "https://live.staticflickr.com/7881/45776853874_35d410aef3_b.jpg",
      "https://live.staticflickr.com/7807/45587218395_1d2d8d2f50_b.jpg",
      "https://live.staticflickr.com/4883/45776852254_9b16a0555d_b.jpg",
    ],
    name: "Eternity Coffee Roasters",
    city: "Miami",
    rating: 4.4,
    cost: "$",
    about:
      "Modern storefront where coffee beans are imported, roasted on-site & served pour-over-style.",
    serviceOptions: ["Dine-in", "Takeout", "Delivery"],
    address: "117 SE 2nd Ave, Miami, FL 33131",
    placeId: "ChIJOyqXyp222YgRppenkMuofTU",
  },
  {
    images: [
      "https://images.squarespace-cdn.com/content/v1/5fc6985aec917750a3ff0c92/1634672810174-RLWEY67KBL5TSITYGABO/Pura+Vida+Aventura%283%29_high+res.jpg",
      "https://images.squarespace-cdn.com/content/v1/5fc6985aec917750a3ff0c92/ed9c5d66-24cd-49cf-9d8e-3fa355a17c5e/Pura+Vida+Miracle+Mile-04.jpg",
      "https://images.squarespace-cdn.com/content/v1/5fc6985aec917750a3ff0c92/76637ce2-055d-4ba9-af21-4f34e7c38f4e/JEANCARLO_IHF_May26_PV2022+%2810+of+26%29.jpg",
      "https://images.squarespace-cdn.com/content/v1/5fc6985aec917750a3ff0c92/1611876239827-WGXEHMBY6KWOJAD52H9N/LLpS1a3A.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/f7/85/f1/salmon-avocado-mango.jpg",
    ],
    name: "Pura Vida",
    city: "Miami",
    rating: 4.3,
    cost: "$$",
    about:
      "Modern storefront where coffee beans are imported, roasted on-site & served pour-over-style.",
    serviceOptions: ["Dine-in", "Takeout", "No-contact Delivery"],
    address: "3818 NE 1st Ave, Miami, FL 33137",
    placeId: "ChIJURCWEyKx2YgRbiYB5Ng_TuQ",
  },
  {
    images: [
      "https://live.staticflickr.com/1005/3171440085_479f343932_b.jpg",
      "https://brooksysociety.com/wp-content/uploads/2022/09/cafe-demetrio-g-scaled.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/11/46/29/34/cafe-leo.jpg",
      "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/2943d7fb-3f05-43f4-94b2-d8ccc78b514f.jpg",
      "https://pbs.twimg.com/profile_images/488064263488274432/pVqUu4AO_400x400.jpeg",
    ],
    name: "Café Demetrio",
    city: "Miami",
    rating: 4.3,
    cost: "$$",
    about:
      "Artisanal coffee & light meals served in warm quarters with old-world flair & a leafy courtyard.",
    serviceOptions: ["Dine-in", "Takeout", "Delivery"],
    address: "300 Alhambra Cir, Coral Gables, FL 33134",
    placeId: "ChIJjTF5O5q32YgRgllJFb76hdI",
  },
  {
    images: [
      "https://cdn11.bigcommerce.com/s-c8vytv86xy/product_images/uploaded_images/lower-east-side-cafe-grumpy.jpg",
      "http://dailycoffeenews.com/wp-content/uploads/2018/03/Cafe-Grumpy-Coral-Gables-exterior-horizontal.jpg",
      "https://www.baristamagazine.com/wp-content/uploads/2017/02/grumpymiami-678x381.jpg",
      "https://www.drinkpreneur.com/wp-content/uploads/2018/03/www.drinkpreneur.com-cafe-grumpy-opens-its-first-location-in-miami-cafegrumpy-header.jpg",
      "https://fastly.4sqi.net/img/general/600x600/7245651_gSwYwq4wsNUNQSTwyPGd0Pw5cYz4YoCpEmg4vXqWXQY.jpg",
    ],
    name: "Cafe Grumpy",
    city: "Miami",
    rating: 4.6,
    cost: "$$",
    about:
      "Hip local coffeehouse chain serving house-roasted specialty brews in a relaxed setting.",
    serviceOptions: ["Dine-in", "Takeout", "No-contact Delivery"],
    address: "2516 Ponce de Leon, Coral Gables, FL 33134",
    placeId: "ChIJ31lrP5e32YgRCaQJ1mQKtd4",
  },
  {
    images: [
      "https://downtowndoral.com/wp-content/uploads/2021/03/psvEBbrk.jpeg",
      "https://i.pinimg.com/736x/2c/27/92/2c27929be162acc9e9f0da656e0d16e6.jpg",
      "https://downtowndoral.com/wp-content/uploads/2021/09/BACH7250-2.jpeg",
      "https://d1ralsognjng37.cloudfront.net/f5622a14-40e7-4ec0-a746-37c1fa5dcd35.jpeg",
      "https://www.miamiculinarytours.com/wp-content/uploads/2021/09/Copy-of-5G0A2845-scaled.jpg",
    ],
    name: "Crema",
    city: "Miami",
    rating: 4.1,
    cost: "$$",
    about:
      "Coffee, smoothies, juices & light bites are served in a spacious wood-and-brick–trimmed setting.",
    serviceOptions: ["Dine-in", "Takeout", "Delivery"],
    address: "1010 Brickell Ave Suite C 100, Miami, FL 33131",
    placeId: "ChIJ647w8KG32YgR7hPZiYkZle4",
  },
  {
    images: [
      "https://media-cdn.tripadvisor.com/media/photo-s/07/c6/88/da/getlstd-property-photo.jpg",
      "https://dailycoffeenews.com/wp-content/uploads/2021/08/Macondo-Coffee-Kendall-Miami-3.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/a2/52/55/photo1jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/11/b6/37/bc/fabio-s-favorite.jpg",
      "https://image.zmenu.com/menupic/6184013/fa92fe64-95df-4a8e-b2b5-7db32362d23c.jpg",
    ],
    name: "Macondo Coffee Roasters",
    city: "Miami",
    rating: 4.6,
    cost: "$",
    about:
      "Easygoing cafe offering house-roasted Colombian coffee, plus pastries & breakfast/lunch dishes.",
    serviceOptions: ["Dine-in", "Curbside pickup", "Delivery"],
    address: "2494 NW 89th Pl, Doral, FL 33172",
    placeId: "ChIJ22kr8Wm52YgRUfotnCRGmXU",
  },
];

// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

//CONNECT TO THE DB
// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

const Cafe = require("./models/Cafe.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/brewlist";

mongoose
  .connect(process.env.MONGODB_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

Cafe.create(cafes)
  .then((cafes) => {
    //CLOSE THE DATABASE CONNECTION
    mongoose.connection.close();
    console.log("DATABASE SEEDING COMPLETE -- DB CONNECTION CLOSED!");
  })
  .catch((err) => console.log(err));
//seed the db with the movie model
//Movie.save(movies)

//Close connection to db
