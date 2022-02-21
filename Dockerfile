# Dockerfile for React client

FROM node:latest

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json yarn.lock ./
RUN yarn install --pure-lockfile

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["yarn","start"]