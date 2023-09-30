window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const
    okP = urlParams.get("ok"),
    errorP = urlParams.get("error"),
    cntP = urlParams.get("cnt"),
    fileP = urlParams.get("file");

    urlBase = "pokemob.net/openfile/direct/beed";
    fullUrl = urlBase + "/" + fileP;


    if (okP == "false") {
        errorPost = "";
        switch (errorP) {
            case "1":
               errorPost = "檔案大小大於 PHP 最大限制"; 
                break;
            case "2":
               errorPost = "檔案大小大於 HTML 最大限制"; 
                break;       
            case "3":
               errorPost = "檔案上傳不完整"; 
                break;
            case "4":
               errorPost = "未上傳檔案"; 
                break;
            case "5":
               errorPost = "未知錯誤"; 
                break;
            case "6":
               errorPost = "缺少佔存未知"; 
                break;
            case "7":
               errorPost = "寫入失敗"; 
                break;
            case "8":
               errorPost = "PHP 插件衝突"; 
                break;               
        }
        linkPostMessage("", errorPost);
    } else if (okP == "true") {
        // alert("hell yeah " + fullNewUrl + " has been created");
        if (cntP == 1) {
            linkPostMessage(fullUrl, "上傳成功，位置：");
        } else{
            linkPostMessage(urlBase, "上傳" + cntP + "個檔案成功，：")
        }
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