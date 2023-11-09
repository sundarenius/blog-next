FROM node:18.17-slim

RUN apt-get update && apt-get install -y curl gnupg

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor -o /usr/share/keyrings/yarn-archive-keyring.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/yarn-archive-keyring.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

# OWN CONTENT
RUN useradd -m myuser
WORKDIR /app
COPY package.json .
COPY . .

ARG NEXT_PUBLIC_CUSTOMER_ID
ARG NEXT_PUBLIC_TITLE
ARG NEXT_PUBLIC_DESCRIPTION
ARG NEXT_PUBLIC_LOGO
ARG NEXT_PUBLIC_MAIN_DOMAIN

RUN echo "NEXT_PUBLIC_CUSTOMER_ID:"
RUN echo $NEXT_PUBLIC_CUSTOMER_ID

RUN yarn install --network-timeout 1000000

RUN yarn build

CMD ["yarn", "start"]
