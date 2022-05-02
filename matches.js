// write js code here corresponding to matches.html
var scheduleData =JSON.parse(localStorage.getItem("schedule"));
console.log(scheduleData)

var tbody=document.querySelector("tbody")

window.addEventListener("load", function () {
    displayDAta(scheduleData)
  });

function displayDAta(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(el){
       
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
        td6.innerText="Add to Fav";
        td6.style.color="blue";
        td6.addEventListener("click",function(){
          addfunct(el)
        })
        
      
        
      parent.append(td1,td2,td3,td4,td5,td6)
        tbody.append(parent)
    
     
    })

}


var fav =JSON.parse(localStorage.getItem("favourites"))||[]
function addfunct(el){
 fav.push(el);
 console.log(fav)
 localStorage.setItem("favourites",JSON.stringify(fav))
 window.location.href="favourites.html"
}

function filterFunc(){
    var seleted =document.querySelector("#filterVenue").value;
    if(seleted=="none"){
        displayDAta(scheduleData)
    }
    else{

        var arrdata = scheduleData.filter(function(ele){
           if(ele.Venue==seleted){
             return ele;
           }
        })
        console.log(arrdata)
        displayDAta(arrdata)
    }
    // window.location.reload()
}