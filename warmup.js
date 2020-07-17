
function ifTrue(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var res ;


	if (question1 == "painting" && question2 == '18' && question3 == 'beach' ) {
		res = 0;
    }
	if (question1 == "dancing" && question2 == '27' && question3 == 'adventure' ) {
		res = 1;
    }	
    if (question1 == "dancing" && question2 == '37' && question3 == 'camping' ) {
		res = 2;
    }
	if (question1 == "sport" && question2 == '32' && question3 == 'party' ) {
		res = 3;
    }
    if (question1 == "singing" && question2 == '18' && question3 == 'party' ) {
		res = 4;
    }
	if (question1 == "sport" && question2 == '27' && question3 == 'adventure' ) {
		res = 5;
    }
    if (question1 == "sport" && question2 == '37' && question3 == 'camping' ) {
		res = 6;
    }
    if (question1 == "singing" && question2 == '18' && question3 == 'party' ) {
		res = 7;
    }
	
	var pictures = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHkQ6W4kULhWeuMttxYbj1SOlxfBeRMb8LvQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6_vVg19K_HOW6xPhaVi2o0q13EL5hr0N5Uw&usqp=CAU", "gif/wasteRes.gif"];
	var messages = ["Camilia ",'Selena Gomez','Maria ','Sirina Williams','Sara ','Mia'];
	var score;
	var love = document.querySelector('.love-me')
   	var hate = document.querySelector('.x')
   	// $(love).on('click',function() {
   	// 	$('#submit').hide()
   	// 	// $('#submit').show()
   	// })
	// $('.love-me ').on(click,function() {
 //    	$('submit').hide()
 //    })
    setInterval(function(){ 
      var random = Math.random()
      if (random > 0.5) {
      	love.click()
      }else {
      	hate.click()
      }
     
     }, 3000);
     

	// if (res === 0) {
	// 	score = 2;
	// }

	// if (res > 0 && res <= 4) {
	// 	score = 1;
	// }

	// if (res === 5) {
	// 	score = 0;
	// }

	document.getElementById("submit").style.visibility = "visible";
	// style.visibility property returns an element when it should be visible

	document.getElementById("message").innerHTML = messages[res] ;
	document.getElementById("correctNumber").innerHTML = "This is your match !";
	document.getElementById("picture").src = pictures[res];
    
    
		


	if (res === undefined ) {
       alert('What are you looking for ?')
       document.getElementById("submit").style.visibility = "collapse";
	 }
	}




	$('#button1').after('#quiz')
	
