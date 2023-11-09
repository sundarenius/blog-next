rm -rf /.next &&

export NEXT_PUBLIC_CUSTOMER_ID="276a85c3-06b4-45e4-a409-ee8640cf48ad_TID_-18" &&
export NEXT_PUBLIC_MAIN_DOMAIN="https://www.philippinebeauty.com" &&
echo "yarn build" &&
yarn build &&
echo "Push to pb-blog-baas" &&
echo "heroku container:push web -a pb-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN=https://www.philippinebeauty.com, NEXT_PUBLIC_CUSTOMER_ID=276a85c3-06b4-45e4-a409-ee8640cf48ad_TID_-18" &&
heroku container:push web -a pb-blog-baas --arg NEXT_PUBLIC_MAIN_DOMAIN="https://www.philippinebeauty.com",NEXT_PUBLIC_CUSTOMER_ID="276a85c3-06b4-45e4-a409-ee8640cf48ad_TID_-18" &&
echo "container:release web -a pb-blog-baas:" &&
heroku container:release web -a pb-blog-baas

echo "Deployed!"