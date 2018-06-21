
function SetNode(nodename) {
	var tar=window.document.getElementById("documents"+nodename);
	var tar_img=window.document.getElementById("image"+nodename);
	var tar_nodeimg=window.document.getElementById("nodeimage"+nodename);
	if (tar.style.display == "none") {
		tar_img.src="img/minus.png";
		tar_nodeimg.src="img/open.png";
		tar.style.display="block";
	}
	else {
		tar_img.src="img/plus.png";
		tar_nodeimg.src="img/closed.png";
		tar.style.display="none";
	}
}
function openW(url) {
	return window.open(url);
}
