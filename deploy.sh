set -e

# build
#git subtree add --prefix dist git@github.com:Jobao/turnero-frontend.git gh-pages
npm run build

#git subtree push --prefix dist origin gh-pages
# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Jobao/turnero-frontend.git main:gh-pages
#cd -
