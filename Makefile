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
	git add .
	git commit -m 'deploy'
	git push
	git tag $(VERSION)
	git push --tags
	git checkout gh-pages
	git merge $(VERSION)
	git commit -am 'deploy'
	git push
