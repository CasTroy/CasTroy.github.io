$(function(){
	var count = 0;
//nunc click mouse
	$('.nunc').on('click', function(){
		count = 0;
		active('.nunc_text', '.nunc', '.proin_text', '.proin', '.aenean_text', '.aenean');
	});
//proin click mouse
	$('.proin').on('click', function(){
		count = 1;
		active('.proin_text','.proin', '.nunc_text','.nunc', '.aenean_text', '.aenean');
	});
//aenean click mouse
	$('.aenean').on('click', function(){
		count = 2;
		active('.aenean_text', '.aenean', '.nunc_text', '.nunc', '.proin_text', '.proin');
	});

function active(classText, className,  classText1, className1, classText2, className2){
	$(classText).css("display", "block");
		$(className).css({
			background: 'white'
		});		
	$(classText1).css("display", "none");
		$(className1).css({
			background: '#eeeeee'
		});
	$(classText2).css("display", "none");
		$(className2).css({
			background: '#eeeeee'
		});
}

var vasya = {name: 'Vasya', 

greetings: function() { 

console.log('My name is '+this.name)

} 

};         

vasya.greetings();
});

