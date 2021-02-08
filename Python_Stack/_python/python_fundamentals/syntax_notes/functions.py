# A function is a named block of code that we can execute to perform a specific task. More simply, a function is
# a list of instructions that we can run at any time and as many times as we would like.
#  If we find something that we seem to be using over and over again, it might be best to have a way to
#  streamline the process. A function:

# has a name
# takes in parameters(parenthesis required, parameters optional)
# perform a series of instructions
# return something afterwards(will return None if there is no explicit return statement)

def add(a, b):  # function name: 'add', parameters: a and b
    x = a + b  # process
    return x  # return value: x


new_val = add(3, 5)    # calling the add function, with arguments 3 and 5
# the result of the add function gets sent back to and saved into new_val, so we will see 8
print(new_val)

#Parameters and Arguments
# We define the input of functions using parameters. Functions can have as many parameters as we need,
#  including 0. Here we've defined the say_hi function with one parameter called name:


def say_hi(name):
    print("Hi, " + name)


# invoking the function 3 times, passing in one argument each time
say_hi('Michael')
say_hi('Anna')
say_hi('Eli')


def say_hi(name):
    return "Hi " + name


# the returned value from say_hi function gets assigned to the 'greeting' variable
greeting = say_hi("Michael")
print(greeting)  # this will output 'Hi Michael'
