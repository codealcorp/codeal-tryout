FROM node:14.10

WORKDIR /app

ADD package.json ./
ADD yarn.lock ./

RUN yarn install

ADD . .

RUN yarn tsc

CMD ['node', './dist/fizzBuzz.js']
