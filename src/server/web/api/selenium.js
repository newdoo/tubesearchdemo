const db = require('../../mongoDB/schema')
const webdriver = require('selenium-webdriver')

const test = async(msg) => {
  console.log('test');

  const browser = new webdriver.Builder().
  usingServer('http://localhost:9515').  
  withCapabilities(webdriver.Capabilities.chrome()).build();

  console.log('a');

  browser.get('http://www.google.com');

  console.log('b');

  const promise = browser.getTitle();

  console.log('c');

  promise.then(function(title) {
      console.log(title);
  });

  console.log('d');

  browser.quit();
 
  return {result: 'ok'}; 
}

const handler = { test }
module.exports = recv => handler[recv.type](recv.data)