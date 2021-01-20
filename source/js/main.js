function accordions(btn){
   btn.forEach(item => {
      item.addEventListener('click', function() {      
         item.parentNode.classList.toggle('active');
      });
   });
}

let btn1 = document.querySelectorAll('.accordion__ttile');
accordions(btn1);

let btn2 = document.querySelectorAll('.work__intro');
accordions(btn2);

let btn3 = document.querySelectorAll('span.pixel-perfect') 
accordions(btn3);


let dor = btn3.parentNode;
