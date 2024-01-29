




var d = new Date();
var month = d.getMonth() + 1;
var date = d.getDate()
var year = d.getFullYear()
var start = year + "-" + month + "-" + date;


var apple = []
var orange = []
var banana = []
var AVGacc = 0;
var AVGwpm = 0;
var count = 0;
var Totalacc = 0;
var Totalwpm = 0;
var range = [];



 var db = firebase.firestore()
 var dataget = document.querySelectorAll(".dataget")



firebase.auth().onAuthStateChanged(user => {

  if(user) {
   console.log("user logged in")
     document.querySelector(".rowone").style.display = "block"
     document.querySelector(".row").style.display = "block"
     document.querySelector(".advice").style.display = "none"



      var present = db.collection("users").doc(user.uid).collection("Letters").doc("A");


    present.get().then(function(doc) {
    if (doc.exists) {


      db.collection("users").doc(user.uid).collection("Letters").doc("A").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

          
          dataget[0].innerHTML = Math.round(accur) + "%";
          dataget[1].innerHTML = right;
          dataget[2].innerHTML = wrong;
      }) 






      db.collection("users").doc(user.uid).collection("Letters").doc("B").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[3].innerHTML = Math.round(accur) + "%";
          dataget[4].innerHTML = right;
          dataget[5].innerHTML = wrong;
      }) 







      db.collection("users").doc(user.uid).collection("Letters").doc("C").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[6].innerHTML = Math.round(accur) + "%";
          dataget[7].innerHTML = right;
          dataget[8].innerHTML = wrong;
      }) 







      db.collection("users").doc(user.uid).collection("Letters").doc("D").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[9].innerHTML = Math.round(accur) + "%";
          dataget[10].innerHTML = right;
          dataget[11].innerHTML = wrong;
      }) 







      db.collection("users").doc(user.uid).collection("Letters").doc("E").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[12].innerHTML = Math.round(accur) + "%";
          dataget[13].innerHTML = right;
          dataget[14].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("F").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[15].innerHTML = Math.round(accur) + "%";
          dataget[16].innerHTML = right;
          dataget[17].innerHTML = wrong;
      }) 









      db.collection("users").doc(user.uid).collection("Letters").doc("G").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[18].innerHTML = Math.round(accur) + "%";
          dataget[19].innerHTML = right;
          dataget[20].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("H").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[21].innerHTML = Math.round(accur) + "%";
          dataget[22].innerHTML = right;
          dataget[23].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("I").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[24].innerHTML = Math.round(accur) + "%";
          dataget[25].innerHTML = right;
          dataget[26].innerHTML = wrong;
      })







      db.collection("users").doc(user.uid).collection("Letters").doc("J").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[27].innerHTML = Math.round(accur) + "%";
          dataget[28].innerHTML = right;
          dataget[29].innerHTML = wrong;
      }) 







      db.collection("users").doc(user.uid).collection("Letters").doc("K").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[30].innerHTML = Math.round(accur) + "%";
          dataget[31].innerHTML = right;
          dataget[32].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("L").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[33].innerHTML = Math.round(accur) + "%";
          dataget[34].innerHTML = right;
          dataget[35].innerHTML = wrong;
      }) 







      db.collection("users").doc(user.uid).collection("Letters").doc("M").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[36].innerHTML = Math.round(accur) + "%";
          dataget[37].innerHTML = right;
          dataget[38].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("N").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[39].innerHTML = Math.round(accur) + "%";
          dataget[40].innerHTML = right;
          dataget[41].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("O").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[42].innerHTML = Math.round(accur) + "%";
          dataget[43].innerHTML = right;
          dataget[44].innerHTML = wrong;
      }) 









      db.collection("users").doc(user.uid).collection("Letters").doc("P").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[45].innerHTML = Math.round(accur) + "%";
          dataget[46].innerHTML = right;
          dataget[47].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("Q").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[48].innerHTML = Math.round(accur) + "%";
          dataget[49].innerHTML = right;
          dataget[50].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("R").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[51].innerHTML = Math.round(accur) + "%";
          dataget[52].innerHTML = right;
          dataget[53].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("S").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[54].innerHTML = Math.round(accur) + "%";
          dataget[55].innerHTML = right;
          dataget[56].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("T").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[57].innerHTML = Math.round(accur) + "%";
          dataget[58].innerHTML = right;
          dataget[59].innerHTML = wrong;
      }) 









      db.collection("users").doc(user.uid).collection("Letters").doc("U").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[60].innerHTML = Math.round(accur) + "%";
          dataget[61].innerHTML = right;
          dataget[62].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("V").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[63].innerHTML = Math.round(accur) + "%";
          dataget[64].innerHTML = right;
          dataget[65].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("W").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[66].innerHTML = Math.round(accur) + "%";
          dataget[67].innerHTML = right;
          dataget[68].innerHTML = wrong;
      }) 









      db.collection("users").doc(user.uid).collection("Letters").doc("X").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[69].innerHTML = Math.round(accur) + "%";
          dataget[70].innerHTML = right;
          dataget[71].innerHTML = wrong;
      }) 








      db.collection("users").doc(user.uid).collection("Letters").doc("Y").get().then(function(doc){
          var right = doc.data().rights
          var wrong = doc.data().wrongs
          var accur = doc.data().accuracy 

        
          dataget[72].innerHTML = Math.round(accur) + "%";
          dataget[73].innerHTML = right;
          dataget[74].innerHTML = wrong;
      })


      }
      })




   
    db.collection("users").doc(user.uid).collection("EachDayGraph").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
             apple.push(doc.id.toString())
             orange.push(doc.data().ACCURACY.toString())
             banana.push(doc.data().WPM.toString())
              count += 1
             Totalacc += (doc.data().ACCURACY)
             Totalwpm += (doc.data().WPM)

        });

         if(apple.length < 16){
          range = [apple[0], apple[(apple.length)-1]]
         }

         else{
          range = [apple[(apple.length)-16], apple[(apple.length)-1]]
         }

        AVGacc = Math.round(Totalacc/count)
        AVGwpm = Math.round(Totalwpm/count)

        daygraph()
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  


