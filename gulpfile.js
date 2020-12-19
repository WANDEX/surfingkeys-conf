const gulp = require("gulp")

// removes unnecessary repetition
const { task, src, dest } = gulp
const { parallel, series } = gulp

const parcel = require("gulp-parcel")
const rename = require("gulp-rename")

const del = require("del")
const path = require("path")
const platforms = require("platform-folders")

const paths = {
  entry:            "src/main.js",
  gulpfile:         "gulpfile.js",
  scriptOut:        "surfingkeys.js",
  installDir:       path.join(platforms.getConfigHome(), "surfingkeys"),
}

task("clean", () => del(["build", ".cache", ".tmp-gulp-compile-*"]))

task('build', () => src(paths.entry, { read: false })
  .pipe(parcel())
  .pipe(rename(paths.scriptOut))
  .pipe(dest("build"))
)

task("install", series("build", () => src(path.join("build", paths.scriptOut))
  .pipe(dest(paths.installDir))))

task('default', series('build'))
