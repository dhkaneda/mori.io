## Mor.io
### Memento mori. The time is now.

> Mor.io is a radicalized to do app in which you can place your source of entertainment, your money, and even your digital life on collateral! You can get more done with your life by allowing what you hold dear to be help hostage from you until your achieve your goals. Make a quick contract with **Death** as he will be your life coach! 

<!-- ## Table of Contents

1. [Stack](#stack)
1. [Features](#features)
1. [API](#API) -->


## Stack:
- Frontend: React with Hooks, built with Webpack and Babel
- Backend: Node.js | Express

<!-- ## Features:
- Life expectancy calculator, based on average
  - Tells user roughly how many seconds, minutes, hours, days, or years they have left
- Open a contract
  - Describe the task
  - Pick timeframe
  - Pick collateral
    - Vice
      - Mock a digital service lockout
        - Netflix
        - Hulu
        - Facebook
        - Amazon 
    - Fortune
      - terms of forfeiture
    - Life (Digital)
      - Mock a digital execution
        - Facebook account deletion
        - Instagram account deletion
    - Life (Actual) // Figuratively of course
      - displays user's currrent location
- Display deadline, counter.

- Display dark/witty motivational quotes
  - First time login quote "Remember that you will die. The time is now." -->


<!-- ## API

### >> **CREATE new user**
````
POST /api/user
````
#### Parameters
The request body `data` includes up to **3** properties pertaining to details for user creation
| Name | Type | Description |
| ---- | ---- | ----------- |
| data | object | **Required** The data of the new record. Should include the properties described below.  |

#### Data Properties
All properties are **Required** except ...

| Name | Type | Description |
| --- | --- | --- |
| `username` | `string` | username for display purposes|
| `email` | `string` | unique email used for log in |
| `password` | `string` | 8 character minimum used for authentication |
| `age` | `number` | user's age |
| `sex` | `string` | user's sex |
| `location` | `string` | user's country of residence |

#### Example Input Data
````
{
  username: 'Grim', 
  email: 'r34per@gmail.com',
  password: 'ineedanewjob!',
  age: 25,
  sex: 'Male'
  location: 'United States'
}
````
#### Responses
```
Status: 201 Created
Location: /api/users/:userid
```

```
Status: 403 Forbidden
Error: User already exists
Location: /api/users/:userid
```

```
Status: 401 Forbidden
Error: Unauthorized request
```

### >> **CREATE contract**
````
POST /api/contracts/
````
#### Parameters
The request body `data` includes up to **3** properties pertaining to details for user creation
| Name | Type | Description |
| ---- | ---- | ----------- |
| data | object | **Required** The data of the new record. Should include the properties described below.  |

#### Data Properties
All properties are **Required** except ...

| Name | Type | Description |
| --- | --- | --- |
| `userid` | `integer` | user id to assign contract to |
| `description` | `string` | goal set by user |
| `deadline` | `date` | date set by user for contract deadline |
| `createdAt` | `date` | contract creation time |
| `collateral` | `string` |  reflects collateral placed by user |
| `service` | `string` | existing service for mock integration |
| `amount` | `integer` | dollar amount if collateral is monetary |


#### Example Input Data
````
{
  userid: 00001, 
  description: 'Start a metal band',
  deadline: 'Mon Apr 27 2020 21:36:39 GMT-0700 (Pacific Daylight Time)'
  createdAt: 'Fri Apr 17 2020 19:36:39 GMT-0700 (Pacific Daylight Time)',
  collateral: 'monetary',
  service: 'paypal',
  amount: '2400',
}
````
#### Responses
```
Status: 201 Created
Location: /api/contract/:contractid
```
```
Status: 401 Forbidden
Error: Unauthorized request
```

### >> **GET all contracts from user**
```
GET /api/users/:userid
```



#### Parameters
Parameters used for this API call will be parsed from the URL.

#### Response
```
Status: 200 OK
Data: 
{
  userid: 00001,
  username: 'Grim',
  deathday: 'Fri Apr 17 2080 19:36:39 GMT-0700 (Pacific Daylight Time)',
  contracts: [
    {
      isOpen: true,
      success: null,
      description: 'Start a metal band',
      deadline: 'Mon Apr 27 2020 21:36:39 GMT-0700 (Pacific Daylight Time)'
      createdAt: 'Fri Apr 17 2020 19:36:39 GMT-0700 (Pacific Daylight Time)',
      collateral: 'monetary',
      service: 'paypal',
      amount: '2400',
    },
    {
      isOpen: false,
      success: false,
      description: 'Buy daughter a cat',
      deadline: 'Fri Apr 17 2020 21:36:39 GMT-0700 (Pacific Daylight Time)'
      createdAt: 'Wed Apr 15 2020 19:36:39 GMT-0700 (Pacific Daylight Time)',
      collateral: 'digital',
      service: 'facebook',
      amount: 'null',
    },
  ]
}
```
## Stretch
### Update contract details
### Delete contract
### Update user details
### Delete user -->