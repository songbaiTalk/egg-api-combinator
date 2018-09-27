// app/extend/application.js
const axios = require("axios");
module.exports = {
  registerApi(stableApis, stableData, unstableApis) {
    this.test = false;
    this.apis = {
      stableApis: stableApis,
      unstableApis: unstableApis,
      currentCount: 0,
      cacheData: stableData,
      maxTimes: 0
    };
    var stableApis = this.apis.stableApis;
    Object.keys(stableApis).forEach(apiKey => {
      let api = stableApis[apiKey];
      if (api.times > this.apis.maxTimes) {
        this.apis.maxTimes = api.times;
      }
      api.times = parseInt(api.times);
    });

    this.currentCount = 0;
  },
  async updateApi() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    var apis = this.apis.stableApis;
    var currentCount = this.apis.currentCount;
    await Object.keys(apis).forEach(async apiKey => {
      let api = apis[apiKey];
      if (currentCount % api.times == 0) {
        let data = await axios({
          method: api.method,
          url: api.url,
          params: api.method == "get" ? api.params : {},
          data: api.method == "post" ? api.params : {}
        });
        data = data.data;
        this.apis.cacheData[apiKey] = api.treatment(data);
      }
    });
    this.apis.currentCount = (this.apis.currentCount + 1) % this.apis.maxTimes;
  },
  testit() {}
};
