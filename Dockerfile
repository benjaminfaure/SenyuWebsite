FROM node:8.11.3


WORKDIR /app
# Install the node modules only
COPY package.json /app
RUN rm -rf ./node_modules && \
    npm install && \
    npm cache verify

ENV NODE_ENV production

# Copy the local code source
COPY . /app


RUN node -r dotenv/config /app/src/index.js && \
    npm run build

EXPOSE 5000
CMD ["npm", "run", "start:prod"]
