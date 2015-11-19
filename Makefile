export  VERSION  =  v0.0.1

all:
	npm install
	gulp

sample:
	npm install
	gulp
	mv demo/index.html ./
	mv dist/css/reset.css ./
	mv dist/js/*.js ./
	rm -rf demo src

deploy:
	npm install
	gulp
	mv demo/index.html ./
	mv dist/css/reset.css ./
	mv dist/js/*.js ./
	rm -rf demo src
	git checkout -b $(VERSION)
	git add .
	git commit -m 'deploy'
	git tag $(VERSION)
	git push --tags
	git branch -D gh-pages
	git push origin :gh-pages
	git checkout -b gh-pages
	git push
	git checkout master
