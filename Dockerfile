FROM node:current-alpine3.13

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD [ "npm", "start" ]