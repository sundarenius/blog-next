#!/bin/bash

cat <<EOF > ./.env.production
NEXT_PUBLIC_LOGO="QueenOfAfrica.org"
NEXT_PUBLIC_CUSTOMER_ID="45515dc1-23d8-45d8-9ed7-7d848855eaad_TID_-38"
NEXT_PUBLIC_MAIN_DOMAIN="https://www.queenofafrica.org"
NEXT_PUBLIC_TITLE="QueenOfAfrica.org | Blog and Articles"
NEXT_PUBLIC_DESCRIPTION="Interesting articles and information about dating topics"
MY_API_POST_KEY="asdasdmplgnng.fdkfnd97567299--oknkeh"
EOF

echo "yarn build" &&
yarn build &&
echo "Push to qa-blog-baas" &&
echo "heroku container:push web -a qa-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN=https://www.queenofafrica.org, NEXT_PUBLIC_CUSTOMER_ID=45515dc1-23d8-45d8-9ed7-7d848855eaad_TID_-38" &&
heroku container:push web -a qa-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN="https://www.queenofafrica.org",NEXT_PUBLIC_CUSTOMER_ID="45515dc1-23d8-45d8-9ed7-7d848855eaad_TID_-38" &&
echo "container:release web -a qa-blog-baas:" &&
heroku container:release web -a qa-blog-baas

echo "Deployed!"