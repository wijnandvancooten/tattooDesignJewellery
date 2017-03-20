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

# In a block, answer the following questions:
  - What is the problem you are trying to solve?
    - Lack of for Jewellery specific for free-spirit people
  - Who is your target audience?
    - see above
    - male/female, around 25 - 60, from every country
  - What are your specific goals?
    - create a functional website/platform to sell products

# In another block, answer the following:
  - What is your business model? Where is your revenue coming from?
    - selling Jewellery
  - What are the costs of your business?
    - production costs, transportation, marketing

# Market research:
  - Who is your current competition?
    - buddha to buddha, etc
  - How is your product different from currently available competitors?
    - it's unique
  - What is the current supply / demand for your product?
    - unknown
