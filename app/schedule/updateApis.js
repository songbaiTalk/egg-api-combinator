module.exports = app => {
    return {
      schedule: {
        interval: app.config.apiCombinator.baseTime,
        type: 'all',
      },
      async task() {
        app.updateApi();
      },
    };
  };