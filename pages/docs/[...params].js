import {useRouter} from 'next/router';
function Docs(){
    const router=useRouter();

    const {params=[]}=router.query;
console.log(params)
if(params.length==2){
return(
    <h1>{params[0]} and {params[1]}</h1>
)}

if(params.length==1){
    return(
        <h1> {params[0]}</h1>
    )
}
    return <h1>docs page</h1>
}

export default Docs;