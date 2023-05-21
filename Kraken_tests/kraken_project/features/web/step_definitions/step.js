const { Given, When, Then } = require("@cucumber/cucumber");
const fs = require("fs");
const fetch = require("node-fetch");

const email = "s.sierrar2@uniandes.edu.co";
const password = "And3sP@Krak3n2023";

this.counterRows = 1;

var jsonData = ''
const apiURLs = {
  sc01: "https://my.api.mockaroo.com/scenario_01?key=966c3bd0",
};

let responseHttp;

// ----------DATA A PRIORI STARTS

When("I update the counter with {int}", async function (rowIndex) {
  console.log(rowIndex);
  console.log(typeof rowIndex);
  this.counterRows = rowIndex;
});

When(
  "I type a value in {string} with {string}",
  async function (selector, value) {
    let target = await this.driver.$(selector);
    await target.setValue(value);
  }
);

When(
  "I type my email with {string} {string}",
  async function (email, emailSelector, passwordSelector, submitSelector) {
    let elementEmail = await this.driver.$(emailSelector);
    await elementEmail.setValue(email);

    let elementPassword = await this.driver.$(passwordSelector);
    await elementPassword.setValue(password);

    let elementBtn = await this.driver.$(submitSelector);

    return await elementBtn.click();
  }
);

// ----------DATA A PRIORI ENDS

// -----------DATA PSEUDO ALEATORIA
When("I retrieve data from {string}", async function (urlUrlKey) {
  console.log(apiURLs[urlUrlKey]);

  const response = await fetch(apiURLs[urlUrlKey]);

  responseHttp = await response.json();

  console.log(responseHttp);
});

// ----------ESCENARIOS ALEATORIOS STARTS

When(
  "I type a fake value in {string} with {kraken-string}",
  async function (selector, value) {
    let target = await this.driver.$(selector);
    await target.setValue(value);
  }
);

When("I type the valid email in login {string}", async function (selector) {
  let target = await this.driver.$(selector);
  await target.setValue(email);
});

When("I type the valid password in login {string}", async function (selector) {
  let target = await this.driver.$(selector);
  await target.setValue(password);
});

When(
  "I fill with text a post desc fake {kraken-string}",
  async function (value) {
    let element = await this.driver.$(
      'div[class="koenig-editor__editor-wrapper"]'
    );

    await element.click();

    let elementP = await this.driver.$('p[data-koenig-dnd-droppable="true"]');

    await elementP.setValue(value);
  }
);

When(
  "I fill with text a field fake {string} {string} {kraken-string}",
  async function (description, reference, value) {
    console.log(description);

    let element = await this.driver.$(reference);
    return await element.setValue(value);
  }
);

// ----------ESCENARIOS ALEATORIOS ENDS
When(
  "I log in {string} {string} {string}",
  async function (emailSelector, passwordSelector, submitSelector) {
    let elementEmail = await this.driver.$(emailSelector);
    await elementEmail.setValue(email);

    let elementPassword = await this.driver.$(passwordSelector);
    await elementPassword.setValue(password);

    let elementBtn = await this.driver.$(submitSelector);

    return await elementBtn.click();
  }
);

When(
  "I click a button {string} {string}",
  async function (description, btnSelector) {
    console.log(description);

    let element = await this.driver.$(btnSelector);
    return await element.click();
  }
);

When(
  "I fill with text a field {string} {string} {string}",
  async function (description, reference, value) {
    console.log(description);

    let element = await this.driver.$(reference);
    return await element.setValue(value);
  }
);

When("I fill with text a post desc {string}", async function (value) {
  let element = await this.driver.$(
    'div[class="koenig-editor__editor-wrapper"]'
  );

  await element.click();

  let elementP = await this.driver.$('p[data-koenig-dnd-droppable="true"]');

  await elementP.setValue(value);
});

When("I fill with text a tag desc {string}", async function (value) {
  let element = await this.driver.$(
    'div[class="form-group no-margin success"]'
  );

  await element.click();

  let elementP = await this.driver.$('p[data-koenig-dnd-droppable="true"]');

  await elementP.setValue(value);
});

Then(
  "I click a btn {string} {string}",
  async function (description, reference) {
    console.log(description);
    let element = await this.driver.$(reference);
    return await element.click();
  }
);

Then(
  "I find an element {string} {string}",
  async function (description, reference) {
    return await this.driver.$(reference);
  }
);

Then("I click enter", async function () {
  const event = new KeyboardEvent("keydown", { key: "Enter" });
  document.body.dispatchEvent(event);
});

Then("I change sshots names", async function () {
  console.log(this.testScenarioId);
  let sshots_folder = `./reports/${this.testScenarioId}/screenshots/`;
  let contador = 1;
  fs.readdirSync(sshots_folder).forEach((file) => {
    fs.renameSync(
      sshots_folder + "/" + file,
      sshots_folder + "/" + contador + ".png"
    );
    contador++;
    console.log(file);
  });
});

When("I retrieve data from", async function () {
  const response = await fetch(
  "https://my.api.mockaroo.com/sc11?key=966c3bd0"
  );
  jsonData = await response.json();
  });

When("I fill a text with mockaroo {string} {string} {string}",
async function (description, reference, field_type) {
  console.log(description)
  if (jsonData.hasOwnProperty(field_type)) {
    let element = await this.driver.$(reference);
    return await element.setValue(jsonData[field_type]);
  } else {
    throw new Error(`The key ${field_type} doesnt exist.`);
  }
});
