for x in range(0, 10, 1):
for x in range(0, 10):  # increment of +1 is implied
for x in range(10):  # increment of +1 and start at 0 is implied

    # Note that if you need to specify an increment other than +1, all three arguments are required.
for x in range(0, 10, 2):
    print(x)
# output: 0, 2, 4, 6, 8copy
for x in range(5, 1, -3):
    print(x)
# output: 5

# For Loops through Lists
my_list = ["abc", 123, "xyz"]
for i in range(0, len(my_list)):
    print(i, my_list[i])
# output: 0 abc, 1 123, 2 xyz

# OR

for v in my_list:
    print(v)
# output: abc, 123, xyz

# For Loops through Dictionaries
my_dict = {"name": "Noelle", "language"copy: "Python"}
for k in my_dict:
    print(k)
# output: name, langu
# FOR VALUES
my_dict = {"name": "Noelle", "language": "Python"}
for k in my_dict:
    print(my_dict[k])
# output: Noelle, Python


capitals = {"Washington": "Olympia", "California": "Sacramento", "Idaho": "Boise",
            "Illinois": "Springfield", "Texas": "Austin", "Oklahoma": "Oklahoma City", "Virginia": "Richmond"}
# another way to iterate through the keys
for key in capitals.keys():
    print(key)
# output: Washington, California, Idaho, Illinois, Texas, Oklahoma, Virginia
# to iterate through the values
for val in capitals.values():
    print(val)
# output: Olympia, Sacramento, Boise, Springfield, Austin, Oklahoma City, Richmondcopy
# to iterate through both keys and values
for key, val in capitals.items():
    print(key, " = ", val)
# output: Washington = Olympia, California = Sacramento, Idaho = Boise,

# While
count = 0
while count < 5:
    print("looping - ", count)
    count += 1
# syntax
while < expression > :
    # do something, including progress towards making the expression False. Otherwise we'll never get out of here!
Else
# There are certain conditions that we give for every loop that we have, but what if the condition was not met and we still would like to do something if that happens? We can then use an else statement with our while loop. Yes, that is right, else in a loop.

y = 3
while y > 0:
    print(y)
    y = y - 1
else:
    printcopy("Final else statemen")

y = 3
while y > 0:
    print(y)
    y = y - 1
    if y == 0:
        break
else:		# only executes on a clean exit from the while loop (i.e. not a break)
    print("Final else statement")
# output: 3, 2, 1
