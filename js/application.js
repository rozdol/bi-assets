!function ($) {
  $(function(){
	
    
		//Scroll to top
		$("a[href='#top']").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
		});
		
		
    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[rel=tooltip]"
    });

    $('.tooltip-test').tooltip();
    $('.popover-test').popover();
	
	//Modal
	$('#myModal').modal({show: false});
	//$('.collapsed').collapse({hide:true});
	//Draggable
	//$( "#draggable" ).draggable();
	
	$('#selectall').toggle(
	        function() {
	            $('#chkboxlist .toggle').prop('checked', true);
	
	        }, 
	        function() {
	            $('#chkboxlist .toggle').prop('checked', false);
	        }
	    );
	//toolbar
	//$('#button-left').toolbar({content: '#user-options', position: 'left'});
		
    // popover
    $("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

  });


}
$('.btn-group').button();


(window.jQuery)
/* Update datepicker plugin so that DD/MM/YYYY format is used. */
$.extend($.fn.datepicker.defaults, {
	parse: function (string) {
		var matches;
		if ((matches = string.match(/^(\d{2,2})\.(\d{2,2})\.(\d{4,4})$/))) {
			return new Date(matches[3], matches[2] - 1, matches[1]);
		} else {
			return null;
		}
	},
	format: function (date) {
		var
		month = (date.getMonth() + 1).toString(),
		dom = date.getDate().toString();
		if (month.length === 1) {
			month = "0" + month;
		}
		if (dom.length === 1) {
			dom = "0" + dom;
		}
		//return month + "." + dom + "." + date.getFullYear();
		return dom + "." + month + "." + date.getFullYear();
	}
});
//console.log('running');
$.tablesorter.addParser({ 
    // set a unique id 
    id: 'ruamounts', 
    is: function(s) { 
    	var isit = /^(?=.*\d)[\d ]+$/.test(s);
        console.log(isit);
        return isit;
    }, 
    format: function(s) { 
        // format your data for normalization 
        s = s.replace(/\-/g,"");
        s = s.replace(/,/g,"");
        s = s.replace(/\s/g,"");
        s = s.replace(/[^0-9\.]+/g,"");
        console.log(s);
        return s;
    }, 
    // set type, either numeric or text 
    type: 'numeric' 
});

$.tablesorter.addParser({ 
    // set a unique id 
    id: 'rudates', 
    is: function(s) { 
    	var isit = /\d{1,2}\.\d{1,2}\.\d{1,4}/.test(s);
        //console.log(isit);
        return isit;
    }, 
    format: function(s) { 
        // format your data for normalization 
        s = s.replace(/\-/g," ");
        s = s.replace(/:/g," ");
        s = s.replace(/\./g," ");
        s = s.split(" ");
        var d=$.tablesorter.formatFloat(new Date(s[2], s[1]-1, s[0]).getTime());
        return d;
    }, 
    // set type, either numeric or text 
    type: 'numeric' 
});

$(document).ready(function() {
	//console.log('running2');
});


