var celeb ={
'elon musk': "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image1.jpg",
'bill gate' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image2.jpg",
'jeff bezos' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image3.jpg",
'larry page' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image7.jpeg",
'sergey brin' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image8.jpg",
'mark zuckerberg' : 'file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image6.jpg',
'larry ellison' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image10.jpg",
'steve jobs': "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image5.jpg",
'linus torvalds':'file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image4.jpg',
'jack dorsey' : 'file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/image9.webp',
'game over' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/game-over.jpg"
}

var hang={
    'hang0' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang0.png",
    'hang1' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang1.png",
    'hang2' :  "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang2.png",
    'hang3' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang3.png" ,
    'hang4' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang4.png" ,
    'hang5' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang5.png" ,
    'hang6' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang6.png" ,
    'hang7' : "file:///C:/Users/abdelmounaim/coding/homework-w3/word-guess-game/assets/images/hang7.png" ,
}


var boolean2 = true;
var boolean3 = true;
var boolean4 = false;
var scre = document.getElementById('score');
var score = 0;

; 

document.onkeypress = function(event) {
    if (boolean3){ 
        mainfunction(event) ;
        
    }
    boolean3=false; 
};
    // initial state
function mainfunction() { 

var y = Object.entries(hang)[0];
var hagy = y[1];
document.getElementById("imgscore").setAttribute("src", hagy);
var score=0;
var x = Math.floor(Math.random() * 10);
var i= Object.entries(celeb)[x];
var obje1 = i[1];
document.getElementById("imgpers").setAttribute("src", obje1);

var obje2 = i[0];
var l = obje2.length;
var arraychar= [""];
var arraydash=[""];

var cword = document.getElementById("curword");
cword.textContent= "";


for(c = 0; c < l;c++){
    arraychar[c] = obje2.charAt(c);
    
    if(arraychar[c] !== " "){
        arraydash[c] = "-"
        
    }else{
        arraydash[c]= " "
         
    }
    cword.textContent = cword.textContent + arraydash[c];
    
}
var hangcount= 1;
//  when playing

boolean2= true;

document.onkeyup = function(event){ 
    if(boolean2){
    myfunction(event);}


}; 





function myfunction() {
    

    if(boolean2) {
    letag.textContent = letag.textContent + event.key + ',';
    var keyp= event.key;
    boolean1 = true;
    for(f = 0; f < l;f++){
        if(arraychar[f] == keyp){
            arraydash[f]= event.key;
            cword.textContent = arraydash.join('');
            boolean1= false;
        }  
    }
    if(boolean1){
         var arrayhang = Object.entries(hang)[hangcount];
        document.getElementById("imgscore").setAttribute("src", arrayhang[1]);
        hangcount++;
        if (hangcount == 8)
        {
            var p= Object.entries(celeb)[10];
            var arraygo = p[1];
            document.getElementById("imgpers").setAttribute("src", arraygo);
            boolean2= false;
            boolean3=true;
            letag.textContent = '';
            scre.textContent = '0';
        }
    }
    if (arraychar.toString()==arraydash.toString()){
        boolean4= true;
        boolean2= false;
        boolean3=true;
        
        if(boolean4){ 
            score = parseInt(scre.textContent);
            score = score + 1;
            scre.textContent= +score;
            letag.textContent = '';
            
        }}

}
  console.log(boolean2);  
  return;
}

}

