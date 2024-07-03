function displaytime(){
    //creating date objects to get hours,minutes and seconds
    var date = new Date()
    var hours =date.getHours()
    var minutes =date.getMinutes()
    var seconds=date.getSeconds()
    //selecting the elements
    var h=document.getElementById('hours')
    var min=document.getElementById("min")
    var sec=document.getElementById("sec")
    var ampm=document.getElementById("ampm")
    //setting AM/PM
    if (hours>=12){
        hours=hours>12?hours-12:hours
        ampm.innerHTML='PM'
    }
     //zeropadding function
     hours = hours < 10 ? '0'+hours : hours
     minutes = minutes < 10 ? '0'+minutes: minutes
     seconds = seconds < 10 ? '0'+seconds:seconds
    //insert the textcontent into the elements
    h.innerHTML=hours
    min.innerHTML=minutes
    sec.innerHTML=seconds
   
  

}
setInterval(displaytime,200)
  