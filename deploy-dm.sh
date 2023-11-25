#!/bin/bash

cat <<EOF > ./.env.production
NEXT_PUBLIC_LOGO="DisabilityMatch.org"
NEXT_PUBLIC_CUSTOMER_ID="cbf3765d-c12c-49ef-a2d8-3b5ac0f0ee1d_TID_-39"
NEXT_PUBLIC_MAIN_DOMAIN="https://www.disabilitymatch.org"
NEXT_PUBLIC_TITLE="DisabilityMatch.org | Blog and Articles"
NEXT_PUBLIC_DESCRIPTION="Interesting articles and information about dating topics"
MY_API_POST_KEY="asdasdmplgnng.fdkfnd97567299--oknkeh"
EOF

echo "yarn build" &&
yarn build &&
echo "Push to dm-blog-baas" &&
echo "heroku container:push web -a dm-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN=https://www.disabilitymatch.org, NEXT_PUBLIC_CUSTOMER_ID=cbf3765d-c12c-49ef-a2d8-3b5ac0f0ee1d_TID_-39" &&
heroku container:push web -a dm-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN="https://www.disabilitymatch.org",NEXT_PUBLIC_CUSTOMER_ID="cbf3765d-c12c-49ef-a2d8-3b5ac0f0ee1d_TID_-39" &&
echo "container:release web -a dm-blog-baas:" &&
heroku container:release web -a dm-blog-baas

echo "Deployed!"