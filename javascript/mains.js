 
var topic = document.querySelectorAll('.display');
var str1 = document.querySelector('.element').innerText.charAt(t);
  var random = 0;
  var s = 30;
  var m = 700;

function text() {
  var select = document.querySelector('.element');
  select.innerHTML = "";

 random = Math.round((Math.random()) * (9));

  var para = topic[random];
  console.log(random);
for(i=0;i<=m;i++){
  var select = document.querySelector('.element');
  select.innerHTML = select.innerHTML + '<span class="letters">'+para.innerHTML.charAt(i)+'</span>';

}


  

var letter = document.querySelectorAll('.letters')[0].style.backgroundColor = "red";



}

var u = 0;
var p = 0;
var t = 0;
var scrolls = document.querySelector('.scroll');

function char(event) {
  characters += 1;
 }



function myFunction(event) {
  console.log(str1)
  var x = event.key;       

 lettergraph();


  if(str1 == x) {



    if (str1 == x && str1 === " ") {
    var letters = document.querySelectorAll('.letters')[(p)].style.backgroundColor = "black";
    console.log(x);
     str1 = document.querySelector('.element').innerText.charAt((t+1));
     t += 1;
     var letter = document.querySelectorAll('.letters')[(p+1)].style.backgroundColor = "red";
     p += 1;
     var datas = document.querySelector('.data');
     datas.innerText = t;
  }
    else{
      str1 = document.querySelector('.element').innerText.charAt((t+1));
     t += 1;
     var letter = document.querySelectorAll('.letters')[(p)].style.backgroundColor = "green";
     var letter = document.querySelectorAll('.letters')[(p)].style.borderRadius = "4px";
     var letter = document.querySelectorAll('.letters')[(p+1)].style.backgroundColor = "red";
     p += 1;
     var datas = document.querySelector('.data');
     datas.innerText = t;
   }

   
if((t == s)) {
  if((s == (40 + u))) {
    s += 20;
    u += 20;
    scrolls.scrollTop += 52;
  }



  
  else {
  s += 10;
  scrolls.scrollTop += 27;
   }
}
}

   else {
    console.log(x)
      str1 = document.querySelector('.element').innerText.charAt(t);
  }
  
}


var datases = document.querySelector('.data');
var q = 0;
var times = document.querySelectorAll('.time');
var button = document.querySelector('.dropbtn');
var wpms = document.querySelector('.wpm');

var sixty = 0;
var onetwenty = 0;
var oneeighty = 0;
var twoforty = 0;
var threehundred = 0;

times[0].addEventListener("click", function(){
  button.innerText = "60s";
  document.getElementById("countdown").innerText = ":0";
  characters = 0;
  accuracy = 0;
  warner.innerText = ":0%";
 
  q = 60;
  timeelapsed = 0;
  datases.innerText = ":0";
  wpms.innerText = ":0";
  t = 0;
  p = 0;
  text();
  str1 = document.querySelector('.element').innerText.charAt(t);
  scrolls.scrollTop = 0;
  document.querySelector("textarea").value = "";
 if((random == 1)){
   s = 18;
   u = 5000;
  }

 else if((random == 0)){
  s = 40;
 }

else if((random == 7)){
  s = 20;
  u = 5000;
}

else if((random == 3)){
  s = 20;
  u = 5000;
}

else {
  s = 32;
  u = 5000;
}
clearInterval(downloadTimer);

  
});

times[1].addEventListener("click", function(){

  button.innerText = "120s";
  document.getElementById("countdown").innerText = ":0";
  characters = 0;
  accuracy = 0;
  warner.innerText = ":0%";
  q = 120;
  timeelapsed = 0;
  datases.innerText = ":0";
  wpms.innerText = ":0";
  t = 0;
  p = 0;
  text();
  str1 = document.querySelector('.element').innerText.charAt(t);
  scrolls.scrollTop = 0;
  document.querySelector("textarea").value = "";
  if((random == 1)){
   s = 18;
   u = 5000;
}

else if((random == 0)){
  s = 40;
}

else if((random == 3)){
  s = 20;
  u = 5000;
}

else if((random == 7)){
  s = 20;
  u = 5000;
}

else {
  s = 32;
  u = 5000;
}
clearInterval(downloadTimer);

});

