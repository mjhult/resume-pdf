import fs from "fs";
import { render } from "./render";

(async () => {
  console.log("Checking for pdf directory...");
  console.time("Directory check");
  if (!fs.existsSync(`${__dirname}/../build/pdf/`))
    fs.mkdirSync(`${__dirname}/../build/pdf/`, { recursive: true });
  console.timeEnd("Directory check");

  console.log("\nRendering PDF...");
  console.time("Rendering");
  await render();
  console.timeEnd("Rendering");
})();
