function findVotes(){
	let booth = document.getElementById('booth').value;
	if(booth == "136 - સાબલવાડ કંપા (જનકપુરા)"){
		document.getElementById('total_booth_votes').value = "352";
	}
	else if(booth == "103 - કાવા - ૧"){
		document.getElementById('total_booth_votes').value = "1112";
	}
	else if(booth == "104 - કાવા - ૨"){
		document.getElementById('total_booth_votes').value = "744";
	}
	else if(booth == "107 - મહીવાડા"){
		document.getElementById('total_booth_votes').value = "565";
	}
	else if(booth == "108 - અચરાલ"){
		document.getElementById('total_booth_votes').value = "752";
	}
	else if(booth == "105 - ગુલાબપુરા"){
		document.getElementById('total_booth_votes').value = "483";
	}
	else if(booth == "106 - બાદરપુરા"){
		document.getElementById('total_booth_votes').value = "515";
	}
	else if(booth == "109 - મોવતપુરા"){
		document.getElementById('total_booth_votes').value = "631";
	}
	else if(booth == "110 - કલ્યાણપુરા"){
		document.getElementById('total_booth_votes').value = "494";
	}
	else if(booth == "111 - રાઓલ"){
		document.getElementById('total_booth_votes').value = "1088";
	}
	else if(booth == "112 - કમાલપુર"){
		document.getElementById('total_booth_votes').value = "1086";
	}
	else{
		document.getElementById('total_booth_votes').value = "Error";
	}
	
}

function findTotal() {
	var arr = document.getElementsByName('qty');
	var tot = 0;
  
	for (var i = 0; i < arr.length; i++) {
	  if (parseInt(arr[i].value))
		tot += parseInt(arr[i].value);
	}
  
	document.getElementById('total').value = tot;

  }

//   function findPercent(){
// 	let booth = document.getElementById('total_booth_votes').value;
// 	let total = document.getElementById('total').value;
// 	var percent = ((total * 100) / booth).toFixed(2);
// 	document.getElementById('total_booth_percentage').value = percent;
//   }
  


function sendToWhatsapp(){
	let number = "+919429235365";

	let booth = document.getElementById('booth').value;
	let time = document.getElementById('time').value;
	let male = document.getElementById('male').value;
	let female = document.getElementById('female').value;
	let other = document.getElementById('other').value;
	let total = document.getElementById('total').value;
	let cu_total = document.getElementById('cu_total').value;
	let total_booth_votes = document.getElementById('total_booth_votes').value;
	let mokpoll_agent = document.getElementById('mokpoll_agent').value;
	let vote_agent = document.getElementById('vote_agent').value;
	var percent = ((total * 100) / total_booth_votes).toFixed(2);

	var url = "https://wa.me/" + number + "?text="
	+ "*Route No 31* " + "%0a%0a"
	+ "બૂથનું નામ: " +booth+ "%0a"
	+ "કુલ મતદાર: " +total_booth_votes+ "%0a"
	+ "સમય : " +time+ "%0a%0a"
	+ "પુરુષ : " +male+ "%0a"
	+ "સ્ત્રી : " +female+ "%0a"
	+ "અન્ય : " +other+ "%0a%0a"
	+ "ટોટલ : " +total+ "%0a"
	+ "CU મુજબ ટોટલ : " +cu_total+ "%0a%0a"
	+ "મતદાન ટકાવારી : " +percent+ "%0a%0a"
	+ "મોકપોલ એજંટની સંખ્યા : " +mokpoll_agent+ "%0a"
	+ "વોટ એજંટની સંખ્યા : " +vote_agent+ "%0a";


	window.open(url, '_blank').focus();
}
