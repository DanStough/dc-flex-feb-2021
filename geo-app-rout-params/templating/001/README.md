### Client

Google Chrome

### Dimensions

1100px x 920px

### Objective

![objective](target/image.gif)

### Requirements

- Using NPM's [express](https://www.npmjs.com/package/express) package, build a server that can respond to GET requests
- Using NPM's [express-es6-template-engine](https://www.npmjs.com/package/express-es6-template-engine) package, render data on countries
- Use NPM's [country-json](https://www.npmjs.com/package/country-json) package to import country data
- Implement middleware to log information related to requests using NPM's [morgan](https://www.npmjs.com/package/morgan) package
- Implement middleware to serve up assets from **public/**, namely a stylesheet, using `express.static` (which comes with express)

### Acceptance Criteria

1. As a user, I want to see a list of countries with their respective capitals and populations at the endpoint `/countries`.
2. As a user, I want to search for countries with a string of characters that returns only those countries that have the string in their name. For example, `/countries?name=aus` should return _Australia_, _Austria_. The search must be case insensitive.
3. As a user, I want to search for countries by the names of their respective capitals with a string of characters that returns only those countries whose capitals have the string in their name. For example, `/countries?capital=hel` should return _Finland_.
4. As a user, I want to search for countries whose populations are greater than some number and also less than some number. For example, `/countries?popmin=37&popmax=38` should return the data on all countries whose population falls between 37 million and 38 million– Afghanistan, Canada, and Poland.
