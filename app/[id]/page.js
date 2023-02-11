import React from 'react'

export default async function Home({ params }) {

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
        <div>
            {res}
        </div>
    )
}
