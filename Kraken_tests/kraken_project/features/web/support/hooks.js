const { After, Before } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
});

After(async function () {
  if (this.counterRows === 1) {
    await this.deviceClient.stopKrakenForUserId(this.userId);
  }
});
