FROM node:8.1

# docker build -t gcr.io/show-to/pato:latest .
# gcloud docker -- push gcr.io/show-to/pato:latest

ENV APP_HOME /app
ENV NODE_ENV production
ENV PORT 9003
ENV BASE_URL https://shows.to/

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY . $APP_HOME
RUN rm -rf node_modules/
RUN npm install
RUN npm install bull
RUN npm install cors

EXPOSE $PORT

RUN /bin/bash -c "echo TERM=xterm" >> ~/.bashrc
RUN /bin/bash -c "echo alias ll=\'ls -lha --color=auto $@\'" >> ~/.bashrc

CMD [ "npm", "start" ]