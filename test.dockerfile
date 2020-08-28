FROM node:latest

# Dependencies for cypress

RUN apt-get update && \
  apt-get install xvfb -y && \
  apt-get install libgconf-2-4 -y && \
  apt-get install libxtst6 -y && \
  apt-get install libnss3-dev -y && \
  apt-get install libgtk-3-dev -y && \
  apt-get install libasound-dev -y && \
  apt-get install libxss-dev -y

WORKDIR /retool

COPY package.json yarn.lock ./

RUN yarn install

COPY --from=library/docker:latest /usr/local/bin/docker /usr/bin/docker
COPY --from=docker/compose:1.22.0 /usr/local/bin/docker-compose /usr/bin/docker-compose

COPY docker.env retool.test.dockerfile version cypress.json ./
COPY cypress/ ./cypress
COPY apps/ ./apps
COPY config/ ./config
COPY docker-compose.test.yml ./docker-compose.yml

CMD ["bash", "-c", "docker-compose up --build -d && ./cypress/wait-for-it.sh localhost:3000 && yarn cypress run && docker-compose down"]
