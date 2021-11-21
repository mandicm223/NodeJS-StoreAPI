# NodeJS-StoreAPI
NodeJS Store API. Project based on filtering and sorting data.
As the name says, this is store API. We can imagine that we have a store with a bunch of items to sell. Now we want to make it easy for our employees to search and filter products. 
That's the point of this project. We will have a NodeJS API endpoint where we can access all our products, filter, and sort them, very easily and efficiently.
Options you can use for querying data:

```bash
featured  == true/false

company == string

name == string

sort == name (products sorted A-Z), -name (products sorted Z-A) . ( sort work for rating and price also).

sort == name, price ( Sorting products by name, but if the 2 products have the same name, they will be sorted by price).

fields == price, rating ( By setting fields to price and rating, products that will be returned will only contain price and rating attributes )

numericFilters == price>=90, rating>4.5 ( Numeric filters are only available on the price and rating attributes. Products that will be returned will have a price equal to or above 90 and rating greater than 4.5).
```

If you want to try this code on your local setup, you can simply clone this repository. You will need to create a .env file in the projects root directory and add the MONGO_URI variable into it that will be equal to the connection string for your MongoDB.
After that, in the projects root directory run the command:

```bash
npm install
```

After that you can spin up the server by running:

```bash
npm start
```

Now you should be good to go.
