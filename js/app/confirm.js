function confirmation(link,text) {
	if(!text){var text="Are you sure you want to delete the record?";}
	var digone=Math.floor((Math.random()*10)+1); 
	var digtwo=Math.floor((Math.random()*10)+1); 
	var digans=digone+digtwo;
    var answer=prompt(text,digone+"+"+digtwo+"=?"); 
    if (answer==digans){
        //alert("Record is changed or deleted!")
            window.location = link;
    }
    else{ 
        alert("Wrong answer!\nSupposed to be "+digans+"\nStart from the beginning!!!");
        }
}
function goto(link) {   
            window.location = link;
}

function leavecomment(link,text) {
	if(text=='')text="Leave your comment";
	var answer=prompt(text,""); 
	if (answer!=''&&answer!=null){
		link=link+"&comments="+answer;
		//alert("Done!"+link);
		window.location = link;
	}
	else{
		alert("No comment left  \n Try again");
	}
}

