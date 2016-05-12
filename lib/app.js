      function askName() {
            var firstName = $('#firstName').val();
            var lastName = $('#lastName').val();
            $('.intro-txt').hide();
            $('.game-intro').show();
            $('.first-name-text').text(firstName);
            $('.last-name-text').text(lastName);
      }



      function countPeople() {
            counter = counter + 1;
            askName();


      }


      function gameIntro() {
            $('.game-intro').hide();
            $('.actual-game').show();
            captchaGame();
      }

      function actualGame() {
            $('.actual-game').hide();
            var test = $('.game-complete');
            $('.game-complete').show();
      }


      function captchaGame() {
            //create an array to hold the texts list
            var text = ["PoPtArTs","KiTtY cAt","MeOw","GaLaXy"];
            //get a random number
            var randomNumber = text[Math.floor(Math.random() * (text.length))];
            //get a random text by getting the text at the random index
            var randomText = text[randomNumber]
            //put the text onto the screen (do it by replacing text in an element on the screen)
            $('.captcha').text(randomText);
            //inside timer
            setTimeout(function(){

	      alert("Time is up! Next!");

            },5000);
            //get the user’s text
            var captchaText = $('.captcha-text').val();
            //check the user’s text against the random text
            if (captchaText == randomText){
                  $('.correct').show();

            }else{
                $('.not-correct').show();  
            }
            //alert the user one message if correct
            //alert another message if incorrect


      }
      
      var counter = 0;

      new WOW().init();