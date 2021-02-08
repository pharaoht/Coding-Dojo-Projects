def  # (functions)
if, elif, else  # (conditional statements)
for, while  # (loops)
Class  # (classes)

# Unlike what you may have seen in other languages, like JavaScript, Python has no brackets or braces. Instead,
# the most important aspect of Python is indentation to indicate which lines belong to which code blocks.
  x = 10
   if x > 50:
    	print("bigger than 50")
    else:
    	print("smaller than 50")

# PASS
# If we start a code block, there must be at least one line of indented code immediately following.
# If we try to run a file with a hanging code block, we'll get a syntax error. 
# Luckily, Python has provided us with the pass statement for situations where we know we need the block statement, 
# but we aren't sure what to put in it yet.
class EmptyClass:
    pass

for val in my_string:
    pass

# PASS The pass statement is a null operation; nothing happens when it executes. 
# The pass is almost never seen in final production, but can be useful in places where your code has not been completed yet.
