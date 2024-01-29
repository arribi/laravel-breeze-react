import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://arribi.informaticamajada.es',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  withXSRFToken: true,
})

export default axios
