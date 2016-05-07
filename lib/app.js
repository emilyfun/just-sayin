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
            //get a random text by getting the text at the random index
            //put the text onto the screen (do it by replacing text in an element on the screen)
    
            //inside timer
            //get the user’s text
            //check the user’s text against the random text
            //alert the user one message if correct
            //alert another message if incorrect


      }
      
      var counter = 0;

      new WOW().init();