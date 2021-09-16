import {useRouter} from 'next/router';

function ProductDetails(){
    const router=useRouter();

    const {reviewId,productId} = router.query;
    return <h1> Review {reviewId} of {productId}</h1>
    
}

export default ProductDetails;