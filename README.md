# reminders-web-component
A Reminders Web Component build with React, TypeScript, @r2wc/react-to-web-component

[![Netlify Status](https://api.netlify.com/api/v1/badges/b4e00beb-f858-4835-a40f-ca5b5a48487e/deploy-status)](https://app.netlify.com/sites/reminders-web-component/deploys)

This application allows custom reminders management (CRUD operations, according to a specific REST Api).
At build time the application is bundled and exposed as a web component named "web-reminders" and can be consumed by another web page.
Vite is configured in order to generate always index.js and index.css as assets instead of a random name using an hash. 

Currently this web component can be consumed by https://github.com/glaucopater/reminders-web-components-host

Setup
---
- Clone the repo
- Run yarn
- Copy .env.sample into .env
- Run yarn dev

Scripts
---
- dev: it runs the application in development mode
- build: build the application
- lint: check for linting errors
- expose: build the app and expose the web-component on local web server

Env Variables:
---
- VITE_ENABLE_MSW: enable or disable MSW, for mocking a Rest API
- VITE_REMINDERS_API: the path for the Rest API
