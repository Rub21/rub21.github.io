const fs = require("fs");
const path = require("path");
const glob = require("glob-promise");
const fm = require("front-matter");
const { map } = require("p-iteration");

// Projects
async function main() {
  const mdFiles = await glob(`${path.join(__dirname, "projects/")}*.md`).then(
    function(files) {
      return files;
    }
  );
  const results = await map(mdFiles, async mdFile => {
    let jsonResult = {};
    const mdContent = fm(fs.readFileSync(`${mdFile}`, "utf8"));
    jsonResult = { ...mdContent.attributes };
    jsonResult.body = mdContent.body;
    const fileName = `${path.basename(mdFile).split(".")[0]}`;
    jsonResult.id = fileName;
    return jsonResult;
  });
  fs.writeFileSync(
    `${path.join(__dirname, "../src/data/")}projects.json`,
    JSON.stringify(results.reverse())
  );
}
main();
