FROM mhart/alpine-node:8.9.3

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash

ONBUILD COPY . /usr/src/app/
ONBUILD yarn


# Build app
RUN npm run build

EXPOSE 3333

# start command
CMD [ "npm", "start" ]
