function SetNode(nodename) {
	var tar=window.document.getElementById("documents"+nodename);
	var tar_img=window.document.getElementById("image"+nodename);
	//alert(tar.style.display);
	if (tar.style.display == "none") {
		tar_img.src="img/open.png";
		tar.style.display="block";
	}
	else {
		tar_img.src="img/closed.png";
		tar.style.display="none";
	}
}
