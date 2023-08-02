FROM node:18-alpine
WORKDIR /app

RUN yarn install

RUN yarn build

ARG DATABASEHOST
ENV DATABASEHOST=${DATABASEHOST}

COPY . .

CMD [ "yarn", "start:prod" ]
EXPOSE 3001