const axios = require("axios");
module.exports = {
  async apiCombinator(apiArr, treatment) {
    var data = {};
    var apis = [];
    var unstableApis = this.app.apis.unstableApis;
    apiArr.forEach(apiItem => {
      let unstableApi = unstableApis[apiItem['key']]
      unstableApi['headers'] = Object.assign({}, apiItem['headers'])
      unstableApi['params'] = Object.assign({}, apiItem['params'])
      apis.push(unstableApi);
    });
    await axios.all(generateRequest(apis)).then(
      axios.spread(function(...response) {
        response.forEach(res => {
          data = Object.assign({}, data, res.data);
        });
      })
    );
    return treatment(data);
  },
  setParams(apiKey, params, headers){
    var api = this.app.apis.unstableApis[apiKey];
    api['params'] = Object.assign({}, api['params'], params);
    api['headers'] = Object.assign({}, api['headers'], headers);
  }
};

function generateRequest(apis) {
  var request = [];
  apis.forEach(api => {
    request.push(
      axios({
        method: api.method,
        headers: api.headers,
        url: api.url,
        params: api.method == "get" ? api.params : {},
        data: api.method == "post" ? api.data : {}
      })
    );
  });
  return request;
}
