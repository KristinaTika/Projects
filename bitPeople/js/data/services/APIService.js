export const get = (url) => {

    return fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
}