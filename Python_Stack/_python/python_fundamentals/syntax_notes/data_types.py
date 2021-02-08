# Primitive data types

# Bool lean values
is_hungry = True
has_freckles = False
# has to be uppercase

# Number
age = 35  # storing an int
weight = 160.57  # storing a float
# Integers (whole numbers), floating point numbers (commonly known as decimal numbers), and complex numbers

# Strings
name = "Joe Blue"

# Composite types

# Tuples
# A type of data that is immutable(can't be modified after its creation) and can hold a group of values. Tuples can contain mixed data types.
dog = ('Bruce', 'cocker spaniel', 19, False)
print(dog[0])		# output: Bruce
# ERROR: cannot be modified ('tuple' object does not support item assignment)
dog[1] = 'dachshund'

# Lists - A type of data that is mutable and can hold a group of values. Usually meant to store a collection of related data.
empty_list = []
ninjas = ['Rozen', 'KB', 'Oliver']
print(ninjas[2]) 	# output: Oliver
ninjas[0] = 'Francis'
ninjas.append('Michael')
print(ninjas)  # output: ['Francis', 'KB', 'Oliver', 'Michael']
ninjas.pop()
print(ninjas)  # output: ['Francis', 'KB', 'Oliver']
ninjas.pop(1)
print(ninjas)  # output: ['Francis', 'Oliver']

# Dictionaries - A group of key-value pairs. Dictionary elements are indexed by unique keys which are used to access values
empty_dict = {}
new_person = {'name': 'John', 'age': 38, 'weight': 160.2, 'has_glasses': False}
new_person['name'] = 'Jack'  # updates if the key exists
# adds a key-value pair if the key doesn't exist
new_person['hobbies'] = ['climbing', 'coding']
print(new_person)
# output: {'name': 'Jack', 'age': 38, 'weight': 160.2, 'has_glasses': False, 'hobbies': ['climbing', 'coding']}
w = new_person.pop('weight')  # removes the specified key and returns the value
print(w)		# output: 160.2
print(new_person)
# output: {'name': 'Jack', 'age': 38, 'has_glasses': False, 'hobbies': ['climbing', 'coding']}

# Common Functions
# If we're ever unsure of a value or variable's data type, we can use the type function to find out. For example:
print(type(2.63))		# output: <class 'float'>
print(type(new_person))		# output: <class 'dict'>

# For data types that have a length attribute (eg. lists, dictionaries, tuples, strings), we can use the len function to get the length:
print(len(new_person))		# output: 4 (the number of key-value pairs)
print(len('Coding Dojo'))  # output: 11

# Casting
print("Hello" + 42)			# output: TypeError
print("Hello" + str(42))		# output: Hello 42

total = 35
user_val = "26"
total = total + user_val		# output: TypeError
total = total + int(user_val)		# total will be 61
