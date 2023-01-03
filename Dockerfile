# dockerfile

FROM node:16-alpine3.15

RUN mkdir -p /home/app/

WORKDIR /home/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "run"]

CMD ["serve"]
