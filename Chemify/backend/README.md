# TODO App API for Chemify Frontend Applicants

This is a simple REST API for a TODO list. This can be used when creating the Frontend for the Chemify Frontend Assessment.

## How To Use

This project uses Yarn so you will have to have Yarn installed on your system.

Install the packages:

```
yarn
```

This backend is using prisma so you have to Generate the prisma client:

```
npx prisma generate
```

You can start this API by running:

```
yarn dev
```

This should make the API available on http://localhost:8080/todos This is a CRUD application so you can create, read, update and delete Todos. The API is using [Prisma](https://www.prisma.io/) and for a database it is using [Sqlite](https://www.sqlite.org/index.html) in a local database.

## Using the API

### Creating a Todos

**POST** - http://localhost:8080/todos

The body of the request needs just a `title`.

Example:

```
{
  "title": "Clean the car"
}
```

### Getting All Todos

**GET** - http://localhost:8080/todos

### Getting a Specific Todo

**GET** - http://localhost:8080/todos/:id

_id - Automatically generated id of the specific Todo_

### Update a Todo

**PUT** - http://localhost:8080/todos/:id

_id - Automatically generated id of the specific Todo_

Example Body of PUT Request:

```
{
  "title" : "Update here",
  "done" : true
}
```

### Delete a Todo

**DELETE** - http://localhost:8080/todos/:id

_id - Automatically generated id of the specific Todo_
