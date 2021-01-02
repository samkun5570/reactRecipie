# pull official base image
FROM node:12.16.1

# set working directory
WORKDIR /app
# WORKDIR '/app'

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH



# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# COPY package.json .
# RUN npm install

# add app
COPY . ./
# COPY . .

# start app
CMD ["npm", "start"]