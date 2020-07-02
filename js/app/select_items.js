var cart_list = new Array();
var cart_total = 0;
submit_btn = document.createElement('span');
clear_btn = document.createElement('span');
cart_content = document.createElement('div');
msg_content = document.createElement('div');
loading_content = document.createElement('div');

function makeGetRequest(url) {
    return $.ajax({
            url: url,
            method: "GET",
            async: false
        });
}

function submit_cart(){
  //var myJsonString = JSON.stringify(cart_list);
  var myJsonString = cart_list.join(",");
  $('<form>', {
  "id": "ProceesCart",
  "method" : "POST",
  "html": '<input type="hidden" name="id" value="' + myJsonString + '">',
  "action": '?act=save&what=shoppingcart&func=add'
  }).appendTo(document.body).submit();

  // $('<form action="?act=save&what=shoppingcart&func=add" method="POST">' + 
  // '<input type="hidden" name="id" value="' + myJsonString + '">' +
  // '</form>').appendTo(document.body).submit();
}

function clear_cart(){
  cart_list = [];
  cart_total = 0;
  $(".cart-selectable").removeClass( "cart-selected" );
  display_cart(); 
}
function addall_cart(reference){
  cart_list=[];
  //alert(reference);
  $('.cart-selectable[reference="'+reference+'"]').each(function () {
    cart_list.push(this.id);
  });
  $('.cart-selectable[reference="'+reference+'"]').addClass('cart-selected');
  display_cart();
}

function thouthads_all(){
  $(".thousands").each(function () {
    var amount = ($(this).text().replace( /^\D+/g, ''));
    amount=amount.replace( /[a-z,A-Z]/g, '').replace(/ /g,'');
    amount=parseFloat(amount).toFixed(2);
    amount=thousands(amount);
    $(this).text(amount);
  });
}

function display_cart(){
  if (cart_list.length>0) {
    var show_total='';
    if(cart_total>0)show_total=" Amount: <span class='label label-info'>"+thousands(cart_total.toFixed(2))+"</span>";
    var myJsonString = JSON.stringify(cart_list);
    var countitems=cart_list.length;
    myJsonString=myJsonString+"<br>Items: <span class='label label-info'>"+countitems+"</span>"+show_total;
    $("#cart-content").html( myJsonString);
    $(submit_btn).appendTo($("#cart-content")).click(function () {
      submit_cart();
    });
    $(clear_btn).appendTo($("#cart-content")).click(function () {
      clear_cart();
    });
    $( "#cart-content" ).slideDown("slow");
  }else{
    $( "#cart-content" ).slideUp("slow");  
  }
}

function build_cart(){
    $(cart_content).addClass("shoppingcart").attr("id","cart-content").insertAfter($("#childs_")).hide();
    $(clear_btn).addClass("icon-remove icon-white").attr("id","cart-clear").css('cursor','pointer');
    $(submit_btn).addClass("icon-check icon-white").attr("id","cart-submit").css({
     'margin-left' : '10px',
     'margin-right' : '10px',
     'cursor' : 'pointer'
  });
    $(msg_content).addClass("msg").attr("id","msg").insertAfter($("#childs_"));//.hide();
    $(loading_content).addClass("loading").attr("id","loading").insertAfter($("#childs_")).html('Loading...').hide();
}

function OnloadFunction ()
{
    thouthads_all();
    build_cart();
    reload_controls();
    // $( document ).ajaxComplete(function( event, request, settings ) {
    //   $( "#msg" ).append( "<li>Request Complete.</li>" );
    // });

  $( document ).ajaxStop(function() {
    $( "#loading" ).hide();
    reload_controls();
  });
  $( document ).ajaxStart(function() {
    $( "#loading" ).show();
  });

}

function reload_controls(){
  $(".cart-addall").click(function(){
      reference=$(this).attr("reference");
      addall_cart(reference);
  });

  $(".cart-selectable").click(function() {
    var id = $(this).attr('id');
    if ($(this).hasClass( "cart-selected" ) ) {
          cart_total -= parseFloat($(this).attr('amount'));
          $(this).removeClass( "cart-selected" );
          cart_list.splice($.inArray(id, cart_list),1);
      } else {
        cart_total += parseFloat($(this).attr('amount'));
        $(this).addClass( "cart-selected" );
        cart_list.push(id);
      }
      display_cart();
  });

  $(".row-editable-icons").hide();
  $(".row-editable").hover(function(){
      var id = $(this).attr('id');
      var parts = id.toString().split(":");
      var icon_id='icons:'+parts[1];
      //alert(icon_id);
      $('.row-editable-icons[id="'+icon_id+'"]').show();
      //$(".row-editable-icons").show();
  },function(){
    var id = $(this).attr('id');
      var parts = id.toString().split(":");
      var icon_id='icons:'+parts[1];
      //alert(icon_id);
      $('.row-editable-icons[id="'+icon_id+'"]').hide();
  });

  $(".edit-icon").hover(function(){
     $(this).removeClass('icon-white');
  },function(){
      $(this).addClass('icon-white');
  });



  $(".maximaziable").click(function(){
    var div_id = $(this).attr('id');
    var subdiv_id = 'maximized_'+div_id;
    if ($(this).hasClass( "max-expanded" ) ) {
      $(this).removeClass('max-expanded');
      $('#'+subdiv_id).remove();
    }else{
      $(this).addClass('max-expanded');
      var url = $(this).attr('data-url')+'&plain=1';
      maximazed_area = document.createElement('span');
      $(maximazed_area).insertAfter($(this)).text($(this).attr('data-url')+" ID:"+subdiv_id);
      $(maximazed_area).attr("id",subdiv_id);
      $('#'+subdiv_id).html('Loading...');
      //$('#'+subdiv_id).slideUp('slow');
      //$('#'+subdiv_id).load( url);
      

      $.ajax({
        //async: false,
        url: url,
        async: false,
        success: function(data) {
          //$(this).append(data);
          //alert('ok');
          setTimeout(function(){reload_controls();},0);
          $('#'+subdiv_id).html(data);
          //$('#'+subdiv_id).slideDown('slow');
          
          
          
        },
        error: function(data) {
          $('#'+subdiv_id).html('Error on AJAX');
        },
        complete: function(data) {
          $('#'+subdiv_id).html('ok');
        }
      });

    //setTimeout(function(){reload_controls();},1000);
    }
  });
}
$(document).ready(OnloadFunction);