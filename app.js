class apiCombinator {
  constructor(app) {
    this.app = app;
    this.apiConfig = app.config.apiCombinator
  }

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
  }

  async didReady() {
    let apiConfig = this.apiConfig
    let stableApis = apiConfig.stableApis;
    let stableData = apiConfig.stableData;
    let unstableApis = apiConfig.unstableApis;
    this.app.registerApi(stableApis, stableData, unstableApis);
    let path = __dirname + "/app/schedule/";
    let fileName = "updateApis";
    await this.app.runSchedule(path + fileName);
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = apiCombinator;
