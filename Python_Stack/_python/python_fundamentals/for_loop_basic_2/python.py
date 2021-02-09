# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now[-1, "big", "big", -5]
def biggie(arr):
    for x in range(0, len(arr), 1):
        if(arr[x] > 0):
            arr[x] = "Big"
    print(arr)


biggie([-1, -3, 4, 6, -76, 54, 80])

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1, 1, 1, 1]) changes the original list to[-1, 1, 1, 3] and returns it
# Example: count_positives([1, 6, -4, -2, -7, -2]) changes the list to[1, 6, -4, -2, -7, 2] and returns it


def bePositive(arr):
    count = 0
    end = len(arr) - 1

    for x in range(0, len(arr), 1):
        if arr[x] >= 0:
            count = count + 1

    arr[end] = count
    print(arr[end])
    print(arr)


bePositive([1, -1, -2, -2, 8, 9])
# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1, 2, 3, 4]) should return 10
# Example: sum_total([6, 3, -2]) should return 7


def sumOf(arr):
    b = sum(arr)
    print(b)
    return b


sumOf([1, 2, 3, 4, 5, 6])
# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1, 2, 3, 4]) should return 2.5


def Average(arr):
    b = sum(arr) / len(arr)
    print(b)
    return b


Average([1, 2, 3, 4])
# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37, 2, 1, -9]) should return 4
# Example: length([]) should return 0


def length(arr):
    b = len(arr)
    print(b)
    return b


length([2, 3, 4, 5, 6, 7, 8, 9])

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37, 2, 1, -9]) should return -9
# Example: minimum([]) should return False


def minimum(arr):
    minimum = 0
    if(len(arr) == 0):
        return 0
    for x in range(0, len(arr), 1):
        if(x == 0):
            minimum = arr[x]
        elif(arr[x] < minimum):
            minimum = arr[x]
    print(minimum)
    return minimum


minimum([6, 2, 3, 4, 4, 5, -11, 7])

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37, 2, 1, -9]) should return 37
# Example: maximum([]) should return False


def maximum(arr):
    maximum = 0
    if(len(arr) == 0):
        return 0
    for x in range(0, len(arr), 1):
        if(x == 0):
            maximum = arr[x]
        elif(arr[x] > maximum):
            maximum = arr[x]
    print(maximum)
    return maximum


maximum([9, 32, 43, 9, 43, 92, 12, 3, 12, 4, 5, 6, 7, 932, 32, 1])
# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37, 2, 1, -9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4}


def utlima(arr):
    empty_dict = {}
    new_math = {'sum': 0, 'average': 0,
                'minimum': 0, 'maximum': 0, 'length': 0}
    maximum = 0
    minimum = 0
    mysum = 0
    average = 0
    length = 0

    mysum = sum(arr)

    for x in range(0, len(arr), 1):
        if(x == 0):
            minimum = arr[x]
        elif(arr[x] < minimum):
            minimum = arr[x]

    for x in range(0, len(arr), 1):
        if(x == 0):
            maximum = arr[x]
        elif(arr[x] > maximum):
            maximum = arr[x]

    average = sum(arr) / len(arr)
    length = len(arr)

    new_math['sum'] = mysum
    new_math['average'] = average
    new_math['minimum'] = minimum
    new_math['maximum'] = maximum
    new_math['length'] = length

    print(new_math)
    return new_math


utlima([1, 2, 3, 4, 5, 6, 7, 8, 9])
# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37, 2, 1, -9]) should return [-9, 1, 2, 37]


def reverse(arr):
    newarr = []
    for x in range(len(arr) - 1, 0, -1):
        newarr.append(arr[x])
        print(newarr)


reverse([1, 2, 3, 4, 5, 6, 7, 8, 9])
