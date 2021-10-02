FROM node:14.18.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 80
ENV PORT 80
ENV NODE_ENV production

COPY . /usr/src/app
RUN yarn
RUN yarn build

CMD [ "yarn", "start" ]
