FROM node:latest AS ng-builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm install -g @angular/cli@1.7.1 --unsafe

RUN ng build --prod

FROM nginx
COPY nginx.prod.conf /etc/nginx/nginx.conf

COPY --from=ng-builder /app/dist /usr/share/nginx/html
EXPOSE 80