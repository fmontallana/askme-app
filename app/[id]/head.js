export default async function Head({ params }) {

    const res = fetch(`http://localhost:3000/api/hello?question=${params.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: params.id })
    })


    return (
        <>
            <title>{params.id.split("%20").join(" ")}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={res} />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
