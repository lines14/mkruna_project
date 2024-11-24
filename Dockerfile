FROM node:alpine

WORKDIR /app

RUN npm install -g serve

COPY . .

EXPOSE 3001

CMD ["serve", "-p", "3001", "./mkruna"]