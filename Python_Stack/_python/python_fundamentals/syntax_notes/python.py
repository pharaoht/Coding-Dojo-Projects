# Strings are any sequence of characters (letters, numerals, ~($/}\#, etc.) enclosed in single or double quotes. We can display a string like this:
print("this is a sample string")

# concatenating strings and variables with print
name = "Zen"
print("My name is", name)

# The second is by concatenating the contents into a new string, with the help of +.
name = "Zen"
print("My name is" + name)

# String Interpolation
# We can also inject variables into our strings, which is known as string interpolation.

# F-Strings (Literal String Interpolation)
first_name = "Zen"
last_name = "Coder"
age = 27
print(f"My name is {first_name} {last_name} and I am {age} years old.")
# OR
# string.format()
first_name = "Zen"
last_name = "Coder"
age = 27
print("My name is {} {} and I am {} years old.".format(first_name, last_name, age))

# Built in string Methods
x = "hello world"
print(x.title())

# string.upper(): returns a copy of the string with all the characters in uppercase.
# string.lower(): returns a copy of the string with all the characters in lowercase.
# string.count(substring): returns number of occurrences of substring in string.
# string.split(char): returns a list of values where string is split at the given character. Without a parameter the default split is at every space.
# string.find(substring): returns the index of the start of the first occurrence of substring within string.
# string.isalnum(): returns boolean depending on whether the string's length is > 0 and all characters are alphanumeric(letters and numbers only). Strings that include spaces and punctuation will return False for this method. Similar methods include .isalpha(), .isdigit(), .islower(), .isupper(), and so on. All return booleans.
# string.join(list): returns a string that is all strings within our set ( in this case a list) concatenated.
# string.endswith(substring): returns a boolean based upon whether the last characters of string match substring.
