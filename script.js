function submitHandler() {
    var question1Answer = document.getElementById('first').value;
    var question2Answer = document.getElementById('second').value;
    var question3Answer = document.getElementById('third').value;

    var topMessage = ['Wrong', 'Fair', 'Excellent'];

    var message;

    var response = 0;

    if ( question1Answer == 'Kampala' ){
        response++;
    }

    if ( question2Answer == 'Nairobi' ){
        response++;
    }

    if ( question3Answer == 'Dodoma' ){
        response++;
    }

    if( response <= 0){
        message = 0;
    }

    if( response > 0 && response < 3 ){
        message = 1;
    }

    if (response > 3){
        message = 2;
    }

    if( response > 2 && response < 4){
        message = 1;
    }

    if (response > 3) {
        message = 2;
    }



    document.getElementById('response').style.visibility = 'visible';

    document.getElementById('messages').innerHTML = topMessage[message];

    document.getElementById('number-correct').innerHTML = "You've got "+ response +" correct."

};
