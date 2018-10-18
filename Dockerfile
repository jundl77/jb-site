FROM node:10

RUN mkdir -p /usr/src/jbsite
WORKDIR /usr/src/jbsite

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
ONBUILD COPY package.json /usr/src/jbsite/
ONBUILD RUN npm install && npm cache clean --force
ONBUILD COPY . /usr/src/jbsite

CMD [ "npm", "start" ]

EXPOSE 8080
