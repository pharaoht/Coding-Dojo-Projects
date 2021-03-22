/* 
-Database = Database (db)

-Tables in SQL = Collections mongodb 

-Row in Sql = Document in mongodb

Methods

show all databases: show dbs

show current database: db

change to another database use DB_NAME

Delete database: use name db.dropDatabase()

db.name.drop()

db.createcollection("ninja")

CREATE - Inserting a document into a collection:
// Pattern:
db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})  
 
// Example:

READ - Retrieving documents from a collection:
To retrieve documents from your collections, you will use the following method.

// Pattern: 
db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT})

MongoDB by default returns as many results as it can. If you want to just find all of the given collection,
you can pass an empty object to the .find method; or you can just not pass anything at all.

// Examples:
db.ninjas.find({})    
db.ninjas.find()

If you want to make the results look nicer and be easier to read:

// Example:
db.ninjas.find().pretty()

DESTROY - Removing documents from a collection:
To remove an item from the database, we would run the following syntax:

// Pattern:
db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)
// Example
db.ninjas.remove({belt: "yellow"})
db.ninjas.remove({belt: "yellow"}, false) // this query would have the same effect as the one above.

UPDATE - Updating documents in a collection:
The update syntax can be tricky if you do not see it done correctly first. Let's say I wanted to add a location to the ninja whose name is Trey. I want to make his location equal to Mountain View. I would try to the following:

// Example:
db.ninjas.update({name: "Trey"}, {location: "Mountain View"})
Then, to check to make sure if my update query was right, I'd run:

// Example:
db.ninjas.find({location: "Mountain View"}).pretty() 

If I wanted to get all the Dojos whose number of students is greater than 15, I would run the following:

db.dojos.find({number_of_students: {$gt: 15}})


name	description
$gt (greater than)	Use to query selectively on numerical-valued fields
$gte (greater than or equal to)	Use to query selectively on numerical-valued fields
$lt (less than)	Use to query selectively on numerical-valued fields
$lte (less than or equal to)	Use to query selectively on numerical-valued fields
$in (in array)	Use to find documents who have a particular value within an array.


ARRAY OPERATORS
And we wanted to add an element in the interests array. The operator we would use is called the $push operator,
 which should sound very familiar. To add the interest 'snowboarding' to the student document, we would run...

db.students.update({_id: ObjectId("5463d871a6a96d5ed6252f4d")}, {$push: {interests: 'snowboarding'}})
The $push operator is a key of the update document, and its value is another document with a key of interests, and a value of 'snowboarding'. 
 Spend some time going over this if you don't understand.  Here are a couple common array update operators to get familiar with:

Name	Description
$push	Push to an array contained within a document.
$pop	Removes either the first or last element from an array. EX:
db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})
  
Use 1 for the last item in the array, -1 for the first item.

$addToSet	It functions just like $push.  However, $addToSet only adds to the specified array if the value doesn't already exist (thereby preventing duplicate entries).
$pull	Removes a specified value from an array, unlike $pop, which removes by location. Ex:
db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}})
  
This will remove all instances of VALUE from the documents with the array specified by the array_key that match

*/