times[2].addEventListener("click", function(){
  button.innerText = "180s";
  document.getElementById("countdown").innerText = ":0";
  characters = 0;
  accuracy = 0;
  warner.innerText = ":0%";
  q = 180;
  timeelapsed = 0;
  datases.innerText = ":0";
  wpms.innerText = ":0";
  t = 0;
  p = 0;
  text();
  str1 = document.querySelector('.element').innerText.charAt(t);
  scrolls.scrollTop = 0;
  document.querySelector("textarea").value = "";
  if((random == 1)){
   s = 18;
   u = 5000;
}

else if((random == 0)){
  s = 40;
}

else if((random == 3)){
  s = 20;
  u = 5000;
}

else if((random == 7)){
  s = 20;
  u = 5000;
}

else {
  s = 32;
  u = 5000;
}
clearInterval(downloadTimer);

});

times[3].addEventListener("click", function(){
  button.innerText = "240s";
  document.getElementById("countdown").innerText = ":0";
  characters = 0;
  accuracy = 0;
  warner.innerText = ":0%";
  q = 240;
  timeelapsed = 0;
  datases.innerText = ":0";
  wpms.innerText = ":0";
  t = 0;
  p = 0;
  text();
  str1 = document.querySelector('.element').innerText.charAt(t);
  scrolls.scrollTop = 0;
  document.querySelector("textarea").value = "";
  if((random == 1)){
   s = 18;
   u = 5000;
}

else if((random == 0)){
  s = 40;
}

else if((random == 3)){
  s = 20;
  u = 5000;
}

else if((random == 7)){
  s = 20;
  u = 5000;
}

else {
  s = 32;
  u = 5000;
}
clearInterval(downloadTimer);

});

times[4].addEventListener("click", function(){
  button.innerText = "300s";
  document.getElementById("countdown").innerText = ":0";
 characters = 0;
 accuracy = 0;
 warner.innerText = ":0%";
 q = 300;
 timeelapsed = 0;
 datases.innerText = ":0";
 wpms.innerText = ":0";
  t = 0;
  p = 0;
  text();
  str1 = document.querySelector('.element').innerText.charAt(t);
  scrolls.scrollTop = 0;
  document.querySelector("textarea").value = "";
  if((random == 1)){
   s = 18;
   u = 5000;
}

else if((random == 0)){
  s = 40;
}

else if((random == 3)){
  s = 20;
  u = 5000;
}

else if((random == 7)){
  s = 20;
  u = 5000;
}

else {
  s = 32;
  u = 5000;
}
clearInterval(downloadTimer);

});




var accuracy = 0;
var variablewpm = 0
var characters = 0;
var timeelapsed = 0;
var downloadTimer = 0;
 var warner = document.querySelector('.accurate');

 var arronex = [];
 var arroney = [];
 var arrtwox = [];
 var arrtwoy = [];

//wpm and accuracy for stats and database
 var wpmstat = 0;
 var accuracystat = 0;

 

