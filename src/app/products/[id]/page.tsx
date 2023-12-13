export default function Products({params}: {
    params: {id: string}
}) {
    return <h1 className="text-black">Product {params.id}</h1>
}