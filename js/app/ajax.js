
//Browser Support Code
function ajaxFunction(DivId,GetURL){
	var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById(DivId);
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
    var ajaxDisplay = document.getElementById(DivId);
    //ajaxDisplay.innerHTML = "<img src='/assets/img/ajax-loader-bar.gif'>";
	ajaxDisplay.innerHTML = "loading...";

	ajaxRequest.open("GET", GetURL, true);
	ajaxRequest.send(null); 
}
function ajaxFunctionValue(DivId,GetURL){
	var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById(DivId);
			ajaxDisplay.value = ajaxRequest.responseText;
		}
	}
    var ajaxDisplay = document.getElementById(DivId);
    ajaxDisplay.value = "Wait...";

	ajaxRequest.open("GET", GetURL, true);
	ajaxRequest.send(null); 
}


