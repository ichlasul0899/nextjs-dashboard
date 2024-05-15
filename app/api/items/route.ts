export async function GET() {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    // const data = await res.json()

    const data = {
        "author": "Ichlasul Amal"
    }
   
    return Response.json({ data })
  }

//   http://localhost:3000/api/items