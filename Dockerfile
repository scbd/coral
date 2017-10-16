FROM node:7.8.0-alpine

ENV HOST 0.0.0.0
ARG COMMIT
ENV COMMIT $COMMIT

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git


ONBUILD COPY . /usr/src/app/
ONBUILD RUN npm install


# Build app
ONBUILD RUN npm run build

EXPOSE 3333

# start command
CMD [ "npm", "start" ]