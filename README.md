# eCommerce Framework


## Description

Using Node.js, Express.js, MySQL, and Sequalize, create the framework for the backend side an e-commerce business.

A walkthrough/demo of the project can be viewed here:

https://drive.google.com/file/d/1Sjt6mkQlivkAS5-Vt3GypluTjoVUeNpz/view

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Testing](#testing)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command in the console/command line:

```
npm i
```

## Usage

From the root of the project, run:

```
mysql -u root -p
```

and when propted for the password enter: 

```
bulldog
```
which will enter the MySQL interface. To ensure the database exists prior to starting up the project, run:

```
SOURCE db/schema.sql;
```
which will create the database necessary for this project. Type

```
exit
```
to exit the MySQL interface and return the user to the command line. Run the following command to populate the database with seed data:

```
npm run seed
```

Once the database is populated, you are ready to begin. Initiate the application with the following code:

```
node index.js
```

## GitHub Repo

https://github.com/ericwittenstein/eCommerceFramework

## Project Demo

https://drive.google.com/file/d/1Sjt6mkQlivkAS5-Vt3GypluTjoVUeNpz/view

## Contributing

N/A

## Testing

No tests for this project

## Questions and Contact Info

If you have any questions about the repo, please open an issue on GitHub or contact me directly at [eric.wittenstein@gmai.com](mailto:eric.wittenstein@gmail.com).

You can find more of my work at [github.com/ericwittenstein/](https://github.com/ericwittenstein/).

<!-- EHW SIGNET
---------
    |
  -----
    |
---------
 -->

### Eric Wittenstein

