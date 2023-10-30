import nwbuild from "nw-builder";
import fs from "fs";
import { processPackage } from 'copy-production-deps/lib/copy-production-deps.js';
const { version, name } = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

if (process.argv.length < 3) {
  console.log("Usage: npm run build -- <platform>-<arch>");
  process.exit(1);
}

const [platform, arch] = process.argv.at(-1).split("-");

console.log("🔍 Finding dependencies...");

const context = [];
processPackage({
  sourceDir: './',
  deps: [],
}, context);

console.log("🚀 Building...");

await nwbuild({
  srcDir: `./app/**/* ./package.json ./serve.js ${context.map((m) => m.sourceDir).join(" ")}}`,
  mode: "build",
  version: "latest",
  flavor: "normal",
  platform,
  arch,
  outDir: "./build",
  cache: true,
  app: {
    /** @type {import('nw-builder').OsxAppOptions} */
    osx: {
      name,
      icon: "./resources/icon.icns",
      CFBundleDisplayName: name,
      CFBundleIdentifier: "com.example.nwjs-sveltekit-app",
      CFBundleVersion: version,
    },
    /** @type {import('nw-builder').WindowsAppOptions} */
    win: {
      name,
      icon: "./resources/icon.ico",
      company: "example",
      productVersion: version,
      fileVersion: version,
      version,
    },
    /** @type {import('nw-builder').LinuxAppOptions} */
    linux: {
      name,
    },
  }[platform],
});

console.log("🎉 Done!");
