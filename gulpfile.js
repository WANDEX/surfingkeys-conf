const gulp = require("gulp")

// removes unnecessary repetition
const { task, src, dest } = gulp
const { series } = gulp

const webpack = require("webpack")
const webpackStream = require("webpack-stream")

const rename = require("gulp-rename")
const del = require("del")
const path = require("path")
const platforms = require("platform-folders")

const webpackConfig = require("./webpack.config.js")

const paths = {
  entry:      "src/conf.js",
  gulpfile:   "gulpfile.js",
  scriptOut:  "surfingkeys.js",
  buildDir:   "build/",
  installDir: path.join(platforms.getConfigHome(), "surfingkeys"),
}

task("clean", () => del(["build", ".cache", ".tmp-gulp-compile-*"]))

const build = () =>
  src(paths.entry)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(rename(paths.scriptOut))
    .pipe(dest(paths.buildDir))

task("build", series(build))

task("install", series("build", () => src(path.join(paths.buildDir, paths.scriptOut))
  .pipe(dest(paths.installDir))))

task("default", series("build"))
