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

# Set environment variables from build arguments
ARG NEXT_PUBLIC_CUSTOMER_ID
ARG NEXT_PUBLIC_MAIN_DOMAIN
ENV NEXT_PUBLIC_CUSTOMER_ID=$NEXT_PUBLIC_CUSTOMER_ID
ENV NEXT_PUBLIC_MAIN_DOMAIN=$NEXT_PUBLIC_MAIN_DOMAIN

# Verify the environment variables are set correctly
RUN echo "NEXT_PUBLIC_CUSTOMER_ID:" && echo $NEXT_PUBLIC_CUSTOMER_ID
RUN echo "NEXT_PUBLIC_MAIN_DOMAIN:" && echo $NEXT_PUBLIC_MAIN_DOMAIN

RUN yarn install --network-timeout 1000000

CMD ["yarn", "start"]
