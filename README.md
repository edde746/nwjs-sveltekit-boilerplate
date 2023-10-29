# NW.js + SvelteKit Boilerplate

Simple boilerplate for building cross-platform apps with NW.js and SvelteKit. Get started by [running locally](#running-locally), then [build your app for production](#building).

<img width="912" alt="Example Application" src="https://github.com/edde746/nwjs-sveltekit-boilerplate/assets/86283021/6dae503a-001f-4d45-ba08-e6ed5d8abe42">

## Running Locally

```bash
mkdir my-project && cd my-project
bunx degit github:edde746/nwjs-sveltekit-boilerplate
npm install
npm run dev
```

## Building

First, make sure that the `app` options are set to your liking in `build.js`. 

To build, simply run `npm run build -- platform-arch` (example: `npm run build -- win-x64`). A list of all available platforms and architechtures can be found in the [nw-builer documentation](https://nwutils.io/nw-builder/#options-object).
