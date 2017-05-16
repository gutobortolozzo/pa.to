# PA.TO 

### Development environment

 - Install docker tools, see further instructions [here](https://www.docker.com/products/overview)
 - Get up and running `docker-compose up -d`, execute only once
 - Connect to app container `docker exec -it pa.to /bin/bash`
  - Execute your commands like you are coding in your bare metal machine
  - Exposed port by app container is 3000
  - `npm install` to ensure all dependencies are installed
  - `npm start` to start running your app
  - `npm install -g nodemon` and `nodemon index.js` To restart your server everytime you change some code
 - Done working today `docker-compose pause`
  - Check paused containers `docker ps`
 - Resume working `docker-compose unpause`
 
###  Running your tests

 - Connect to your `postgresql` container and create one database called `database_development`
 - Connect to app container `docker exec -it pa.to /bin/bash`
 - Run migration using `node_modules/.bin/sequelize db:migrate`
  - Undo you migration if needed `node_modules/.bin/sequelize db:migrate:undo:all`
 - `npm test`
  - All tests run inside a transaction that will be rollbacked after each test
  - Since container is configured to `development` mode you must run app to sync entities