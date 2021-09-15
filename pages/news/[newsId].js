import {useRouter} from 'next/router';

function News(){
    const router=useRouter();
    console.log(router.query.newsId)
    return <h1>News</h1>
   }
   
   export default News;

