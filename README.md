# Routing with pages

Files automatically act as a route

# Nested Routes 

For creating nested route add files inside tthe folder

# Dynamic Routes

`import {useRouter} from 'next/router';
function ProductDetails(){
const router=useRouter();
const productId=router.query.productId;
return <h1>Product Details {productId}</h1>}
export default ProductDetails;`

# Nested Dynamic Routes
id is string
http://localhost:3000/Product/2/review/5

Product folder =>[productId] folder=> index.js 
                      ||
          review folder => [reviewId].js

# catch all routes

Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:

pages/docs/[...params].js matches /docs/a, but also /docs/a/b, /docs/a/b/c and so on.

Matched parameters will be sent as a query parameter to the page, and it will always be an array, so, the path /docs/a will have the following query object:

`{ "params": ["a"] }`
And in the case of /docs/a/b, and any other matching path, new parameters will be added to the array, like so:

`{ "params": ["a", "b"] }`


# Optional catch all routes

Catch all routes can be made optional by including the parameter in double brackets ([[...params]]).


The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (/docs in the example above).