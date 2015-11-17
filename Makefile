all:
	npm install
	gulp

deploy:
	npm install
	gulp
	mv demo/index.html ./
	mv dist/css/reset.css ./
	mv dist/js/*.js ./
	rm -rf demo src
	git add .
	git commit -m 'deploy'
	git branch -D gh-pages
	git push origin :gh-pages
	git checkout -b gh-pages
	git push --tags
