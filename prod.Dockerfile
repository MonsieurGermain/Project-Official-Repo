FROM node:16 AS builder

RUN export DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get -y install git nano -y
RUN apt-get -y install software-properties-common -y
RUN apt-get -y install ffmpeg -y
RUN apt-get -y install exiftool -y
RUN apt-get -y install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev ffmpeg libwebp-dev libopenjp2-7-dev librsvg2-dev libde265-dev

WORKDIR /usr/src/app

COPY ./package* ./
COPY package.json package.json

RUN npm install
COPY . .
CMD npm start