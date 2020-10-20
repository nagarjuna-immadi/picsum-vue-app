#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build


git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nagarjuna-immadi/picsum-vue-app.git master:gh-pages