var Fetch = require('whatwg-fetch');
var baseURL = '';

var service = {
  get: function(url) {
    return fetch(baseURL+url,
                { method: 'GET',
                  headers: {
                    'Accept': 'application/json'}
                })
    .then(function(response) {      
      return response.json();
    });
  },
  post: function(url, data) {
    return fetch(baseURL+url,
                { method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)}
                )
    .then(function(response) {
      return response.json();
    });
  },
};

module.exports = service;
