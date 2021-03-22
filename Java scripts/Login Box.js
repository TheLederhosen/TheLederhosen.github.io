
function Login() {
    document.getElementById("Login-Background").style.display = "block";
}

function Loginoff() {
    document.getElementById("Login-Background").style.display = "none";
}

function validatePass(){
    if(document.getElementById('password').value == 'Password1'){
        window.location.href = '../Client-Pictures/Client 1/Client-Pictures 1.html';
    }
	else if (document.getElementById('password').value == 'Password2'){
        window.location.href = '../Client-Pictures/Client 2/Client-Pictures 2.html';
    }
	else if (document.getElementById('password').value == 'Password3'){
        window.location.href = '../Client-Pictures/Client 3/Client-Pictures 3.html';
    }
	else if (document.getElementById('password').value == 'Password4'){
        window.location.href = '../Client-Pictures/Client 4/Client-Pictures 4.html';
    }
	else if (document.getElementById('password').value == 'Password5'){
        window.location.href = '../Client-Pictures/Client 5/Client-Pictures 5.html';
    }
    else if (document.getElementById('password').value == 'Password6'){
        window.location.href = '../Client-Pictures/Client 6/Client-Pictures 6.html';
    }
    else if (document.getElementById('password').value == 'Password7'){
        window.location.href = '../Client-Pictures/Client 7/Client-Pictures 7.html';
    }
    else if (document.getElementById('password').value == 'Password8'){
        window.location.href = '../Client-Pictures/Client 8/Client-Pictures 8.html';
    }
    else if (document.getElementById('password').value == 'Password9'){
        window.location.href = '../Client-Pictures/Client 9/Client-Pictures 9.html';
    }
    else if (document.getElementById('password').value == 'Password10'){
        window.location.href = '../Client-Pictures/Client 10/Client-Pictures 10.html';
    }

	
	else{
        alert('Incorrect Code');
        
    }
}

function checkSubmit(e) {
   if (e && e.keyCode == 13) {
         validatePass();
	}
}
