import { notFound } from "next/navigation"

export default function ProductDetails({params}:{params: {productId:string, reviewId:string}}) {

    if(parseInt(params.reviewId) > 1000){
        notFound()
    }

return (
    <h1 className="text-black">
    ProductDetails {params.productId} from {params.reviewId} Review
    </h1>
)
}