echo "Push to jd-blog-baas" &&
echo "heroku container:push web -a jd-blog-baas --arg APP_ENV=production:" &&
heroku container:push web -a jd-blog-baas --arg APP_ENV=production &&
echo "container:release web -a jd-blog-baas:" &&
heroku container:release web -a jd-blog-baas

echo "Deployed!"