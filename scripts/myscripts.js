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
let seconds = 0
let Timebreak = 5


//getElements
document.getElementById('workframe').textContent = minutes;
document.getElementById('breakframe').textContent = Timebreak


// Functions
display()
    
    function display(){
    if(seconds.toString().length < 2) seconds = "0"+seconds;   
    document.getElementById('number').textContent = `${minutes}:${seconds}`
    }

   function play() {
        myTimer = setInterval(myClock, 1000);
    }

    function pause() {
        clearInterval(myTimer);
    }

    function reset() {
        clearInterval(myTimer);
        minutes = 25
        seconds = 0
        Timebreak = 5
        document.getElementById('workframe').textContent = minutes;
        document.getElementById('breakframe').textContent = Timebreak
        display()
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
                Timbreak() 
                }
            minutes--;
            if (minutes < 10) minutes = "0" + minutes;
            seconds = 59;
        }
        else seconds--;    
        if (seconds < 10) seconds = "0" + seconds;   
        document.getElementById("number").innerHTML = `${minutes}:${seconds}`
        }


      
    function Timbreak(){
        Timebreak--;
        document.getElementById("number").innerHTML = `${Timebreak}:${seconds}`
        }


    function happySmiley(){
        // Create an empty element node
        // without an ID, any attributes, or any content
        var sp1 = document.createElement("img");
        sp1.src = 'images/happy.png';
        sp1.setAttribute('width', '200px');

        // Give it an id attribute 
        sp1.id = "newSpan";


        // Build a reference to the existing node to be replaced
        var sp2 = document.getElementById("mood");
        var parentDiv = sp2.parentNode;

        // Replace existing node sp2 with the new span element sp1
        parentDiv.replaceChild(sp1, sp2);


        //Time for break - create element
        var sp11 = document.createElement("h1");

        // Give it an id attribute 
        sp11.id = "timeForABreak";
        sp11.style.textAlign = "center";
        // Create some content for the new element.
        var sp11_content = document.createTextNode("Time for a break");

        // Apply that content to the new element
        sp11.appendChild(sp11_content);

        // Build a reference to the existing node to be replaced
        var sp21 = document.getElementById("timeToWork");
        var parentDiv = sp21.parentNode;

        // Replace existing node sp2 with the new span element sp1
        parentDiv.replaceChild(sp11, sp21);
        }
     

 