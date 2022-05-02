// write js code here corresponding to index.html
// You should add submit event on the form
var form =document.querySelector("form")
console.log(form)
var data = JSON.parse(localStorage.getItem("schedule")) ||[]
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
   var obj ={
       MatchNo:form.matchNum.value,
       TeamA:form.teamA.value,
       TeamB:form.teamB.value,
       Date:form.date.value,
       Venue:form.venue.value,
       
   }
   data.push(obj)
   localStorage.setItem("schedule",JSON.stringify(data))
   window.location.href ="matches.html"
})
