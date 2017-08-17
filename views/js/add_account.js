let json_accounts = [];

// let json_accounts = {
// 		id: 1,
// 		name: "name",
// 		email: "email@gmail.com",
// 		password: "password"
// 	}
try{
	let tmp_accounts = JSON.parse(localStorage.getItem("json_accounts"));

	tmp_accounts.map((account)=>{
		console.log(account);
		json_accounts.push(account);
	});
	/*for(let i=0;i<tmp_accounts.length;i++){
		let account = {
			name: tmp_accounts[i].name,
			email: tmp_accounts[i].email,
			username: tmp_accounts[i].username,
			password: tmp_accounts[i].password,
			confirm: tmp_accounts[i].confirm			
		}
		json_accounts.push(account);
	}*/
}
catch(TypeError){
	localStorage.setItem('json_accounts',JSON.stringify(json_accounts));
}
function createUser(){
	let username= document.querySelector('#username').value;
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	let newAccount = {
		username: id,
		email: name,
		password: password

	}

	json_accounts.push(newAccount);

	localStorage.setItem('json_accounts',JSON.stringify(json_accounts));
	// let jns_retrieve = localStorage.getItem('json_accounts');
	// console.log(jns_retrieve);
	// let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
	// console.log(jns_parse);
	// //Display in console inside of json array
	// console.log("Name is " + jns_parse[0].name);
	// console.log("Email is " + jns_parse[0].email);
}


 function readUser(){


          let jns_parse = JSON.parse(localStorage.getItem('json_accounts'));
          console.log(jns_parse);

          let html=``;
          jns_parse.map((name)=>{
      
          html += `
          <tr>
                <td>${name.username}</td>
                <td>${name.email}</td>
                <td>${name.password}</td>
                <td><img src="http://lorempixel.com/100/100/people/"/></td>
            </tr>
          `;
          });
          document.querySelector('#tblNames').innerHTML = html;
 }





//  function validate(){
// var name = document.getElementById("name").value;
// var password = document.getElementById("password").value;
// if ( username == "name1" && password == "password1"){
// alert ("Login successfully");
//   }
//   else{
//     alert("Invalid username or password");
//     }
//   return false;
//   }




// function del(){
// 	let id= document.querySelector('#id').value;

// 	if (getElementById==id)
// }