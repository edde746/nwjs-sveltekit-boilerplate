# NW.js + SvelteKit Boilerplate

Simple boilerplate for building cross-platform apps with NW.js and SvelteKit. Get started by [running locally](#running-locally), then [build your app for production](#building).

<img width="912" alt="Example Application" src="https://github.com/edde746/nwjs-sveltekit-boilerplate/assets/86283021/8a3f4d7c-8fb8-443a-9c6a-8051820d8ac5">

## Running Locally

```bash
mkdir my-project && cd my-project
npx degit github:edde746/nwjs-sveltekit-boilerplate
npm install
npm start
```

## Building

First, make sure that the `app` options are set to your liking in `build.js`.

To build, simply run `npm run build -- platform-arch` (example: `npm run build -- win-x64`). A list of all available platforms and architechtures can be found in the [nw-builder documentation](https://nwutils.io/nw-builder/#options-object).

### Web Only

If you only want to build the web version of your app, simply run `npm run build:web`.
