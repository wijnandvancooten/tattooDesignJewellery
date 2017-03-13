# Tattoo Design Jewellery (Group project)

## What to do

1. html -> pug //done
2. add node (init) //done
3. add .git //done
4. set node-modules in .git //done
5. install:
  - express //done
  - bodyparser //done
  - postgres //done
  - pug //done
  - sequelize
  - sequelize-sessions
  - passport for authentication (log-in)// Wijnand
  - payment system (STRIPE) // Jeroen
  - highside get text message when ordering something // Svenja
  - google analytics //
  - sendgrid (for emails) // Svenja

6. create database "webshop" // Jeroen
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

7. setupp sequelize // Jeroen

8. setupp sessions // Wijnand

9.
