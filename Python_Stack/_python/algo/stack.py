class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None


class Stack:
    def __init__(self):
        self.top = None

    def push(self, valueInput):
        pass

    def pop(self):
        pass

    def contains(self, valueToFind):
        pass

    def size(self):
        pass

    def retrieveTopNode(self):
        pass


# “ SLStack: Push
# Create push(val) that adds val to our stack.
#  SLStack: Top
# Return (not remove) the stack’s top value.
#  SLStack: Is Empty
# Return whether the stack is empty.”

# “ SLStack: Pop
# Create pop() to remove and return the top val.
#  SLStack: Contains
# Return whether given val is within the stack.
#  SLStack: Size
# Return the number of stacked values.”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.


tennisballContainer1 = Stack()
tennisballContainer1.push(5).push(8).pop()
