const url = "https://new-fake-serv.herokuapp.com";

const handleErrors = (resp) => {
    if (!resp.ok) {
        return Promise.reject(resp.status)
    }
    return resp;
}

export const saveOrdersAPI = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${url}/orders`, options)
            .then(resp => handleErrors(resp))
            .then(resp=>resp.json())
    }

export const loadProductsFromAPI = (name) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const copyUrl = `${url}/${name}`;
    return fetch(`${copyUrl}`, options)
            .then(resp => handleErrors(resp))
            .then(resp=>resp.json())
}