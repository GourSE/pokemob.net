window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const
    okP = urlParams.get("ok"),
    errorP = urlParams.get("error"),
    shortP = urlParams.get("short"),
    linkP = urlParams.get("link");

    urlBase = "l.pokemob.net";
    fullNewUrl = urlBase + "/" + shortP;


    if (okP == "false") {
        switch (errorP) {
            case "empty":
                linkPostMessage("", "不可空白");
                resetEntries(linkP, shortP);
                // alert("shouldn't be empty");
                break;
            case "exist":
                // alert("link.pokemob.net/" + shortP + " already exist");
                linkPostMessage(fullNewUrl, "已經存在");
                resetEntries(linkP, shortP);
                break;
            case "space":
                // alert("Error: '" + shortP + "' contains space");
                linkPostMessage("", "'" + shortP + "' 不允許有空格");
                resetEntries(linkP, shortP);
                break;
            case "404":
                // alert( linkP + " is not valed");
                linkPostMessage(linkP, " 不存在");
                resetEntries(linkP, shortP);
                break;
            case "3f":
                // alert( linkP + " is not valed");
                linkPostMessage("", "'?' 不允許存在於連結中");
                resetEntries(linkP, shortP);
                break;
        }
    } else if (okP == "true") {
        // alert("hell yeah " + fullNewUrl + " has been created");
        linkPostMessage(fullNewUrl, " 建立成功");
        resetEntries(linkP, shortP);
    } else {
        
    }


}    

function linkPostMessage(givenLink, givenMessage) {
    if (givenLink.includes("://") == true) {
        givenLinkHref = givenLink;
    } else {
        givenLinkHref = "http://" + givenLink;
    }
    document.getElementById("link-message-div").innerHTML = givenMessage;
    document.getElementById("link-message-href").href = givenLinkHref;
    document.getElementById("link-message-href").innerHTML = givenLink;
}

function resetEntries(link, short) {
    document.getElementById("link").value = link;
    document.getElementById("name").value= short;
}