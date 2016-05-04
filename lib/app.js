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




      var counter = 0;

      new WOW().init();