var counter = 0;
function changeBG(){
    element = document.querySelector('body')
    var imgs = [
        "url(https://i.imgur.com/7dDDYx4.png)",
        "url(https://i.imgur.com/nC8gL4d.png)",
        "url(https://i.imgur.com/x554BKn.png)",
        "url(https://i.imgur.com/V8eu4Sl.png)",
        "url(https://i.imgur.com/EnWWWF3.png)"
    ]

    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}

  setInterval(changeBG, 4000);