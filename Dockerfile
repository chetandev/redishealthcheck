FROM node:alpine


ARG branch

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./


RUN npm install
RUN npm install pm2 -g 

# Bundle app source
COPY . .

EXPOSE 80 443 
CMD npm start && pm2 logs
