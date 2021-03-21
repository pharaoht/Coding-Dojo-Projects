var counter = 0;
function changeBG(){
    element = document.querySelector('body')
    var imgs = [
        "url(https://i.ibb.co/n0GhyYj/7dDDYx4.png)",
        "url(https://i.ibb.co/1M2s4SP/nC8gL4d.png)",
        "url(https://i.ibb.co/rdTns9Q/x554BKn.png)",
        "url(https://i.ibb.co/8dg39fS/V8eu4Sl.png)",
        "url(https://i.ibb.co/LPq2bH2/EnWWWF3.png)"
    ]

    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}

  setInterval(changeBG, 4000);

