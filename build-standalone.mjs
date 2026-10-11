import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.join(projectRoot, "outputs");

const [html, styles, app, data] = await Promise.all([
  readFile(path.join(projectRoot, "index.html"), "utf8"),
  readFile(path.join(projectRoot, "style.css"), "utf8"),
  readFile(path.join(projectRoot, "app.js"), "utf8"),
  readFile(path.join(projectRoot, "data.js"), "utf8"),
]);

const embeddedData = data.replaceAll("export const ", "const ").replace(/export default\s+\{[\s\S]*?\};?\s*$/m, "");
const embeddedApp = app.replace(/^import[\s\S]*?from "\.\/data\.js";\r?\n\r?\n/, "");
const dataAliases = `
const sourceTopics = topics;
const sourceArticles = articles;
const sourceGlossary = glossary;
const sourceCountries = countries;
const sourceIdeologies = ideologies;
const sourceEvents = events;
const sourceSources = sources;
const sourceRelationships = relationships;
`;
const inlineScript = `${embeddedData}\n\n${dataAliases}\n{\n${embeddedApp}\n}`.replace(/<\/script/gi, "<\\/script");

const bundledHtml = html
  .replace('<link rel="stylesheet" href="./style.css" />', () => `<style>\n${styles}\n</style>`)
  .replace('<script type="module" src="./app.js"></script>', () => `<script type="module">\n${inlineScript}\n</script>`);

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, "PolitiCore-Bilingual.html"), bundledHtml, "utf8");
console.log("Created outputs/PolitiCore-Bilingual.html");
