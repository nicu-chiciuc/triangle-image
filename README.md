## Demo

The current deployed version can be checked out on
[nicu-chiciuc.github.io/triangle-image](https://nicu-chiciuc.github.io/triangle-image/).

![Screen capture of the project ](https://raw.githubusercontent.com/nicu-chiciuc/triangle-image/master/examples/demo.gif)

Be aware that for the first few seconds the application will look like it doesn't work. It starts slowly but afterwards there shouldn't be any problems

Also try writing something in the box with the label "Write something".

## Introduction

The idea came during a party when a friend was editing a low-poly logo.

I though it would be interesting to animate it.

The app works by creating a triangulation of randomly (almost randomly) moving points.
For each triangle the average color of the background picture is calculated and applied to the triangle.
To remove sharp changes the triangles are drawn with a low opacity and the movement looks quite cool.

Since most of the logic was written in several hours as a proof of concept, the UI wasn't the best concern.
Also the code might not look very good.

### Improvement ideas

The app could support uploading images or allowing different kind of shapes instead of text and also have a better UI.

## Building the project

The project requires `npm` and `webpack` (and `webpack-dev-server` or `http-server` or other server).

Running `webpack` will build the project once and stop.
Running `webpack --watch` will build the project and rebuild it when any changes occur in the source files.

The `/dist` directory contains the public files.
To serve the files in the folder `webpack-dev-server` can be invoked, or `http-server`. Both are `npm` packages which can be easily installed.

## Deployement

To deploy the project I used the workflow from [this article](http://pressedpixels.com/articles/deploying-to-github-pages-with-git-worktree/).


## Cloudflare Worker Previews

Workers Builds runs `npm run build`, then `npm run deploy` for the production
branch or `npm run deploy:preview` for other branches. The preview command uses
native Worker Previews with Wrangler 4.136.2. The empty `previews` config keeps
this app assets-only; no Convex keys or runtime secrets are required.

For an existing Worker, first use **Settings > Builds > Set up Worker Previews**
and restore the commands above after Cloudflare replaces the preview command.
Keep the existing build root and enable non-production branch builds. Verify the
new preview URL and application before completing the rollout.

Build before any manual deploy. To check the production package without an upload,
run `npm exec -- wrangler deploy --dry-run` after the build.
Worker Previews has no dry-run mode.
See the [Worker Previews configuration](https://developers.cloudflare.com/workers/previews/configuration/)
and [existing Worker setup](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/#existing-workers-connected-to-builds).
