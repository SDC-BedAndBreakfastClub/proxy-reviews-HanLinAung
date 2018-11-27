FROM node:slim

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8081

CMD ["npm", "start"]