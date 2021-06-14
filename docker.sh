docker build . -t defaultuser/defaultservice
docker run -p 4001:4001 -d defaultuser/defaultservice