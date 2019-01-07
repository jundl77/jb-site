FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package*.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

RUN mv ./tools/ENV_VARS.js ./tools/ENV_VARS.temp.js
RUN apt-get update
RUN yes | apt-get install gettext

EXPOSE 8080

ENTRYPOINT ["/bin/bash", "-c", "envsubst < ./tools/ENV_VARS.temp.js > ./tools/ENV_VARS.js && npm run dev"]
