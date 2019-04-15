[![Build Status](https://travis-ci.org/nshutijonathan/Banka.svg?branch=develop)](https://travis-ci.org/nshutijonathan/Banka)
[![Coverage Status](https://coveralls.io/repos/github/nshutijonathan/Banka/badge.svg?branch=develop)](https://coveralls.io/github/nshutijonathan/Banka?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/f9967a634125a11b3a3a/maintainability)](https://codeclimate.com/github/nshutijonathan/Banka/maintainability)
# Banka
Banka is core banking application that powers banking operations.It is meant to support a single bank.

## UI Technologies
* HTML.
* CSS.
* Javascript.
### UI link
 [BANKA](https://nshutijonathan.github.io/Banka/ui/html/)

 ### Heroku link Example

[BANKA link](https://bankaweb.herokuapp.com/)

## API ENDPOINTS
| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| / | GET | The index page |
| /api/v1/auth/signup| POST | Sign up |
| /api/v1/auth/signin| POST | Sign in |
| /api/v1/users| GET | Get all users |
| /api/v1/users/:id| GET | Get specific user |
| /api/v1/users/:id| DELETE| Delete specific user |
| /api/v1/users/:id| PUT | Update a specific user |
| /api/v1/accounts| POST | Create a user bank account |
| /api/v1/accounts| GET| Get all  users bank accounts |
| /api/v1/accounts/:accountNumber| PUT| Update specific user bank account |
| /api/v1/accounts/:accountNumber| DELETE| Delete specific user bank account |
| /api/v1/transactions/debit/:accountNumber| POST| Debit specific user bank account |
| /api/v1/transactions/credit/:accountNumber| POST| Credit specific user bank account |
| /api/v1/transactions| GET| Get all users bank account transactions |
## Contributor
Jonathan Nshuti <nshutijonathan130@gmail.com>