const cheerio = require('cheerio');
const axios = require('axios');

async function scrape() {
  // Make a request to the webpage
  const response = await axios.get(
    'https://gist.githubusercontent.com/pjfancher/f073cfabf5a1208a4206ef9333250c2a/raw/8bfa6b39d0d16cb8dddfbdefa63175c643197836/2002.html'
  );

  // Load the HTML of the page into Cheerio
  const $ = cheerio.load(response.data);

  // Find all the tr elements on the page
  const trElements = $('tr');

  // Create an empty array to store the objects
  const objects = [];

  // Iterate through each tr element
  trElements.each((i, tr) => {
    // Create an empty object for this tr element
    const object = {};

    // Find all the td elements within this tr element
    const tdElements = $(tr).find('td');

    // Iterate through each td element
    tdElements.each((j, td) => {
      // Get the text content of the td element
      const tdText = $(td).text();
      // Add the text content as a value to the object, with the index as the key
      object[j] = tdText;
    });

    // Add the object to the array
    objects.push(object);
  });

  // Return the array of objects
  return objects;
}

scrape().then(objects => {
  console.log(objects);
});
