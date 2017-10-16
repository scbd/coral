// ============================================================
//
// ============================================================

import axios from 'axios'

const env = 'local'

let options = {}

setOptions()
let ax = create()
// ax.interceptors.response.use(function (resp) {
//     // Do something with response data
//     console.log('resp',resp);
//     return response;
//   }, function (error) {
//     // Do something with response error
//     console.log('error',error);
//     return Promise.reject(error);
//   });

ax.interceptors.response.use(null, function (err) {
// Do something with response data
// console.log('resp',err.response);
  return Promise.reject(err)
})

export default {
  options: options,
  create: create,
  ax: ax
}

// ============================================================
//
// ============================================================
function validateStatus (status) {
  return (status >= 200 && status < 300) || status == 400 || status == 401 || status == 422 || status == 404 || status == 403
}

// ============================================================
//
// ============================================================
function setOptions () {
  if (env === 'local') { options.baseURL = 'http://localhost:8000/api' }

  options.validateStatus = validateStatus
}

// ============================================================
//
// ============================================================
function create (token) {
  if (token) {
    options.headers = {
      Authorization: token,
      domain: 'https://api.cbddev.int'
    }
  }

  ax = axios.create(options)
  return ax
}
