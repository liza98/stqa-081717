function isLogin(){
		let email = document.querySelector('#email').value;
		let password = document.querySelector('#password').value;
		let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
	

		if(email == jns_parse.email && password == jns_parse.password){
			let html = `
				<a href="/index"/>
			`;
		}
		else{
			alert("No account existed!");
		}
}


   function validate2(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( email == "email1" && password == "password1"){
alert ("Login successfully");
  }
  else{
    alert("Invalid username or password");
    }
  return false;
  }