FROM node:26-alpine

RUN apk upgrade --no-cache

# node:26 images no longer ship yarn/corepack
RUN npm install -g --ignore-scripts yarn@1.22.22

WORKDIR /usr/src/app

ENV HOST=0.0.0.0

ARG BRANCH
ENV NODE_ENV=$BRANCH

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 8000

# start command
CMD ["yarn", "start" ]
