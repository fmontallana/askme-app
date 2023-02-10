export default async function Head({ params }) {

    const answer = await fetch(`http://localhost:3000/api/hello?question=${params.id}`, {
        cache: 'no-cache',
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
            <meta name="description" content={res || "ask me anything"} />
            <meta property="og:title" content={res || "ask me anything"} />
            <meta property="og:description" content={res || "add your question at the end of the URL. Ex. /what is the value of PI?"} />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
