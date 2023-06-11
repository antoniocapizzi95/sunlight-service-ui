# sunlight-service-ui

## Description

Sunlight-Service-UI is a simple webpage created using Vue 3. Given a date and a geographical location, it displays the daylight hours from the selected day until the end of that year. For example, if the user selects June 12th, 2023, the application will display the daylight hours for that day, as well as the daylight hours for July 12th, August 12th, and so on until December 12th, 2023. The user can input the geographical location manually or automatically using the device's GPS.

## Installation

To run the application locally, make sure you have Docker and docker-compose installed. 
1. Start the back-end project (it can be found in the repository https://github.com/antoniocapizzi95/sunlight-service-api). 
2. run the command `docker-compose up`. The application will be available on port 8080 by default.

## Deployment

The project includes a GitHub Action to deploy it publicly on GCP CloudRun.

## Usage

The user can input a date and a geographical location to display the daylight hours. The webpage has a simple interface and no styling.
