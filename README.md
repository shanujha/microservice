## Get Started

Change the `PORT` and `DATABASE` values in the `.env`

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
    
### Script
    
    # microservice.bat

    git clone https://github.com/shanujha/microservice.git .
    rmdir .git /S /Q
    git init
    git add .
    git commit -m "initial commit"
    @echo Next steps
    @echo Change the package name in package.json
    @echo Change the PORT and DATABASE in .env
    @echo Add origin to this repository
    @echo git remote add origin your_repo_url
    @echo I will now install npm packages
    pause
    npm i



