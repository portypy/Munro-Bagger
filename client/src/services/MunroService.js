const baseURL = 'http://localhost:3000/api/munros/'

export default {
    getMunros() {
      return fetch(baseURL)
        .then(res => res.json())
    },
  
    postMunros(payload) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
    },
  
    deleteMunros(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      })
    }
  }