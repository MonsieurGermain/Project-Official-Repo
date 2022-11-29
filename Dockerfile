FROM node:16 AS builder

COPY install-packages.sh .
RUN chmod +x install-packages.sh
RUN ./install-packages.sh

WORKDIR /usr/src/app

COPY ./package* ./
COPY package.json package.json  

RUN npm install
COPY . .
CMD npm start