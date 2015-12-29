var doc = document,
	msgForm = doc.querySelector("#msg-form"),
	msgWrap = doc.querySelector("#msg-wrap"),
	msgInput = doc.querySelector("#msg-input"),
	submitBtn = doc.querySelector("#submit-btn");


// msgForm.onsubmit = function() {
// 	return false;
// }

msgForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var message = msgInput.value;
	var p = document.createElement("p");
	p.className = "message";
	p.innerText = message;
	msgWrap.appendChild(p);
	// msgWrap.innerHTML += '<p class="message">' + message + '<\p>'	
});

// submitBtn.addEventListener("click", function() {

// });

// msgForm.addEventListener("keydown", function(event) {
// 	if(event.keyCode === 13) {
// 		var message = msgInput.value;
// 		msgWrap.innerHTML += '<p class="message">' + message + '<\p>'
// 	}
// });
// msgForm.onsubmit = function() {
// 	return false;
// }

// function sendMsg() {
// 	// event.preventDefault();
// 	message = msgInput.value;
// 	msgInput.value = '';
// 	if(message == '') {
// 		 alert("please input message")	
// 	} else {
// 		var p = doc.createElement("p");
// 		p.className = "message";
// 		p.innerText = message;
// 		msgWrap.appendChild(p);
// 		// msgWrap.innerHTML += '</p class+"message">' + message + '</p>';
// 	}
// }
// msgForm.addEventListener("submit", sendMsg);

// msgForm.addEventListener("keydown", function(event) {
// 	// console.log(event.keyCode);
// 	if(event.keyCode === 13) {
// 		// msgForm.submit();
// 		sendMsg();
// 	}
// })


// msgForm.removeEventListener("submit", msgForm.submit);
// msgForm.addEventListener("submit", function() {
// 	return false;
// });