const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {crossOffMovie} = require('../functions/crossOffMovie');
const {deleteMovie} = require('../functions/deleteMovie');
const {addMovie} = require('../functions/addMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html');
});

afterAll(async () => {
    await driver.sleep(1000);
    await driver.quit();
});




it('should cross off any movie from the list', async () => {
    await crossOffMovie(driver);
  });


it('should delete any movie from the list', async () => {
    await deleteMovie(driver);
  });


it('should add any movie to the list', async () => {
    await addMovie(driver);
  });