function start(){

 
   downloadTimer = setInterval(function(){
      timeelapsed += 1;
  document.getElementById("countdown").innerHTML = ":" + timeelapsed;

   var wpms = document.querySelector('.wpm');
   var correctletters = Number(datases.innerText);
   var standardwpm = (correctletters)/5;
   variablewpm = Math.round((standardwpm) * (60/timeelapsed));
   wpms.innerText = ":" + variablewpm;

   accuracy = Math.round((((t)/(characters)) * 100));
   warner.innerText = ":" + accuracy + "%";


if (t == 0) {
  accuracy = 0; 
  variablewpm = 0;
}

 
 arronex.push(timeelapsed)
 arroney.push(accuracy)
 arrtwox.push(timeelapsed) 
 arrtwoy.push(variablewpm)  



  if(timeelapsed == (q+1) || (t == 690) ){

    document.querySelector("canvas").style.display = "none"
    
    clearInterval(downloadTimer);

    wpmstat = variablewpm
    accuracystat = accuracy
    
   arronex.pop()
   arroney.pop()
   arrtwox.pop()
   arrtwoy.pop()  








graphing()

database()  
    



    var trace0 = {
  type: 'bar',
  x: ['WPM', 'accuracy', 'errors', 'characters'],
  y: [variablewpm, accuracy, (characters-t), correctletters],
   marker:{
    color: ['red', 'blue', 'green', 'black']
  },
  width: [0.3, 0.3, 0.3, 0.3]
}

var data = [trace0]


    var trace1 = {
  type: 'bar',
  x: ['Good Wpm', 'very Good wpm', 'Great Wpm'],
  y: [40, 60, 80],
   marker:{
    color: ['red', 'blue', 'green', 'black']
  },
  width: [0.3, 0.3, 0.3, 0.3]
}


var datatwo = [trace1]

var layouttwo = {
  title: 'Measure of Most Typists',
   titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },

  xaxis: {
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
    showgrid: false,
    zeroline: true,
    zerolinecolor: 'white',
    tickangle: 'auto',
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 15,
      color: 'white'
    }
},

yaxis: {
  
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
    showgrid: false,
     zeroline: true,
    zerolinecolor: 'white',
    tickangle: 'auto',
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 15,
      color: 'white'
    }
}
};

var layout = {
   title: 'Your Bar Graph',
   titlefont: {
   family: 'Arial, sans-serif',
   size: 18,
   color: 'yellow'
    },
  xaxis: {
  
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
    showgrid: false,
    zeroline: true,
    zerolinecolor: 'white',
    tickangle: 45,
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 15,
      color: 'white'
    }
},

yaxis: {
  
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
    showgrid: false,
     zeroline: true,
    zerolinecolor: 'white',
    tickangle: 'auto',
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 15,
      color: 'white'
    }
}
};

Plotly.newPlot('myDivone', data, layout);
Plotly.newPlot('myDivtwo', datatwo, layouttwo);

var svg = document.querySelectorAll("svg");
svg[0].style.background = "none"
svg[16].style.background = "none"
svg[32].style.background = "none"
    accuracy = 0;
    document.getElementById("countdown").innerHTML = ":" + q;
  
    timeelapsed = 0;
    datases.innerText = ":" + correctletters;
    correctletters = 0;
    t = 0;

    var results = document.querySelectorAll('.anim')
    var resulting = document.querySelector('.awesome')

    resulting.classList.add("resulting")
    results[0].classList.add("result")
    results[1].classList.add("result")


document.body.classList.remove("background")
document.body.classList.add("after")
var mydivone = document.querySelector("#myDivone")
var mydivtwo = document.querySelector("#myDivtwo")
var mydivthree = document.querySelector("#myDivthree")
var back = document.querySelector("#back")

setTimeout(dis, 3500) 
function dis() {
mydivone.classList.remove("dis")
mydivtwo.classList.remove("dis")
mydivthree.classList.remove("dis")
setTimeout(backs, 3000)
function backs() { 
back.classList.remove("dis")
}

}

  



mydivone.style.animationName = "dis"
mydivtwo.style.animationName = "dis"
mydivthree.style.animationName = "dis"
back.style.animationName = "dis"

 arronex = [];
 arroney = [];
 arrtwox = [];
 arrtwoy = [];



setTimeout(reset, 4500)
function reset() {
    
  document.getElementById("countdown").innerText = ":0";
  characters = 0;
  accuracy = 0;
  warner.innerText = ":0%";
 
  timeelapsed = 0;
  datases.innerText = ":0";
  wpms.innerText = ":0";
  t = 0;
  p = 0;
  text();
  str1 = document.querySelector('.element').innerText.charAt(t);
  scrolls.scrollTop = 0;
  document.querySelector("textarea").value = ""; 
  if((random == 1)){
   s = 18;
   u = 5000;
  }

 else if((random == 0)){
  s = 40;
 }

else if((random == 7)){
  s = 20;
  u = 5000;
}

else if((random == 3)){
  s = 20;
  u = 5000;
}

else {
  s = 32;
  u = 5000;
}
clearInterval(downloadTimer); 
}



}

}, 1000);

 }





var element = document.querySelector('#load');
function loading() {
  element.classList.add("loader");

  setTimeout(function(){ 
    element.classList.remove("loader"); }, 10000);
}
loading();






