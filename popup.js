window.onload = function() {

    document.getElementById("fantastic").onmouseover = function() { hover1() };
    document.getElementById("good").onmouseover = function() { hover2() };
    document.getElementById("confused").onmouseover = function() { hover3() };
    document.getElementById("sad").onmouseover = function() { hover4() };
    document.getElementById("miserable").onmouseover = function() { hover5() };

    document.getElementById("fantastic").onmouseout = function() { hover1() };
    document.getElementById("good").onmouseover = function() { hover2() };
    document.getElementById("confused").onmouseover = function() { hover3() };
    document.getElementById("sad").onmouseover = function() { hover4() };
    document.getElementById("miserable").onmouseover = function() { hover5() };

    function hover1() {
        document.getElementById("mood-sticker").src= "assets/fantastic.png";
    
    }

    function hover2() {
        document.getElementById("mood-sticker").src="assets/happy.png";
        
    }

    function hover3() {
        document.getElementById("mood-sticker").src="assets/confused.png";
    }

    function hover4() {
        document.getElementById("mood-sticker").src="assets/sad.png";
    }

    function hover5() {
        document.getElementById("mood-sticker").src="assets/miserable.png";
    }

}