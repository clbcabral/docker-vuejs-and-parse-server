FROM node

ENV dir /webapp
WORKDIR $dir

COPY ./package.json $dir
RUN npm install

COPY . $dir
RUN npm run build

VOLUME $dir