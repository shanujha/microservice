## Get Started

Change the `PORT` and `DATABASE` values in the `.env`

### Docker supports

This template has docker support built in. To use, modify the `DATABASE` and `PORT` parameters in the `.env` and `Dockerfile`. Then edit the default username and service name in `docker.sh`.

Then run 

    $ docker.sh

### Setup ESlint (Optional)

To setup `eslint` on your machine
    
    npm i -g eslint

Then setup `eslint` in project

    ESLint --init 

### ESLint Setup guide


    Q. How would you like to use ESLint?
    A. find problems, errors

    Q. What type of modules does your project use?
    A. CommonJS

    Q. Which framework does your project use?
    A. None of these

    Q. Does your project use typescript?
    A. No

    Q. Where does your code run?
    A. Node

    Q. What format do you want the configuration file in?
    A. JSON

    Q. Would you like to install dependencies now?
    A. Yes
