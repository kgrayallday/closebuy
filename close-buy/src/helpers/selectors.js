

// Testing driver object mimics API response 
const product = [
  {
    domain_id: 1098,
    domain: 'craigslist',
    category: 'green',
    url: 'http://theurl.com',
    images: [
        "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
        "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: '(Port Moody tricities/pitt/maple )',
    price: 700,
    description: 'this is the desc',
    title: 'Free Recliner Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 1234,
    domain: 'craigslist',
    category: 'green',
    url: 'http://theurl.com',
    images: [
        "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
        "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: '(Port Moody tricities/pitt/maple )',
    price: 500,
    description: 'this is the desc',
    title: 'Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 5678,
    domain: 'kujiji',
    category: 'green',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 800,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 111213,
    domain: 'kujiji',
    category: 'green',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 1000,
    description: 'this is the desc',
    title: 'Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 112233,
    domain: 'etsy',
    category: 'blue',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 900,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 8765,
    domain: 'etsy',
    category: 'blue',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 1000,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 112233,
    domain: 'ebay',
    category: 'blue',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 90,
    description: 'this is the desc',
    title: 'Broken Couch',
    post_date: '10/22/2021'
  }, 
  {
    domain_id: 11000,
    domain: 'google',
    category: 'yellow',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 100,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  }
];

// Additional Testing code

const favoritesData = [
  {
    "id": 7402313471,
    "title": "Keyboard-Cat-Bucket-Swiffer Sweeper-NEW!Wood Floating shelf hack",
    "description": "QR Code Link to This Post\n            \n        \nFor Selling \n\n\nSwiffer Sweeper  $ \n\nBlack Cat -soft flexible plastic $ best offer \n\n\nCertified Data Ultra-Slim Multimedia Keyboard - $ 25\n\n1 file holder (document file)   $ 5\n1 black bucket  \n\noval black bucket (pictures show 2 side of bucket) $\nw19\"\nD11\"\nH 7.25\"\n\nsale 1 shelf   \n\n1 x wood shelf -   $35\n \n \nWidth  31 3/4\" ( 81cm.)\nD   5 3/4\" (15 cm.) \n \n2  last pictures used for sample idea only \n\n easy-care, durable natural material.\nDifferent wal...",
    "url": "https://vancouver.craigslist.org/bnc/fuo/d/keyboard-cat-bucket-swiffer-sweeper/7402313471.html",
    "images": "[\"https://images.craigslist.org/00K0K_3fTbXJ1VvYa_6…]",
    "price": 35,
    "category": "green",
    "domain": "craigslist"
  },
  {
    "id": 7389566289,
    "title": "Swivel Barrel Chairs",
    "description": "QR Code Link to This Post\n            \n        \nswivel barrel chair. A traditional club frame . This chair also features a 360-degree swivel base . These are good solid chairs they just need to re finished . Needs to re-upholstered ( cat like it ) see pictures . The first photo is what the chair could look like . $200 obo. Thanks",
    "url": "https://vancouver.craigslist.org/rds/fuo/d/surrey-east-swivel-barrel-chairs/7389566289.html",
    "images": [
      "https://images.craigslist.org/00L0L_6m5vqZuZ2ARz_07b07b_600x450.jpg",
      "https://images.craigslist.org/00f0f_3vFF7Ps2xzbz_0t20CI_600x450.jpg",
      "https://images.craigslist.org/00A0A_3wrsIWh2NvNz_0t20CI_600x450.jpg",
      "https://images.craigslist.org/00707_3QBxJqRD2Ikz_0t20CI_600x450.jpg",
      "https://images.craigslist.org/01717_jKhX9ZCfAAaz_0t20CI_600x450.jpg"
    ],
    "price": 200,
    "category": "green",
    "domain": "craigslist"
  },
  {
    "id": 7401840901,
    "title": "Free Dining Table and Chairs",
    "description": "QR Code Link to This Post\n            \n        \nOlder style wood dining table that could be refinished, comes with extra leaf\n34\"W x 48\"L (leaf adds an extra 12\" in length)\n\n2 wood dining chairs with fabric seats\nOne chair has a crack which I repaired, see photo. (Come from a home with a cat)\n\nMust be picked up, no delivery.",
    "url": "https://vancouver.craigslist.org/nvn/fuo/d/north-vancouver-free-dining-table-and/7401840901.html",
    "images": [
      "https://images.craigslist.org/00Q0Q_iYuJd6Pl2NRz_0CI0t2_600x450.jpg",
      "https://images.craigslist.org/01616_pHZ9qm1oOWz_0t20CI_600x450.jpg",
      "https://images.craigslist.org/00B0B_iA2Qjq85rpyz_0t20CI_600x450.jpg"
    ],
    "price": 0,
    "category": "green",
    "domain": "craigslist"
  },
  {
    "id": 7401848164,
    "title": "one cat shelf with two cat steps",
    "description": "QR Code Link to This Post\n            \n        \nCute little shelves for your buddy to jump and rest on - mount them on your wall",
    "url": "https://vancouver.craigslist.org/nvn/fuo/d/vancouver-one-cat-shelf-with-two-cat/7401848164.html",
    "images": "[\"https://picsum.photos/400/600\"]",
    "price": 60,
    "category": "green",
    "domain": "craigslist"
  }
];

// .....................
// Helper functions start here 
// .....................

// Function will filter API response data and return an array of objects that include the filter category.
export function filterData(data, category) {
  const results = []; 
  const newData = [...data];

   newData.forEach((element) => {
     if (element.category === category) {
       results.push(element)
     }
   })
   return results;
};

// Function takes in an array of listing objects & an id. Returns true if "id" is found within array.
export function findFavorite(listingData, id) {
  const favoriteData = [...listingData];

  for (const element of favoriteData) {
    if (element.id === id) {
      return true;
    }
  }
  return false;
};