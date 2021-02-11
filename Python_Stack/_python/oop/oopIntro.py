# Classes
# An instance is simply an object that follows the pattern defined by its class.

# A class is like a blueprint that ensures the consistent creation of instances.


class User:
    pass       # we'll fill this in shortly


# how to create instance of a class
michael = User()
anna = User()

# Attributes: Characteristics shared by all instances of the class type.
# Methods: Actions that an object can perform. A user, for example, should be able to make a deposit or a withdrawal, or maybe send money to another user.
# Attributes are defined in a method called __init__, which is called when a new object is instantiated.


class User:
    def __init__(self):
        self.name = "Michael"
        self.email = "michael@codingdojo.com"
        self.account_balance = 0

# The first parameter of every method within a class will be self, and the class's attribute names are also indicated by self..
# just follow the pattern: self.<<attribute_name_of_your_choosing>>


# Then to instantiate a couple of new users:
guido = User()
monty = User()

# If we want to access our instance's attributes, we can refer to them from our instances by name:

print(guido.name)  # output: Michael
print(monty.name)  # output: Michael

# We can also set the values for our instance's attributes:

guido.name = "Guido"
monty.name = "Monty"


class User:
    def __init__(self, name, email_address):  # now our method has 2 parameters!
        self.name = name			# and we use the values passed in to set the name attribute
        self.email = email_address		# and the email attribute
        # the account balance is set to $0, so no need for a third parameter
        self.account_balance = 0

# Now when we want to create users, we must send in the 2 required arguments:


guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
print(guido.name)  # output: Guido van Rossum
print(monty.name)  # output: Monty Python

guido.make_deposit(100)

# To be able to call on this method, it needs to exist. Let's make it!


class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method

    def make_deposit(self, amount):  # takes an argument that is the amount of the deposit
        # the specific user's account increases by the amount of the value received
        self.account_balance += amount

# Don't forget that the first parameter of every method within a class should be self


guido.make_deposit(100).make_deposit(200).make_deposit(
    300).make_withdrawal(50).display_user_balance()
# This is called chaining. In order for this to work, each method must return self.
#  By returning self, if we recall how functions work, each method call will now be equal to the instance that called it.
