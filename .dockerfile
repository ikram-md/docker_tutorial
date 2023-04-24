FROM node:latest

ENV PORT=8000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --global rimraf && npm install --global parcel-bundler

RUN npm install

RUN npm prebuild

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "node", "dist/app" ]