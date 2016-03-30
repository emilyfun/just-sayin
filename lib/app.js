      function askName() {
            var name = $('#firstName').val();
             var name = $('#lastName').val();
            alert(firstName + " " + lastName + " " + "you are a beautiful nyan cat! " + counter + " People have pushed this button.");

        }



        function countPeople() {
            counter = counter + 1;
            askName();
        
      
        }







        var counter = 0;

new WOW().init();