FROM node:8.1

ENV APP_HOME /app
ENV NODE_ENV production
ENV PORT 9003

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY . $APP_HOME
RUN npm install

EXPOSE $PORT

RUN /bin/bash -c "echo TERM=xterm" >> ~/.bashrc
RUN /bin/bash -c "echo alias ll=\'ls -lha --color=auto $@\'" >> ~/.bashrc

CMD [ "npm", "start" ]