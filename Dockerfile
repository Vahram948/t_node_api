FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

VOLUME .:/usr/src/app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"]