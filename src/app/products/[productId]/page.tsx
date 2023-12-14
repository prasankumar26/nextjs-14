export default function ProductDetails({params}:{
    params: {productId:string}
}) {    
    return <h1 className="text-black">
    ProductDetails {params.productId}
    </h1>
}