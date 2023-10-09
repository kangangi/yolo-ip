FROM node:20-alpine

ENV MONGODB_URI=mongodb+srv://kangangi:adminpass@cluster0.jsqhtza.mongodb.net/?retryWrites=true&w=majority

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run

EXPOSE 5000

CMD ["npm", "start"]