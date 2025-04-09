import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const manifest = JSON.parse(readFileSync("./manifest.json", "utf8"));
const pkg = JSON.parse(readFileSync("./package.json", "utf8"));
const versions = JSON.parse(readFileSync("./versions.json", "utf8"));

const newVersion =
  process.argv[2] === "dev" ? `${pkg.version}-dev` : pkg.version;

manifest.version = newVersion;
manifest.minAppVersion = versions[pkg.version];

writeFileSync("./manifest.json", JSON.stringify(manifest, null, 2));

if (process.argv[2] === "dev") {
  execSync("git add manifest.json");
  execSync(`git commit -m "Bump version to ${newVersion}"`);
}
