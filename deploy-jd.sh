export NEXT_PUBLIC_CUSTOMER_ID="31392486-614f-4a34-bd0f-273305505dc3_TID_-28" &&
export NEXT_PUBLIC_MAIN_DOMAIN="https://www.jwdate.org" &&
echo "yarn build" &&
yarn build &&
echo "Push to jd-blog-baas" &&
echo "heroku container:push web -a jd-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN=https://www.jwdate.org, NEXT_PUBLIC_CUSTOMER_ID=31392486-614f-4a34-bd0f-273305505dc3_TID_-28" &&
heroku container:push web -a jd-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN="https://www.jwdate.org",NEXT_PUBLIC_CUSTOMER_ID="31392486-614f-4a34-bd0f-273305505dc3_TID_-28" &&
echo "container:release web -a jd-blog-baas:" &&
heroku container:release web -a jd-blog-baas

echo "Deployed!"