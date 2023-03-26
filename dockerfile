FROM node:17.0.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3333

EXPOSE 3333

CMD ["npm", "run", "dev"]