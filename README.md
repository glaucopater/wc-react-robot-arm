# reminders-web-component
A Robot Arm Web Component build with React, TypeScript, @r2wc/react-to-web-component

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
