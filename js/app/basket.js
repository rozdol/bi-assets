
//Browser Support Code
var basketitems='';
var basketqty=0;
var strOutput ='';
//var basketaaray = '';
 
function basket_additem(vin){
	if (basketitems.indexOf(vin) ==-1)
  {
  	 if (basketitems!='')basketitems=basketitems+",";
    
  	   basketitems=basketitems+vin;
  	   basketqty++;
	     //alert(basketitems+" is added");
	 
  }	
  //basketaaray=basketitems.split(",");
  var ajaxDisplay = document.getElementById('childs_');
  ajaxDisplay.innerHTML = "<div class='shoppingcart'>Content:"+basketitems+"<br>Items:"+basketqty+" <a href=\"?act=save&what=shoppingcart&func=add&opt=&id="+basketitems+"\" onClick=\"addtocart();\"><i class='icon-check icon-white'></i></a> <a><i class='icon-remove icon-white' onClick=\"cleancart();\"></i></a></div>";	
}
function addtocart(vin){
	   //alert(basketitems+" are added to the cart");
	   basketitems='';
	   basketqty=0;
	   var ajaxDisplay = document.getElementById('childs_');
	   ajaxDisplay.innerHTML = "";
	   
}
function cleancart(vin){
	   basketitems='';
	   basketqty=0;
	  var ajaxDisplay = document.getElementById('childs_');
	   ajaxDisplay.innerHTML ="";
	   //alert("");
}


