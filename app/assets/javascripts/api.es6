class Api{
  static token(){
    let el = document.querySelector('meta[name="csrf-token"')
    return el ? el.getAttribute("content") : '';
  }

  static headers(){
    return{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": this.token(),
      "X-Requested-With" : "XMLHttpRequest"
    }
  }

  static xhr(route, params, verb){
    return fetch(`${route}.json`, _.merge({
      method: verb,
      credentials: 'include',
      headers: this.headers()
    }, { body: JSON.stringify(params) })).then( response => {
      return response.json()
    })
  }

  static put(route, params){
    return this.xhr(route, params, 'put')
  }

  static post(route, params){
    return this.xhr(route, params, 'post')
  }

  static get(route, params){
    return this.xhr(route, params, 'get')
  }
}

export default Api
