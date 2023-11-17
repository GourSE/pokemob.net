window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const
    errorP = urlParams.get("error"),
    cntP = urlParams.get("cnt"),
    fileP = urlParams.get("file");

    urlBase = "admin.pokemob.net/files";
    fullUrl = urlBase + "/" + fileP;


    postMsg = "";
    postLink = "";
    switch (errorP) {
	case "0":
	   if (cntP == "1") {
	       //linkPostMessage(fullUrl, "上傳成功，位置：");
               postLink = fullUrl;
	       postMsg = "上傳成功，位置：";
	   } else {
	       //linkPostMessage(urlBase, "上傳" + cntP + "個檔案成功，beed：")
	       postLink = urlBase;
	       postMsg = "上傳" + cntP + "個檔案成功，位置：";
	   }
	   break;
	case "1":
	   postMsg = "檔案大小大於 PHP 最大限制"; 
	   break;
	case "2":
	   postMsg = "檔案大小大於 HTML 最大限制"; 
	   break;       
	case "3":
	   postMsg = "檔案上傳不完整"; 
	   break;
	case "4":
	   postMsg = "未上傳檔案"; 
	   break;
	case "5":
	   postMsg = "未知錯誤"; 
	   break;
	case "6":
	   postMsg = "缺少佔存區域"; 
	   break;
	case "7":
	   postMsg = "寫入失敗"; 
	   break;
	case "8":
	   postMsg = "PHP 插件衝突"; 
	   break;               
    }
    linkPostMessage(postLink, postMsg);
   


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
