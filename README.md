# Routing with pages

Files automatically act as a route

# Nested Routes 

For creating nested route add files inside tthe folder

# Dynamic Routes

`import {useRouter} from 'next/router';

function ProductDetails(){
    const router=useRouter();

    const productId=router.query.productId;
    return <h1>Product Details {productId}</h1>
    
}

export default ProductDetails;`

# Nested Dynamic Routes

http://localhost:3000/Product/2/review/5

Product folder =>[productId] folder=> index.js 
                      ||
          review folder => [reviewId].js



       