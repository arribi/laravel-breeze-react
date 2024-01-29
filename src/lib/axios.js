import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://arribi.informaticamajada.es',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  },
  withCredentials: true
})

export default axios
