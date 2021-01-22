const baseURL = 'http://localhost:3000/api/munros/'

export default {
    getBagged() {
      return fetch(baseURL)
        .then(res => res.json())
    },
  
    postBagged(payload) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
    },
  
    deleteBagged(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      })
    }
  }