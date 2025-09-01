# FROM node:24 

# WORKDIR /app 

# VOLUME  "/data/friends"

# COPY package.json .

# RUN npm install

# COPY dist . 

# RUN npm install

# ENV PORT=3000

# CMD ["node","app.js"]

# Stage 1 : "Build the App"

FROM node:24 AS build

WORKDIR /app 

COPY package.json .

RUN npm install

COPY tsconfig.json ./

COPY src ./src

RUN npm run build 


# Stage 2 : "Runtime Image"

FROM node:24 AS runtime 

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package.json .

RUN npm install --omit=dev

VOLUME [ "/data/friends" ]

ENV PORT=3000

CMD [ "node","dist/app.js" ]