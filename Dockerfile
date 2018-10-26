FROM node:10-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache yarn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV HOST 0.0.0.0

ARG BRANCH
ENV NODE_ENV $BRANCH

COPY . .

RUN yarn
RUN yarn build:ci
RUN rm -rf node_modules
RUN yarn install --prod=true

ENV NODE_ENV $BRANCH

EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
