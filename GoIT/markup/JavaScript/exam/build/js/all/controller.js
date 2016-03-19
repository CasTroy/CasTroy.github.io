define(
	'controller',
	['model', 'view'],
	function(model, view){
		function getXmlHttp(){
		  var xmlhttp;
		  try {
		    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		  } catch (e) {
		    try {
		      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		    } catch (E) {
		      xmlhttp = false;
		    }
		  }
		  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		    xmlhttp = new XMLHttpRequest();
		  }
		  return xmlhttp;
		}
		function Controller(m, v){
		    var self = this;
		    $('#search').on('click', function(event){
		        event.preventDefault();
		        var text = $('#edit').val();
		        $('.grid').remove();

		        var xmlhttp = getXmlHttp()
		        xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=m', false);
		        xmlhttp.send(null);
		        var obj = eval('('+xmlhttp.responseText+')')
		        if(xmlhttp.status == 200) {
		        		var Model = new model(obj);
		        		var View = view(Model);
		        		var controller = new Controller(Model, View);
		            }
		        })
		}
		return Controller;
	}	
			
);
