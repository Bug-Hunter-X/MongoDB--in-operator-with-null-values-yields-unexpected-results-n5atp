```javascript
//Correct usage using $or operator to handle null values
db.collection.find({ $or: [{ field: 1 }, { field: 2 }, { field: null }] });
```