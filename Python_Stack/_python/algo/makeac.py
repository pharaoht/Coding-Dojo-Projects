def acronymgenerator(stringInput):
    newstring = []
    for x in range(0, len(stringInput), 1):
        if x == 0:
            newstring.append(stringInput[x])
        elif stringInput[x] == " ":
            newstring.append(stringInput[x + 1])
    print(newstring)


acronymgenerator("National Basketball Association")


def spilt(strs):
    newstring = []
    res = strs.split()
    for x in range(0, len(res), 1):
        newstring.append(res[x][0])
    print(newstring)


spilt("nation baske association")

txt = "welcome to the jungle"
x = txt.split()

print(x)
# function strong(str){
#     var newstring = []
#     var res = str.split(" ")
#     for(var i=0
#         i < res.length
#         i++){
#         console.log(res[i][0])
#     }

# }
# strong("National Basketball Association")


# function strong(str){
#     var newstring = []
#     for(var i=0
#         i < str.length
#         i++){
#         if(i == 0){
#             newstring.push(str[i])
#         }
#         if(str[i] == " "){
#             newstring.push(str[i + 1])
#         }
#     }
#     console.log(newstring)
# }
# strong("National Basketball Association")

thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
print(thisdict["brand"])
