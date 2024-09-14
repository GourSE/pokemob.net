window.onload = function() {
   mysteryOfTheDay(); 
};

function mysteryOfTheDay() {
    const d = new Date();
    dayOfTheDay = d.getDay();
    
    switch (dayOfTheDay) {
        case 0:
            glor();
            break;

        case 1:
            joy();
            break;

        case 2:
            sorr();
            break;

        case 3:
            glor();
            break;

        case 4:
            lumi();
            break;

        case 5:
            sorr();
            break;

        case 6:
            joy();
            break;
    
        default:
            break;
    }
}

function joy() {
    document.getElementById("mysTit").innerHTML = "歡喜五端";
    document.getElementById("pageSubtitle").innerHTML = "歡喜五端";
    document.getElementById("fM").innerHTML = "歡喜一端：聖母領報";
    document.getElementById("sM").innerHTML = "歡喜二端：聖母往見聖婦依撒伯爾";
    document.getElementById("tM").innerHTML = "歡喜三端：耶穌誕生";
    document.getElementById("forM").innerHTML = "歡喜四端：聖母獻耶穌於主堂";
    document.getElementById("fifM").innerHTML = "歡喜五端：耶穌十二齡講道";
}
function lumi() {
    document.getElementById("mysTit").innerHTML = "光明五端";
    document.getElementById("pageSubtitle").innerHTML = "光明五端";
    document.getElementById("fM").innerHTML = "光明一端：耶穌受洗";
    document.getElementById("sM").innerHTML = "光明二端：耶穌加納婚宴初顯神蹟";
    document.getElementById("tM").innerHTML = "光明三端：耶穌宣講天國福音";
    document.getElementById("forM").innerHTML = "光明四端：耶穌顯聖容";
    document.getElementById("fifM").innerHTML = "光明五端：耶穌建立聖體聖事";
}
function sorr() {
    document.getElementById("mysTit").innerHTML = "痛苦五端";
    document.getElementById("pageSubtitle").innerHTML = "痛苦五端";
    document.getElementById("fM").innerHTML = "痛苦一端：耶穌山園祈禱";
    document.getElementById("sM").innerHTML = "痛苦二端：耶穌受鞭打之刑";
    document.getElementById("tM").innerHTML = "痛苦三端：耶穌受茨冠之辱";
    document.getElementById("forM").innerHTML = "痛苦四端：耶穌背負十字架";
    document.getElementById("fifM").innerHTML = "痛苦五端：耶穌被釘在十字架上死";
}
function glor() {
    document.getElementById("mysTit").innerHTML = "榮福五端";
    document.getElementById("pageSubtitle").innerHTML = "榮福五端";
    document.getElementById("fM").innerHTML = "榮福一端：耶穌復活";
    document.getElementById("sM").innerHTML = "榮福二端：耶穌升天";
    document.getElementById("tM").innerHTML = "榮福三端：聖神降臨";
    document.getElementById("forM").innerHTML = "榮福四端：聖母蒙召升天";
    document.getElementById("fifM").innerHTML = "榮福五端：天主光榮聖母";
}
