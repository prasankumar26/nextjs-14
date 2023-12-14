export default function ProductDetails({params}:{params: {productId:string, reviewId:string}}) {

return <h1 className="text-black">
    ProductDetails {params.productId} from {params.reviewId} Review
    </h1>
}