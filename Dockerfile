FROM node:9.11.1
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
                   url-loader \
                   style-loader

EXPOSE 3000
