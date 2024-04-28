FROM node:alpine

WORKDIR /app

RUN npm install -g serve

COPY . .

EXPOSE 3000

CMD ["serve", "-p", "3000", "./mkruna"]