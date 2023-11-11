#!/bin/bash

cat <<EOF > ./.env.production
NEXT_PUBLIC_LOGO="GlobeRomance"
NEXT_PUBLIC_CUSTOMER_ID="99f21a3d-ed04-429b-ab6d-66cbd17726ee_TID_-38"
NEXT_PUBLIC_MAIN_DOMAIN="https://www.globeromance.com"
NEXT_PUBLIC_TITLE="GlobeRomance | Blog and Articles"
NEXT_PUBLIC_DESCRIPTION="Interesting articles and information about dating topics"
MY_API_POST_KEY="asdasdmplgnng.fdkfnd97567299--oknkeh"
EOF

echo "yarn build" &&
yarn build &&
echo "Push to gr-blog-baas" &&
echo "heroku container:push web -a gr-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN=https://www.globeromance.com, NEXT_PUBLIC_CUSTOMER_ID=99f21a3d-ed04-429b-ab6d-66cbd17726ee_TID_-38" &&
heroku container:push web -a gr-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN="https://www.globeromance.com",NEXT_PUBLIC_CUSTOMER_ID="99f21a3d-ed04-429b-ab6d-66cbd17726ee_TID_-38" &&
echo "container:release web -a gr-blog-baas:" &&
heroku container:release web -a gr-blog-baas

echo "Deployed!"