function daygraph(){

var trace1 = {
 
  x: apple,
  y: orange,


  name: 'Avg Accuracy',
  mode: 'lines+markers',
  marker: {
    color: 'white',
    size: 5
  },
  line: {
    color: 'red',
    
  }
};

var trace2 = {
  x: apple,
  y: banana,
  
  name: 'Avg Wpm',
  mode: 'lines+markers',
  marker: {
    color: 'white',
    size: 5
  },
  line: {
    color: 'orange',
  }
};


var data = [trace1, trace2];

var layout = {
  height: 500,
  xaxis: {
    title: 'Time',
     range: range,
    type: 'date',
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'yellow'
    },
    showticklabels: true,
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
    zerolinecolor: 'white',
    tickangle: 'auto',
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 20,
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
    
    
  },
  paper_bgcolor: 'black',
  plot_bgcolor: 'transparent',
};



Plotly.newPlot('graphstat', data, layout, {responsive: true});






var datak = [{
  values: [AVGacc,(100-AVGacc)],
  labels: ['AVG Accuracy', 'AVG Errors'],
  hoverinfo: 'label+percent',
  hole: .6,
  type: 'pie'

},
];

var layout = {
   legend: {

    font: {
      family: 'sans-serif',
      size: 15,
      color: 'white'
    },
    
  },
  

   paper_bgcolor: 'black',
  plot_bgcolor: 'transparent',



};

Plotly.newPlot('graphstattwo', datak, layout, {responsive: true});



var datal = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: AVGwpm,
    title: { text: "Average WPM" },
    titlefont: {
      color: "white"
    },
    type: "indicator",
    mode: "gauge+number",
    delta: { reference: 400 },
    gauge: { axis: { range: [null, 250] } }
  }
];

var layout = { 
  paper_bgcolor: 'black',
  plot_bgcolor: 'transparent',
   };
Plotly.newPlot(graphstatthree, datal, layout, {responsive: true});



}
  }  






 

 


  else {
    console.log("user signed out")
     document.querySelector(".rowone").style.display = "none"
    document.querySelector(".row").style.display = "none"

 apple = []
 orange = []
 banana = []
 AVGacc = 0;
 AVGwpm = 0;
 count = 0;
 Totalacc = 0;
 Totalwpm = 0;
 range = [];

    setTimeout(message, 1500)
    function message(){
    document.querySelector(".advice").style.display = "block"
    }

      
  }
 })
  











