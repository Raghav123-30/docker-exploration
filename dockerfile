FROM node:24 

WORKDIR /app 

COPY package.json .

RUN npm install

COPY dist . 

RUN npm install

ENV PORT=3000



CMD ["node","app.js"]