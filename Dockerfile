# FROM node:18.13 as build
FROM node:18.13-slim as build

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build



FROM nginx:1.23.3-alpine-slim

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/mxm-frontend/ /usr/share/nginx/html
