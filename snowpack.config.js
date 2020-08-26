module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  exclude: ["**/src/main/**/*", "**/src/test/**/*"],
  mount: {
    frontend: "/_dist_",
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "tsc --noEmit",
        watch: "$1 --watch",
      },
    ],
    ["@snowpack/plugin-run-script", { cmd: "svelte-check" }],
    [
      "@snowpack/plugin-build-script",
      {
        cmd: "cp $FILE src/main/resources/templates/",
        input: [".html"],
        output: [".html"],
      },
    ],
    // [
    //   "@snowpack/plugin-webpack",
    //   {
    //     extendConfig: (config) => {
    //       console.log(config);
    //       return config;
    //     },
    //   },
    // ],
  ],
  installOptions: {
    installTypes: true,
    dest: "src/main/resources/static/web_modules",
    sourceMap: true,
  },
  devOptions: {
    out: "src/main/resources/static/",
    bundle: true,
  },
  buildOptions: { clean: true },
};