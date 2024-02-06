function toLink(url){
  window.location.href = url;
}

function copyText(fed) {
  // Copy the text inside the text field
  navigator.clipboard.writeText(fed);


  // Alert the copied text
  document.getElementById('server-link-copied').style.display = "block";
} 


// link scripts
// var submitNewUrl = document.getElementById("submit-new-url");
// submitNewUrl.addEventListener("click", function(){
//   var long = document.getElementById("long-url").value;
//   var short = document.getElementById("short-url").value;
//   appendNewUrl(long, short);
// });
// console.log(submitNewUrl);

