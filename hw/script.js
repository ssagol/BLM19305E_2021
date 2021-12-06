    
    var div = document.getElementById('text');
    var str = div.textContent, interval = 435;

        function colorTransition(){
        for (let i=0; i<str.length; i++) {
            div.innerHTML=str;
            setTimeout(function(){
            var letters = str.split('');
            letters.splice(i,1,'<span style="color:rgb(44, 42, 165);">'+letters[i]+'</span>')
            div.innerHTML=letters.join('');
            },i*interval);
        }
        }
    colorTransition();
    setInterval(colorTransition, str.length*interval);

    /////////////////////////////////////////////

    const text = document.querySelector(".intro");
    const strText = text.textContent;
    const splitText = strText.split("") 
    text.textContent = " "; 

    for(let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<spank>" + splitText[i] + "</spank>";
    }

    let char =0;
    let timer = setInterval(onTick, 250);

        function onTick() {
            
            const spank = text.querySelectorAll('spank')[char];
            spank.classList.add('fade');
            char++;
            
            if(char === splitText.length){
                complete();
                return;
            }
        }

        function complete() {
            clearInterval(timer);
            timer = null;
        }

    //////////////////////////////////////////////////

    window.onload=function(){
    document.getElementById("d2").onclick = slideIt;
    };

        function slideIt()
        {
        var slidingDiv = document.getElementById("d1");
        var stopPosition = 200; 
        if (parseInt(slidingDiv.style.left) < stopPosition )
        {
            slidingDiv.style.left = parseInt(slidingDiv.style.left) + 2 + "px";
            setTimeout(slideIt, 1);
        }

    }
