FROM node:13-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json .npmrc ./

ENV PORT 3333

RUN npm install

COPY . .

EXPOSE 3333
CMD [ "npm", "start" ]
