FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"]