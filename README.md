# Smoke testing with Cypress

This is a repo to accompany the smoke testing workshop at CypressConf '25.

Fork this repo to follow along. During the session, you'll participate by extending the existing smoke tests in the `cypress/e2e` directory.

Tests are run against a [Shipyard](https://shipyard.build) ephemeral environment.

## What we'll accomplish

After this workshop, you should have working smoke tests for a login form page, as well as an automated GitHub Actions CI/CD pipeline that runs the spec.

## View the running app

Before running your tests, inspect the [Recipe Book app](https://recipebook-recipebook-pr7.dev.nbeck415.shipyard.host/) here.

## Setup

Fork this repo and clone it to your machine, then open up a terminal window and `cd` to its directory.

Install dependencies:
```sh
npm i
```

Test the config is loaded correctly:
```sh
npx cypress open
```
and go to the Settings tab.

## Usage

To run your smoke tests, use this command:

```sh
npx cypress run --headed
```

## Contents

1. Smoke tests
   1. `cypress/e2e/login-smoke.js`
2. CI/CD pipeline
   1. `.github/workflows/smoke-tests.yml`

## Environments from Shipyard

[Shipyard](https://shipyard.build) is an ephemeral environment self-service platform. You can get instant full-stack copies of an app for QA, smoke, unit, and E2E testing.

[Try it free for 30 days](https://shipyard.build/signup) or [book a demo](https://calendly.com/benjies) to learn more.
