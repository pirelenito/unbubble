FROM node:8.7.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 80
ENV PORT 80
ENV NODE_ENV production

COPY . /usr/src/app
RUN cd server && npm install && npm cache clean --force
RUN cd client && npm install && npm cache clean --force
RUN cd client && npm run build

CMD [ "npm", "start" ]
