FROM node:carbon



# Install PM2
RUN npm install -g pm2

# Create app directory
RUN mkdir -p /event_webhook
# Change Work directory to app
WORKDIR /event_webhook

# Install app dependencies
COPY package.json /event_webhook/
RUN npm install


# Bundle app source
COPY . /event_webhook

EXPOSE 3000


CMD ["pm2", "start", "index.js", "--no-daemon"]