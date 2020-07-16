## Getting started

### Pre-requisite

* make sure that `docker-compose` is install on your machine

### Quick and simple start.

1. Run `./docker_setup` to initialize your environment
2. Run `docker-compose up` to start the Retool server
3. Go to `http://localhost:3000` and sign up!

#### Updating Retool

1. Run `./update_retool.sh`
1. Alternatively, stop the server, and run `sudo docker-compose pull` and then `sudo docker-compose up -d`

#### End-to-end testing

1. Run `yarn install`
2. Write tests, beta docs [here](https://paper.dropbox.com/doc/Retool-E2E-Testing-Docs--A30IzPqSlp9UAfNYxuBH8zcxAg-2qH6EwdSQ0CjganPg5ocL)
3. Run tests with `./run_tests.sh`
