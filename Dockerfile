FROM node:16 AS builder

COPY install-packages.sh .
RUN chmod +x install-packages.sh
RUN ./install-packages.sh

WORKDIR /usr/src/app

COPY ./package* ./
COPY .npmrc .npmrc  
COPY package.json package.json  

RUN npm install
RUN rm -f .npmrc
COPY . .
RUN npm run build

FROM node:16

COPY install-packages.sh .
RUN chmod +x install-packages.sh
RUN ./install-packages.sh

WORKDIR /usr/src/app

COPY ./package* ./
COPY .npmrc .npmrc  
RUN npm install --production
RUN rm -f .npmrc
COPY --from=builder /usr/src/app/build ./build
CMD npm run production