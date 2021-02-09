import random


def randInt(min=0, max=0; ):
    if(min == 0 and max == 0):
        num = round(random.random() * 100)
        return num
    if(max is not 0):
        num = round(random.random() * max)
        return num
    if(min is not 0):
        num = round(random.random() * min)
        return num
    elif:
        num = round(random.random() * min + max)
        return num


randInt()
randInt(max=50)
randInt(min=20)
randInt(min=23, max=100)

# print(randInt()) 		    # should print a random integer between 0 to 100
# print(randInt(max=50)) 	    # should print a random integer between 0 to 50
# print(randInt(min=50)) 	    # should print a random integer between 50 to 100
# print(randInt(min=50, max=500))    # should print a random integer between 50 and 500


# If no arguments are provided, the function should return a random integer between 0 and 100.
# If only a max number is provided, the function should return a random integer between 0 and the max number.
# If only a min number is provided, the function should return a random integer between the min number and 100
# If both a min and max number are provided, the function should return a random integer between those 2 values.
