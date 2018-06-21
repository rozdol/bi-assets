$.tablesorter.addParser({ 
    // set a unique id 
    id: 'rudates', 
    is: function(s) { 
    	var isit = /\d{1,2}\.\d{1,2}\.\d{1,4}/.test(s);
        console.log(isit);
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