# README

[![Build Status](https://travis-ci.org/CSUF-ACM/acmwebsite.svg?branch=master)](https://travis-ci.org/CSUF-ACM/acmwebsite)

## Prerequisites

- [NodeJS LTS version](https://nodejs.org/dist/v8.11.4/node-v8.11.4.pkg) (v8.11.4 at time of writing)
- A preferred Text Editor. I like to use [VSCode](https://code.visualstudio.com/).

## How to Build

### Dev

In a terminal, navigate to the repository and execute this command:

- `npm install && npm start`

A browser will launch and open the website. You can now begin development! Any changes made to the website will update automatically, no need to rebuild.

### Production

To create an optimized production build, run this command:

- `npm run build`

Or, in VSCode:

- Mac: `⌘ + SHIFT + B`
- Windows: `CTRL + SHIFT + B`

This generates the `build` folder, which contains the files you will deploy to the server to be published for all to see! 👀

### Deployment

Artifacts are automatically deployed to the server upon a successful build by TravisCI. For most use cases, this process is completely automated.

Server URL and credentials are stored as environment variables in TravisCI. 

To replicate build deployment locally, simply add the necessary values to your env by executing these commands in a bash terminal (or add to your shell initialization script):

`export SERVER_URL=<server url>`

`export SERVER_USER=<server user>`

`export SERVER_PASS=<server pass>`

and then run:

 `bash scripts/deploy.sh`
