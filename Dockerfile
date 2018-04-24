FROM node:9.11.1
RUN apt-get -y update
RUN wget -qO - https://raw.githubusercontent.com/yarnpkg/releases/gh-pages/debian/pubkey.gpg | apt-key add  -
RUN apt-get -y install autoconf libtool pkg-config nasm build-essential
RUN npm install -g react \
                   react-dom \
                   webpack \
                   webpack-dev-server \
                   webpack-cli \
                   babel-plugin-transform-class-properties \
                   babel-preset-es2016 \
                   babel-core \
                   babel-loader \
                   babel-preset-env \
                   babel-preset-react \
                   html-webpack-plugin \
                   node-gyp

RUN npm install img-loader \
                url-loader \
                style-loader \
                css-loader \
                mozjpeg \
                imagemin

EXPOSE 3000
