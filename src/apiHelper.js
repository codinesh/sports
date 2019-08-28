import axios from 'axios'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'
// const apiURL = 'https://crickettop10.vitanaprivatelimited.com/top10API/api'
const apiURL = 'https://cat-fact.herokuapp.com'
export default axios.create({
  baseURL: proxyurl + apiURL
})
