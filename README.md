# Simple VueJS + Parse Server + Parse Dashboard + Mongo, on Docker containers.

Here we have a simple VueJS application that is using Parse Server as an API server. Following Parse Server, are Parse Dashboard and MongoDB. Everything is contained in a docker-compose project to enhance the setup.

## Configuration

All attributes like passwords, URL connections, etc, are contained in [.env](https://github.com/clbcabral/docker-vuejs-and-parse-server/blob/master/.env) file. Specific Parse Server configurations are present [config.json](https://github.com/clbcabral/docker-vuejs-and-parse-server/blob/master/docker/builds/parse/config/config.json) file. Change both before performing the docker build.

You can also add your Parse cloud code on [main.js](https://github.com/clbcabral/docker-vuejs-and-parse-server/blob/master/docker/builds/parse/cloud/main.js) file.

## Build Setup and Run

``` bash
# build containers
docker-compose build

# run
docker-compose up -d
```

Test on [http://localhost:80](http://localhost:80).

Parse dashboard is also avaliable on port [http://localhost:4040](http://localhost:4040)

Enjoy it!

## License

The project is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).