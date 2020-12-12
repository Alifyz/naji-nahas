## Naji Nahas - API
![Node.js CI](https://github.com/Incitte/itsmoney-nahas/workflows/Node.js%20CI/badge.svg)


Naji Nahas is a service responsible for extracting financial data from Canal Eletrônico do Investidor, and save into our customer database for itsmoney app to consume. 

![Microservice](assets/nahas.jpg)

## Requirements

* NodeJS - v13.11.0
* heroku/7.42.1 darwin-x64 node-v12.16.2

## Deployment 
This repository uses Heroku Pipelines to deploy the app to the customers. When a pull request is submitted to the repository a new "review app" is created at heroku pipelines for testing purposes, then when the changes are approved and merged the new version is deployed at "staging" for further testing.

 

![Pipeline](assets/heroku.png)

## Logging/Monitoring - Heroku CLI

For debugging and logging we use Heroku CLI. 

**Most used commands**

```bash
heroku logs -n 200 - Show the 200 most recent logs
heroku logs --tail -a app-name - Show Realtime logs of the Service 
```
