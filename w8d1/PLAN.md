# React Glossary

# Project Description

Shows a list of statements about multiple things of React, possibility to add new statements and can collapse per subject

# User Stories

- User can see a list of statements about React subjects
- User can add a statement to a specific subject
- User can create a new subject

# Packages

## Frontend

- CRA (Vite)
- Sass
- Axios

## Backend

- Axios ?
- Express

# Data structure

## Statement

```jsx
  const statement = {
    id:1
    subject:"component",
    content:"something"
  }
```

## Statements

```jsx
const listOfStatements = [statement, statement];
```

# Mock Data

```jsx
const initialStatements = [
  {
    id: 1,
    subject: "components",
    content: "Components are the building blocks of react",
  },
  {
    id: 2,
    subject: "components",
    content:
      "Take a functionality of a small piece of your application and encapsulated its own isolated container",
  },
  {
    id: 3,
    subject: "props",
    content:
      "Props are to components what attributes are to an HTML element (the 'src' tag in an <img> is needed to make the image work)",
  },
  {
    id: 4,
    subject: "props",
    content:
      "Props are accessible in an object in the first argument of a functional component",
  },
];
```

```jsx
const subjects = {
  components: ["...", "..."],
  props: ["...", "..."],
};
```

# HTML Structure

- body
  - header
    - h1
  - form
    - input subject
    - input content
    - button
  - section
    - h1 title section
    - article (subject)
      - h1
      - ul
        - li (statement)

# Component Structure

- App
  - Header
  - StatementForm
  - SubjectList
    - SubjectListItem (mapped)
      - StatementList
        - StatementListItem (mapped)

# Steps

- PLANNING
- Build mockups / data structures
- Fight between mockup vs ERD (data structure)
- Static version of Frontend (Spearhead one feature)
- Static version of Backend
- Dynamic version of Frontend (up to network)
- Dynamic version of Backend (up to res.json)
- Connect time!
- Make it fancy time

# APIs
