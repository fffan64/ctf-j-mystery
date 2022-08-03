FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src .

ARG FLAG

ENV FLAG=$FLAG

# Install openjdk
# RUN apt-get update && \
#    apt-get install -y openjdk-8-jdk-headless && \
#    apt-get clean;
    
RUN add-apt-repository ppa:openjdk-r/ppa && \
    apt-get update && \
    apt-get install openjdk-8-jre && \
    apt-get clean;

# Exec program to generate int array from FLAG value and output to file
RUN javac Main.java && java Main > paramsFLAG.txt

EXPOSE 8080
CMD [ "node", "index.js" ]
