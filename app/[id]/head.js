export default async function Head({ params }) {

    const answer = await fetch(`http://localhost:3000/api/hello?question=${params.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: params.id })
    })
    const data = await answer.json()
    const res = data.completion

    console.log("head" + res)


    return (
        <>
            <title>{res}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={res} />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
