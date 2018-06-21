var expanded='';
var contracted='';
function SetNode(nodename) {
	var tar=window.document.getElementById("documents"+nodename);
	var tar_img=window.document.getElementById("image"+nodename);
	if (tar.style.display == "none") {
		tar_img.src="img/open.png";
		tar.style.display="block";
		if (expanded.indexOf(nodename) ==-1)
		{
			if (expanded!='')expanded=expanded+",";
			expanded=expanded+nodename;
		}

	}
	else {
		tar_img.src="img/closed.png";
		tar.style.display="none";
		if (contracted.indexOf(nodename) ==-1)
		{
			if (contracted!='')contracted=contracted+",";
			contracted=contracted+nodename;
		}
	}
}
function SetAllNodesOpen(str1) {
	var arr=str1.split(",");
	var len=arr.length;
	for(i=0; i<len; i++) {
		var value = arr[i];
		tar=window.document.getElementById("documents"+value);
		if((tar!=null)&&(tar.style.display == "none"))tar.style.display="block";
	}
}
function SetAllNodesClosed(str1) {
	var arr=str1.split(",");
	var len=arr.length;
	for(i=0; i<len; i++) {
		var value = arr[i];
		tar=window.document.getElementById("documents"+value);
		if((tar!=null)&&(tar.style.display == "block"))tar.style.display="none";
	}
}
getCookie=function(Name){ //get cookie value
	var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
	if (document.cookie.match(re)) //if cookie found
	return document.cookie.match(re)[0].split("=")[1] //return its value
	return ""
}

setCookie=function(name, value, days){ //set cookei value
	var expireDate = new Date()
	//set "expstring" to either future or past date, to set or delete cookie, respectively
	var expstring=expireDate.setDate(expireDate.getDate()+parseInt(days))
	document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

searcharray=function(thearray, value){ //searches an array for the entered value. If found, delete value from array
	var isfound=false
	for (var i=0; i<thearray.length; i++){
		if (thearray[i]==value){
			isfound=true
			thearray.shift() //delete this element from array for efficiency sake
			break
		}
	}
	return isfound
}
