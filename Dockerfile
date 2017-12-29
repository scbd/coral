FROM node:8.9.1-alpine

ENV HOST 0.0.0.0
ARG COMMIT
ENV COMMIT $COMMIT

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git

ARG COMMIT
ENV COMMIT $COMMIT

COPY . /usr/src/app/
RUN npm install


# Build app
RUN npm run build

EXPOSE 3333

# start command
CMD [ "npm", "start" ]
