```javascript
// Correct use of $inc operator
db.collection.updateOne({"_id":ObjectId("6534654654")},{$inc:{counter:1}})
```