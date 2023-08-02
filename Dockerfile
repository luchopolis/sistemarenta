FROM node:18-alpine
WORKDIR /app


RUN yarn global add @nestjs/cli

COPY package.json tsconfig.json tsconfig.build.json yarn.lock ./

RUN yarn install

RUN yarn build

ARG DATABASEHOST
ENV DATABASEHOST=${DATABASEHOST}

COPY . .

CMD [ "yarn", "start:prod" ]
EXPOSE 3000