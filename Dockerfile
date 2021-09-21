FROM node:current-alpine3.13

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD [ "npm", "start" ]

# FROM node:14-alpine AS development
# ENV NODE_ENV development
# # Add a work directory
# WORKDIR /app
# # Cache and Install dependencies
# COPY package.json .

# RUN yarn install
# # Copy app files
# COPY . .
# # Expose port
# EXPOSE 4200
# # Start the app
# CMD [ "yarn", "start" ]