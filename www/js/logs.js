setInterval(function() {
	var elementsByClass = document.getElementsByClassName("n");
	for (var i = 2; i < elementsByClass.length; i++) {
		elements = x[i].getElementsByTagName("a");
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "/cgi-bin/logs.sh", false);
		xhr.setRequestHeader('Content-Type', 'text-plain');
		xhr.send(elements[0].innerHtml);
		if (xhr.responseText === "True") {
			elements[0].style.background = "red";
		}
	}
}
,2000)
