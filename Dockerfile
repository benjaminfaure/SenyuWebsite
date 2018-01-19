FROM node:8.9.4


WORKDIR /app
# Install the node modules only
COPY package.json /app
RUN rm -rf ./node_modules && \
    npm install && \
    npm install serve && \
    npm cache verify

ENV NODE_ENV production

# Copy the local code source
COPY . /app


RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start:prod"]
