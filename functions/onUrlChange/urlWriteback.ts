import { urlWritebackPlugin } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.3/mod.ts";

const pageUrlCustomField = "c_pagesUrl"; // Need to update to api name of CF storing prod URL for entities
const API_KEY = "e28da53848a6e8ee815bd443a4eda720";

const main = (args) => {
  console.log(args);

  try {
    console.log("Running urlWritebackPlugin");
    urlWritebackPlugin({
      field: pageUrlCustomField,
      apiKey: API_KEY,
      environment: "prod",
      v: "20221010",
    });
    console.log("Finished urlWritebackPlugin");
  } catch (e) {
    console.log("Error running urlWritebackPlugin");
    console.log(e);
  }
};

export default main;
