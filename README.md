# Incorrect Use of $inc Operator in MongoDB
This example demonstrates an incorrect use of the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numerical field by a specified value.  However, attempting to increment a field using a string value results in an error.

## Bug
The original code attempts to increment the `counter` field by the string value '1'.  This is incorrect and throws a MongoDB error.

## Solution
The solution shows the correct way to use the `$inc` operator with a numerical value.  Using the integer `1` allows the `$inc` operation to execute successfully. 