## Demo

The current deployed version can be checked out on
[nicu-chiciuc.github.io/triangle-image](https://nicu-chiciuc.github.io/triangle-image/).

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