/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function graphing() {
 



var trace1 = {
 
  x: arronex,
  y: arroney,


  name: 'Accuracy',
  mode: 'lines+markers',
   marker: {
    color: 'white',
    size: 1
  },
  line: {
    color: 'black',
    
  }
};

var trace2 = {
  x: arrtwox,
  y: arrtwoy,
  
  name: 'Wpm',
  mode: 'lines+markers',
   marker: {
    color: 'white',
    size: 1
  },
  line: {
    color: 'orange',
  }
};


var data = [trace1, trace2];

var layout = {
  xaxis: {
    title: 'Time(seconds)',
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
    showgrid: false,
    zeroline: true,
    zerolinecolor: 'white',
    tickangle: 'auto',
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 15,
      color: 'white'
    }
},

yaxis: {
  
     
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
    showgrid: false,
    zeroline: true,
    zerolinecolor: 'white',
    tickangle: 'auto',
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 15,
      color: 'white'
    }
},

 legend: {

    traceorder: 'normal',
    font: {
      family: 'sans-serif',
      size: 15,
      color: 'white'
    },
    bgcolor: 'transparent',
    
  }
};


Plotly.newPlot('myDivthree', data, layout);
}


var mydivone = document.querySelector("#myDivone")
var mydivtwo = document.querySelector("#myDivtwo")
var mydivthree = document.querySelector("#myDivthree")
var back = document.querySelector("#back")

var results = document.querySelectorAll('.anim')
var resulting = document.querySelector('.awesome')

  


function closing() {



mydivone.style.animationName = "backing"
mydivtwo.style.animationName = "backing"
mydivthree.style.animationName = "backing"
back.style.animationName = "backing"

 setTimeout(closes, 2000)
function closes() {
mydivone.classList.add("dis")
mydivtwo.classList.add("dis")
mydivthree.classList.add("dis")
back.classList.add("dis")

    resulting.classList.remove("resulting")
    results[0].classList.remove("result")
    results[1].classList.remove("result")

    document.body.classList.remove("after")
    document.body.classList.add("background")
    document.querySelector("canvas").style.display = "block"


}
}









var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
var ten = 0;
var eleven = 0;
var twelve = 0;
var thirteen = 0;
var fourteen = 0;
var fifteen = 0;
var sixteen = 0;
var seventeen = 0;
var eighteen = 0;
var nineteen = 0;
var twenty = 0;
var twentyone = 0;
var twentytwo = 0; 
var twentythree = 0;
var twentyfour = 0;
var twentyfive = 0;
var twentysix = 0;



var oneminus = 0;
var twominus = 0;
var threeminus = 0;
var fourminus = 0;
var fiveminus = 0;
var sixminus = 0;
var sevenminus = 0;
var eightminus = 0;
var nineminus = 0;
var tenminus = 0;
var elevenminus = 0;
var twelveminus = 0;
var thirteenminus = 0;
var fourteenminus = 0;
var fifteenminus = 0;
var sixteenminus = 0;
var seventeenminus = 0;
var eighteenminus = 0;
var nineteenminus = 0;
var twentyminus = 0;
var twentyoneminus = 0;
var twentytwominus = 0;
var twentythreeminus = 0;
var twentyfourminus = 0;
var twentyfiveminus = 0;
var twentysixminus = 0; 


var aa = [];
var bb = [];
var cc = [];
var dd = [];
var ee = [];
var ff = [];
var gg = [];
var hh = [];
var ii = [];
var jj = [];
var kk = [];
var ll = [];
var mm = [];
var nn = [];
var oo = [];
var pp = [];
var qq = [];
var rr = [];
var ss = [];
var tt = [];
var uu = [];
var vv = [];
var ww = [];
var xx = [];
var yy = [];
var zz = [];





