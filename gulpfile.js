const gulp = require("gulp")

// removes unnecessary repetition
const { task, src, dest } = gulp
const { parallel, series } = gulp

const webpack = require("webpack")
const webpackStream = require("webpack-stream")

const rename = require("gulp-rename")
const del = require("del")
const path = require("path")
const platforms = require("platform-folders")
const gulpNotify = require("gulp-notify")
//const PluginError = require("plugin-error")

const pkg = require("./package.json")
const webpackConfig = require("./webpack.config.js")

const paths = {
  entry:      "src/conf.js",
  gulpfile:   "gulpfile.js",
  scriptOut:  "surfingkeys.js",
  buildDir:   "build/",
  installDir: path.join(platforms.getConfigHome(), "surfingkeys"),
}

const notify = Object.assign((opts, ...args) => gulpNotify({
  icon:    null,
  onLast:  true,
  timeout: 3000,
  ...opts,
}, ...args), gulpNotify)

notify.onError = (opts, ...args) => gulpNotify.onError({
  onLast:  true,
  timeout: 7500,
  ...opts,
}, ...args)

task("clean", () => del(["build", ".cache", ".tmp-gulp-compile-*"]))

const build = () =>
  src(paths.entry)
    .pipe(webpackStream(webpackConfig, webpack))
    .on("error", (err) => {
      notify.onError({
        title:   `[gulp] Build failure [${pkg.name}]`,
        message: `${err.message.split("\n").slice(0, 1)}`,
      })(err)
      throw err
    })
    .pipe(rename(paths.scriptOut))
    .pipe(dest(paths.buildDir))
    .pipe(notify({
      title:   `[gulp] Build success [${pkg.name}]`,
      message: "No issues",
    }))

/*task("build",
  parallel(
    "lint",
    build,
  ))
*/

task("build", series(build))

task("install", series("build", () => src(path.join(paths.buildDir, paths.scriptOut))
  .pipe(dest(paths.installDir))))

task("default", series("build"))
