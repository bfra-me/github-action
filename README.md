<p align="center">

[![GitHub Workflow CI Status](https://img.shields.io/github/actions/workflow/status/bfra-me/github-action/ci.yaml?branch=main&style=for-the-badge&logo=github%20actions&logoColor=white&label=ci)][ci-workflow]

</p>

[ci-workflow]: https://github.com/bfra-me/github-action/actions?query=workflow%3Aci "Search GitHub Actions for CI workflow runs"

# Create a JavaScript Action using TypeScript

Use this template to bootstrap the creation of a TypeScript action. :rocket:

This template includes compilation support, tests, a validation workflow, publishing, and versioning guidance.

## Create an action from this template

Click the `Use this Template` and provide the new repo details for your action

## Clone the repo

```bash
git clone https://github.com/bfra-me/github-action.git
cd github-action
```

## Install dependencies

```bash
pnpm install
```

## Build and Test

```bash
pnpm run build
```

Run the tests :heavy_check_mark:

```bash
$ pnpm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

## Change action.yaml

The action.yaml defines the inputs and output for your action.

Update the action.yaml with your name, description, inputs and outputs for your action.

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

```javascript
import * as core from "@actions/core"
// ...

async function run() {
  try {
    // ...
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
```

## Publish to a distribution branch

Actions are run from GitHub repos so we will check in the packed dist folder.

Then build and push the results:

```bash
pnpm run build
git add dist
git commit -a -m "prod dependencies"
git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

## Validate

You can now validate the action by referencing `./` in a workflow in your repo (see [ci.yaml](.github/workflows/ci.yaml)).

```yaml
uses: ./
with:
  milliseconds: 1000
```

See the [actions tab](https://github.com/bfra-me/github-action/actions) for runs of this action! :rocket:

## Usage

You can use this action in your workflows like this:

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run my action
        uses: bfra-me/github-action@v2
        with:
          milliseconds: 1000
```
