var colorArr = ["red", "black", "blue", "yellow"],
	container = document.querySelector("#container"),
	delay = 100,
	i = 0;

setInterval(function(){
	container.style.backgroundColor = colorArr[i];
	i = i % 4;
	i ++;
}, delay);