
(function myFunction1(){ 
    const frst = document.getElementById('first');
    frst.addEventListener('mouseover',function(){ 
        document.getElementById('sppp').src = "images.png";
        document.getElementById('txt').innerText= "first Speacker's name";
        document.getElementById('textname').innerText= "first Speaker's name";
    });
   
})();

(function myFunction2(){ 
    const scnd = document.getElementById('second');
    scnd.addEventListener('mouseover',function(){ 
        document.getElementById('sppp').src = "images1.png";
        document.getElementById('txt').innerText= "Second Speacker's name";
        document.getElementById('textname').innerText= "Second Speaker's name";
    });
   
})();
(function myFunction3(){ 
    const thrd = document.getElementById('third');
    thrd.addEventListener('mouseover',function(){ 
        document.getElementById('sppp').src = "images2.png";
        document.getElementById('txt').innerText= "third Speacker's name";
        document.getElementById('textname').innerText= "third Speaker's name";   
    });
   
})();


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "03/15/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }()); 

    
const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
        
        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        
        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));

 