var aam = [];
var bbm = [];
var ccm = [];
var ddm = [];
var eem = [];
var ffm = [];
var ggm = [];
var hhm = [];
var iim = [];
var jjm = [];
var kkm = [];
var llm = [];
var mmm = [];
var nnm = [];
var oom = [];
var ppm = [];
var qqm = [];
var rrm = [];
var ssm = [];
var ttm = [];
var uum = [];
var vvm = [];
var wwm = [];
var xxm = [];
var yym = [];
var zzm = [];




 
function lettergraph() {

x = event.key

  if(str1 == x && str1.toLowerCase() == "a") {
    one = one + 1;
  }

  else if(str1.toLowerCase() == "a" && str1 !== x ) {
    oneminus = oneminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "b") {
    two = two + 1;
  }

  else if(str1.toLowerCase() == "b" && str1 !== x ) {
    twominus = twominus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "c") {
    three = three + 1;
  }

  else if(str1.toLowerCase() == "c" && str1 !== x ) {
    threeminus = threeminus + 1
  }



  else if(str1 == x && str1.toLowerCase() == "d") {
    four = four + 1;
  }

  else if(str1.toLowerCase() == "d" && str1 !== x ) {
    fourminus = fourminus + 1
  }



  else if(str1 == x && str1.toLowerCase() == "e") {
    five = five + 1;
  }

  else if(str1.toLowerCase() == "e" && str1 !== x ) {
    fiveminus = fiveminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "f") {
    six = six + 1;
  }

  else if(str1.toLowerCase() == "f" && str1 !== x ) {
    sixminus = sixminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "g") {
    seven = seven + 1;
  }

  else if(str1.toLowerCase() == "g" && str1 !== x ) {
    sevenminus = sevenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "h") {
    eight = eight + 1;
  }

  else if(str1.toLowerCase() == "h" && str1 !== x ) {
    eightminus = eightminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "i") {
    nine = nine + 1;
  }

  else if(str1.toLowerCase() == "i" && str1 !== x ) {
    nineminus = nineminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "j") {
    ten = ten + 1;
  }

  else if(str1.toLowerCase() == "j" && str1 !== x ) {
    tenminus = tenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "k") {
    eleven = eleven + 1;
  }

  else if(str1.toLowerCase() == "k" && str1 !== x ) {
    elevenminus = elevenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "") {
    twelve = twelve + 1;
  }

  else if(str1.toLowerCase() == "l" && str1 !== x ) {
    twelveminus = twelveminus + 1
  }



  else if(str1 == x && str1.toLowerCase() == "m") {
    thirteen = thirteen + 1;
  }

  else if(str1.toLowerCase() == "m" && str1 !== x ) {
    thirteenminus = thirteenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "n") {
    fourteen = fourteen + 1;
  }

  else if(str1.toLowerCase() == "n" && str1 !== x ) {
    fourteenminus = fourteenminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "o") {
    fifteen = fifteen + 1;
  }

  else if(str1.toLowerCase() == "o" && str1 !== x ) {
    fifteenminus = fifteenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "p") {
    sixteen = sixteen + 1;
  }

  else if(str1.toLowerCase() == "" && str1 !== x ) {
    sixteenminus = sixteenminus + 1
  }



  else if(str1 == x && str1.toLowerCase() == "q") {
    seventeen = seventeen + 1;
  }

  else if(str1.toLowerCase() == "q" && str1 !== x ) {
    seventeenminus = seventeenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "r") {
    eighteen = eighteen + 1;
  }

  else if(str1.toLowerCase() == "r" && str1 !== x ) {
    eighteenminus = eighteenminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "s") {
    nineteen = nineteen + 1;
  }

  else if(str1.toLowerCase() == "s" && str1 !== x ) {
    nineteenminus = nineteenminus + 1
  }




  else if(str1 == x && str1.toLowerCase() == "t") {
    twenty = twenty + 1;
  }

  else if(str1.toLowerCase() == "t" && str1 !== x ) {
    twentyminus = twentyminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "u") {
    twentyone = twentyone + 1;
  }

  else if(str1.toLowerCase() == "u" && str1 !== x ) {
    twentyoneminus = twentyoneminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "v") {
    twentytwo = twentytwo + 1;
  }

  else if(str1.toLowerCase() == "v" && str1 !== x ) {
    twentytwominus = twentytwominus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "w") {
    twentythree = twentythree + 1;
  }

  else if(str1.toLowerCase() == "w" && str1 !== x ) {
    twentythreeminus = twentythreeminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "x") {
    twentyfour = twentyfour + 1;
  }

  else if(str1.toLowerCase() == "x" && str1 !== x ) {
    twentyfourminus = twentyfourminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "y") {
    twentyfive = twentyfive + 1;
  }

  else if(str1.toLowerCase() == "y" && str1 !== x ) {
    twentyfiveminus = twentyfiveminus + 1
  }





  else if(str1 == x && str1.toLowerCase() == "z") {
    twentysix = twentysix + 1;
  }

  else if(str1.toLowerCase() == "z" && str1 !== x ) {
    twentysixminus = twentysixminus + 1
  }
}










