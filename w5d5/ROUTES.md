# URLS

/urls
/urls/new
/urls/:url_id
/urls/:url_id/edit
/urls/:url_id/delete

/api/urls/:url_id

# USERS

# Spearheading

- Considering that you have Mockups & ERD
- MOCKUP -> HTML (STATIC VALUES) (EJS)
- EJS -> ROUTE (STATIC)
- UPDATE ROUTE WITH DATA STRUCTURE
- UPDATE EJS WITH ROUTE'S DATA
- DBHELPER TO FEED THE ROUTE

```jsx
<header>
  <h1>HELLO NAME OF USER</h1>
</header>
```

```jsx
app.get("/", (req, res) => {
  res.render("index");
});
```

```jsx
app.get("/", (req, res) => {
  const templateVars = { username: "Petit poulet" };
  res.render("index", templateVars);
});
```

```jsx
<header>
  <h1>HELLO <%= username %></h1>
</header>
```

```jsx
const fetchUserById = (id) => {
  return db
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((dbRes) => dbRes.rows[0]);
};
```

```jsx
app.get("/", (req, res) => {
  fetchUserById(req.cookies.id).then((user) => {
    const templateVars = { username: user.username };
    res.render("index", templateVars);
  });
});
```
