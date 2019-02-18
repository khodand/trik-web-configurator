setInterval(function() {
	var elementsByClass = document.getElementsByClassName("n");
	var xhr = [];
	for (var i = 2; i < elementsByClass.length; i++) {
	var elements = elementsByClass[i].getElementsByTagName('a');
	xhr[i] = new XMLHttpRequest();
	xhr[i].open("POST", "/cgi-bin/logs.sh", false);
	xhr[i].setRequestHeader('Content-Type', 'text-plain');
	xhr[i].send(elements[0].href);
		if (xhr[i].readyState == 4 && xhr[i].status == "200") {
		//	console.
			if (xhr[i].responseText == "True") {
				elements[0].style.background = "red";
			}
			else {
				elements[0].style.background = "green";
			}
		}
	}
}
,10000)
