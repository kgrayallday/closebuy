

// Testing driver object mimics API response 
product = [
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

// .....................
// Helper functions start here 
// .....................

// Function will filter API response data and return a new array of objects that include the filter category.
const filterData = function(data, category) {
  const results = []; 
  const newData = [...data];

   newData.forEach((element) => {
     if (element.category === category) {
       results.push(element)
     }
   })
   return results;
};

console.log(filterData(product, "yellow"));