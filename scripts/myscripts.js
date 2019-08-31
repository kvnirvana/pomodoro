// Event listeners
document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("workAdd").addEventListener("click", incrementWork);
document.getElementById("workDecrement").addEventListener("click", decrementWork);
document.getElementById("breakAdd").addEventListener("click", incrementBreak);
document.getElementById("breakDecrement").addEventListener("click", decrementBreak);
document.getElementById("reset").addEventListener("click", reset);



// Variables
let minutes = 1
let seconds = 10
let Timebreak = 5


//getElements
document.getElementById('workframe').textContent = minutes;
document.getElementById('breakframe').textContent = Timebreak


// Functions
    document.getElementById('number').textContent = `${minutes}:${seconds}`


   function play() {
        myTimer = setInterval(myClock, 1000);
    }

    function pause() {
        clearInterval(myTimer);
    }

    function reset() {
  
       }

    function incrementWork(){      
        minutes++    
       document.getElementById('number').textContent = `${minutes}:${seconds}`
       document.getElementById('workframe').textContent = minutes;
    }

    function incrementBreak(){
        Timebreak++    
        document.getElementById('breakframe').textContent = Timebreak;
    }

    function decrementBreak(){   
        Timebreak--   
        document.getElementById('breakframe').textContent = Timebreak;
    }

    function decrementWork(){
        minutes--    
        document.getElementById('number').textContent = `${minutes}:${seconds}`
        document.getElementById('workframe').textContent = minutes;
    }

       
        function myClock() {  
       

            if (seconds == 0) {
                if (minutes == 0) {
                    
                        happySmiley();
                       
                   
                }
                minutes--;
                if (minutes < 10) minutes = "0" + minutes;
                seconds = 59;
            }
            else seconds--;
    
            if (seconds < 10) seconds = "0" + seconds;
    
            document.getElementById("number").innerHTML = `${minutes}:${seconds}`
            
        }

        
        sadSmiley()
        function sadSmiley() {
                var x = document.createElement("IMG");
                x.setAttribute("src", "images/sad.png");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "Sad");
                document.body.appendChild(x);
    
                var element = document.getElementById("mood");
                element.appendChild(x);
             
          }

         function happySmiley(){
            var z = document.createElement("IMG");
            z.setAttribute("src", "images/happy.png");
            z.setAttribute("width", "304");
            z.setAttribute("height", "228");
            z.setAttribute("alt", "Happy");
            var item = document.getElementById("mood")

            item.replaceChild(x, z);
        }
     

 