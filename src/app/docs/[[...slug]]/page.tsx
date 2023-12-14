export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log(params, "params");
    if (params?.slug?.length === 2) {
        return <h1 className="text-black">
            Viewing Docs for feature <b>{params?.slug[0]}</b> and concept <b>{params?.slug[1]}</b>
        </h1>
    } else if (params?.slug?.length === 1) {
        return <h1 className="text-black">
            Viewing Docs for feature <b>{params?.slug[0]}</b>
        </h1>
    }
    return <h1>Docs Home Page</h1>
}