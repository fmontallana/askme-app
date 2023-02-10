export default async function Head({ params }) {

    //check if in production
    const isProd = process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    const baseURL = isProd ? 'https://askme-app-mu.vercel.app' : 'http://localhost:3000'

    console.log(process.env.NEXT_PUBLIC_NODE_ENV)
    console.log(baseURL)
    const answer = await fetch(`${baseURL}/api/hello?question=${params.id}`, {
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
