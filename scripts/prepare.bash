mkdir ./lib
tsc
copyfiles -u 1  "./src/**/*.css" "./lib/"
copyfiles -u 1 "./src/style/**/*" "./lib/"