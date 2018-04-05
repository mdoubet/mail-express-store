const hapi_url = 'http://Matthews-MacBook-Air.local:60647'
const products_route = 'v1/Products'

const fetchProducts = async () => {
    const result = "Found no Products"
    await fetch (hapi_url, products_route, {
        method: "Get",
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => result = response.json()

    )
    return result


}
