FROM node:24 

WORKDIR /app 

COPY package.json .

RUN npm install

COPY dist . 

RUN npm install

CMD ["node","app.js"]