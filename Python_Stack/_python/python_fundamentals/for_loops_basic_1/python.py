# Basic
for x in range(0, 151, 1):
    print(x)

# Multiples of 5
for x in range(0, 1001, 5):
    print(x)

# Counting, the Dojo Way
for x in range(1, 101, 1):
    if x % 10 == 0:
        print("Conding Dojo", x)
    elif(x % 5 == 0):
        print("Coding", x)


# Who. That suckers huge
arr = []
for x in range(0, 500001, 1):

    if x % 2 > 0:
        arr.append(x)
print(sum(arr))

# Countdown by 4
for x in range(2018, 0, -4):
    print(x)


# Flexible Counter
lowNum = 0
highNum = 9
mult = 3

for x in range(lowNum, highNum + 1, 1):
    if x % mult == 0:
        print(x)