function database(){


  var db = firebase.firestore()



firebase.auth().onAuthStateChanged(user => {

  if(user) {
    console.log("user logged in")
    

var present = db.collection("users").doc(user.uid).collection("Letters").doc("A");

present.get().then(function(doc) {
    if (!doc.exists) {
// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("A").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});






// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("B").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});




// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("C").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});






// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("D").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});






// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("E").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});





// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("F").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});





// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("G").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});






// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("H").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("I").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("J").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("K").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("L").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("M").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("N").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});







// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("O").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("P").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("Q").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});







// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("R").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("S").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("T").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});











// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("U").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});







// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("V").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("W").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});







// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("X").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});








// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("Y").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});







// Add a new document in collection "users"
db.collection("users").doc(user.uid).collection("Letters").doc("Z").set({
    accuracy: 0,
    wrongs: 0,
    rights: 0
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

         

}
})


 setTimeout(updating, 3000)

 function updating(){

 db.collection("users").doc(user.uid).collection("Letters").doc("A").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("A").set({
    wrongs: wrong + oneminus,
    rights: right + one
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("A").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("A").update({
    accuracy: Math.round((right/(right+wrong))*100),
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})





  db.collection("users").doc(user.uid).collection("Letters").doc("B").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("B").set({
    wrongs: wrong + twominus,
    rights: right + two
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("B").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("B").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







  db.collection("users").doc(user.uid).collection("Letters").doc("C").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("C").set({
    wrongs: wrong + threeminus,
    rights: right + three
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("C").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("C").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})





 db.collection("users").doc(user.uid).collection("Letters").doc("D").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("D").set({
    wrongs: wrong + fourminus,
    rights: right + four
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("D").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("D").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})





 db.collection("users").doc(user.uid).collection("Letters").doc("E").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("E").set({
    wrongs: wrong + fiveminus,
    rights: right + five
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("E").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("E").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("F").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("F").set({
    wrongs: wrong + sixminus,
    rights: right + six
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("F").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("F").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})





 db.collection("users").doc(user.uid).collection("Letters").doc("G").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("G").set({
    wrongs: wrong + sevenminus,
    rights: right + seven
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("G").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("G").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("H").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("H").set({
    wrongs: wrong + eightminus,
    rights: right + eight
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("H").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("H").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("I").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("I").set({
    wrongs: wrong + nineminus,
    rights: right + nine
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("I").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("I").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("J").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("J").set({
    wrongs: wrong + tenminus,
    rights: right + ten
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("J").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("J").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("K").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("K").set({
    wrongs: wrong + elevenminus,
    rights: right + eleven
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("K").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("K").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("L").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("L").set({
    wrongs: wrong + twelveminus,
    rights: right + twelve
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("L").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("L").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("M").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("M").set({
    wrongs: wrong + thirteenminus,
    rights: right + thirteen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("M").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("M").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("N").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("N").set({
    wrongs: wrong + fourteenminus,
    rights: right + fourteen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("N").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("N").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("O").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("O").set({
    wrongs: wrong + fifteenminus,
    rights: right + fifteen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("O").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("O").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("P").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("P").set({
    wrongs: wrong + sixteenminus,
    rights: right + sixteen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("P").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("P").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("Q").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("Q").set({
    wrongs: wrong + seventeenminus,
    rights: right + seventeen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("Q").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("Q").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("R").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("R").set({
    wrongs: wrong + eighteenminus,
    rights: right + eighteen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("R").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("R").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("S").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("S").set({
    wrongs: wrong + nineteenminus,
    rights: right + nineteen
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("S").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("S").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("T").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("T").set({
    wrongs: wrong + twentyminus,
    rights: right + twenty
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("T").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("T").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})






 db.collection("users").doc(user.uid).collection("Letters").doc("U").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("U").set({
    wrongs: wrong + twentyoneminus,
    rights: right + twentyone
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("U").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("U").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})








 db.collection("users").doc(user.uid).collection("Letters").doc("V").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("V").set({
    wrongs: wrong + twentytwominus,
    rights: right + twentytwo
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("V").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("V").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("W").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("W").set({
    wrongs: wrong + twentythreeminus,
    rights: right + twentythree
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("W").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("W").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})







 db.collection("users").doc(user.uid).collection("Letters").doc("X").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("X").set({
    wrongs: wrong + twentyfourminus,
    rights: right + twentyfour
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("X").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("X").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})








 db.collection("users").doc(user.uid).collection("Letters").doc("Y").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("Y").set({
    wrongs: wrong + twentyfiveminus,
    rights: right + twentyfive
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("Y").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("Y").update({
    accuracy: (right/(right+wrong))*100,
  
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})









 db.collection("users").doc(user.uid).collection("Letters").doc("Z").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs

     db.collection("users").doc(user.uid).collection("Letters").doc("Z").set({
    wrongs: wrong + twentysixminus,
    rights: right + twentysix
})
.then(function() {
    

    db.collection("users").doc(user.uid).collection("Letters").doc("Z").get().then(function(doc){
     var right = doc.data().rights
     var wrong = doc.data().wrongs
    
     db.collection("users").doc(user.uid).collection("Letters").doc("Z").update({
    accuracy: (right/(right+wrong))*100,


  
})
.then(function() {    
     console.log("documentsuccesfully written")


 one = 0;
 two = 0;
 three = 0;
 four = 0;
 five = 0;
 six = 0;
 seven = 0;
 eight = 0;
 nine = 0;
 ten = 0;
 eleven = 0;
 twelve = 0;
 thirteen = 0;
 fourteen = 0;
 fifteen = 0;
 sixteen = 0;
 seventeen = 0;
 eighteen = 0;
 nineteen = 0;
 twenty = 0;
 twentyone = 0;
 twentytwo = 0; 
 twentythree = 0;
 twentyfour = 0;
 twentyfive = 0;
 twentysix = 0;



 oneminus = 0;
 twominus = 0;
 threeminus = 0;
 fourminus = 0;
 fiveminus = 0;
 sixminus = 0;
 sevenminus = 0;
 eightminus = 0;
 nineminus = 0;
 tenminus = 0;
 elevenminus = 0;
 twelveminus = 0;
 thirteenminus = 0;
 fourteenminus = 0;
 fifteenminus = 0;
 sixteenminus = 0;
 seventeenminus = 0;
 eighteenminus = 0;
 nineteenminus = 0;
 twentyminus = 0;
 twentyoneminus = 0;
 twentytwominus = 0;
 twentythreeminus = 0;
 twentyfourminus = 0;
 twentyfiveminus = 0;
 twentysixminus = 0; 
})
   
})
})


.catch(function(error) {
    console.error("Error writing document: ", error);
});

})

}







var d = new Date();
var month = d.getMonth() + 1;
var date = d.getDate()
var year = d.getFullYear()
var start = year + "-" + month + "-" + date;

var dayGraph = db.collection("users").doc(user.uid).collection("EachDayGraph").doc(start);


dayGraph.get().then(function(doc) {
    if (!doc.exists) {

db.collection("users").doc(user.uid).collection("EachDayGraph").doc(start).set({
    WPM: 0,
    ACCURACY: 0
})
.then(function() {
    console.log("done")
}) 

}

})


setTimeout(fun, 3000)

function fun(){

dayGraph.get().then(function(doc){
    var daywpm = doc.data().WPM
    var dayacc = doc.data().ACCURACY

    if(daywpm !== 0 && dayacc !== 0){
        dayGraph.update({
           WPM: Math.round((daywpm + wpmstat)/2),
           ACCURACY: Math.round((dayacc + accuracystat)/2)
    })
    }

    else{
        dayGraph.update({
           WPM: daywpm + wpmstat,
           ACCURACY: dayacc + accuracystat
    })
    }
  
  console.log("done")
        
})
}
  










 






}


  else {
    console.log("user logged out")
      
  }
})
}



 
  















 