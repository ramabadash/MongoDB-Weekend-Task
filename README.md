## Weekend Monge DB exercise:

---

### My branches-

- **my-solution-1.0** Only the "Task" solution
- **my-solution-2.0-Relationships** "Task" solution + "Relationship" solution
- **my-solution-3.0-Bonus** "Task" solution + "Relationship" solution + "Bonus" solution

---

### The locations of my solution -

- **server-** `server.js`
- **All Mongoose Schemas -** `back-end -> models`
- **All the data build to Mongo-** `back-end -> jobs`
- **All functionality-** `back-end -> controller`
- **All routers-** `back-end -> routers`
- **All middlewares-** `back-end -> middlewares`

---

### More specific -

---

### #1 Task:

#### (I took the requirements and created general and non-specific functions that get the value on the "req")

- **Mongoose Schema -** `back-end -> models -> student.js`
- **Insert data into MongoDB-** `back-end -> jobs -> batch-insert-student.js`
- **Functionality from the instructions-** `back-end -> controller -> student.js`
- **Router (just for verifying solutions)-** `back-end -> routers -> student.js`
- **Error handler-** `back-end -> middlewars -> errorHandler.js`

---

### #2 Relationships:

#### (I took the requirements and created general and non-specific functions that get the value on the "req")

#### **Users:**

- **Mongoose Schema -** `back-end -> models -> user.js`
- **Insert data into MongoDB-** `back-end -> jobs -> batch-insert-users.js`
- **Functionality from the instructions-** `back-end -> controller -> users.js`
- **Router (just for verifying solutions)-** `back-end -> routers -> relationships.js`
- **Error handler-** `back-end -> middlewars -> errorHandler.js`

#### **Posts:**

- **Mongoose Schema -** `back-end -> models -> post.js`
- **Insert data into MongoDB-** `back-end -> jobs -> batch-insert-posts.js`
- **Functionality from the instructions-** `back-end -> controller -> posts.js`
- **Router (just for verifying solutions)-** `back-end -> routers -> relationships.js`
- **Error handler-** `back-end -> middlewars -> errorHandler.js`

#### **Comments:**

- **Mongoose Schema -** `back-end -> models -> comment.js`
- **Insert data into MongoDB-** `back-end -> jobs -> batch-insert-comments.js`
- **Functionality from the instructions-** `back-end -> controller -> comments.js`
- **Router (just for verifying solutions)-** `back-end -> routers -> relationships.js`
- **Error handler-** `back-end -> middlewars -> errorHandler.js`

---

### #3 Bonus:

- **Mongoose Schema -** `back-end -> models -> question.js`
- **Insert data into MongoDB-** `back-end -> jobs -> batch-insert-questions.js`
- **Functionality from the instructions-** `back-end -> controller -> questions.js`
- **Router-** `back-end -> routers -> questions.js`
- **Error handler-** `back-end -> middlewars -> errorHandler.js`
- **Validators-** `back-end -> middlewars -> questionValidater.js`

---

### Task Instructions - https://github.com/ramabadash/MongoDB-Weekend-Task/blob/main/README.md
