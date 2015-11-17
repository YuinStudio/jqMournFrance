all:
	npm install
	gulp

deploy:
	npm install
	gulp
	mv demo/index.html ./
	mv css/reset.css ./
	mv js/*.js ./
	rm -rf demo src
	git branch -D gh-pages
	git push origin :gh-pages
	git checkout -b gh-pages
	git push --tags