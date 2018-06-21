function thousands(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

function CV(element_id, newvalue)	{
	var element = document.getElementById(element_id);
	if (element!=null){
		element.value = newvalue;
		alert("ElementID: "+element_id+" value: "+newvalue);
	}else{
		alert("Element: "+element_id+" NOT FOUND!!!  for value:"+newvalue);
	}
	return null; 
}

function LFITE(url, element_id) {	
	var data;
	var element = document.getElementById(element_id);
	if (element==null){alert("Element: "+element_id+" NOT FOUND!!!"); }
	element.innerHTML = "<em>Loading ...</em>";
	//alert("URL: "+url); 
	// code for Mozilla, etc. 
	if (window.XMLHttpRequest) 
	{ 
		xmlhttp=new XMLHttpRequest();  
	} 
	// code for IE 
	else if (window.ActiveXObject) 
	{ 
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP") 
	} 	 
	if (xmlhttp) 
	{ 
		xmlhttp.open("GET",url,true); 	 
		xmlhttp.onreadystatechange = function() {	 
			if (xmlhttp.readyState == 4) 
			{ 
				if (xmlhttp.status == 200) 
				{ 
					data=xmlhttp.responseText;
					//alert("XML data OK:"+data); 
					element.innerHTML = data;
				} 
				else 
				{ 
					alert("Problem retrieving XML data "+element_id) 
				} 
			} 
		}        
		if (window.XMLHttpRequest) 
		xmlhttp.send(null); 
		else 
		xmlhttp.send(); 
	}
	return null;     	 
}

function newElement(type,att,evts,appendToObj){

	var elem;
	if(isNameQuirk() && att.name != null){
		elem = document.createElement('<' + type + ' name="' + att.name + '" id="' + att.id + '">');
	}
	else{
		elem = document.createElement(type);
	}

	for(var prop in att){
		elem.setAttribute(prop,att[prop]);
	}

	if(evts){
		for(var evt in evts){
			elem[evt] = evts[evt];
		}
	}

	if(appendToObj){
		appendToObj.appendChild(elem);
	}

	return elem;

}


function isNameQuirk(){
	var elem1 = document.createElement("div");
	var elem2 = document.createElement("input");
	elem2.type = "hidden";
	elem2.name = "testName";
	elem1.appendChild(elem2);
	var isQuirk = (elem1.innerHTML.indexOf("test") == -1);
	isNameQuirk = function() {return isQuirk;}
	return isNameQuirk();
}
