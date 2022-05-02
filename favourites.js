// write js code here corresponding to favourites.html
var favourites =JSON.parse(localStorage.getItem("favourites"));


var tbody=document.querySelector("tbody")

favourites.forEach(function(el,index){
  var parent =document.createElement("tr")
  var td1 =document.createElement("td")
  var td2 =document.createElement("td")
  var td3 =document.createElement("td")
  var td4 =document.createElement("td")
  var td5 =document.createElement("td")
  var td6 =document.createElement("td")

  td1.innerText=el.MatchNo;
  td2.innerText=el.TeamA;
  td3.innerText=el.TeamB;
  td4.innerText=el.Date;
  td5.innerText=el.Venue;
  td6.innerText="Delete";
  td6.style.color="red";
  td6.addEventListener("click",function(el,index){
    DelteFunc()
  })
  
  
    
  parent.append(td1,td2,td3,td4,td5,td6)
    tbody.append(parent)

 
})

var fav =JSON.parse(localStorage.getItem("favourites"))||[]
function DelteFunc(ele,index){
fav.splice(index,1)
 console.log(fav)
 localStorage.setItem("favourites",JSON.stringify(fav))
 window.location.reload()
}
