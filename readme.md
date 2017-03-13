# Tattoo Design Jewellery (Group project)

## What to do

1. html -> pug
2. add node (init)
3. add .git
4. set node-modules in .git
5. install:
  - express
  - bodyparser
  - postgres
  - pug
  - sequelize
  - sequelize-sessions
  - passport for authentication
  - payment system (STRIPE)
  - highside get text message when ordering something
  - google analytics
  - sendgrid (for emails)

6. create database "webshop"
  - tables:
    - users
        - firstname, lastname, address, password, email
    - products
        - name, description, price, stock, image(s)
    - orders
        - ordernumber, amount, totalprice
    - comments
        - username, content
    - Associations:
        - users hasMany orders && hasMany comments
        - orders hasMany products && belongs to users
        - products belongs to orders && hasMany comments
        - comments belongs to products
