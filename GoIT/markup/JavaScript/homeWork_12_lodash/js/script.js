$(function(){
	var listTmpl = $('#list-template').html();
	var tmpl = _.template(listTmpl);
	
/*my profile settings*/
	var my_profile = {
		title: "Jack Yurchenco",
		profile_image_url: 'img/i.png',
		speciality: "Student GoIT",
		cause_title: 'I want learn front-end because:',
		sizeList: 3,
		causes: [
			'Lorem ipsum dolor sit amet.',
			'Lorem ipsum dolor sit amet.',
			'Lorem ipsum dolor sit amet.',
		],
		plhone_title: "phone number: ",
		plhone: '+380936652615',
		facebook_title: "link to the page facebbok: ",
		facebook_url: "https://www.facebook.com/zheka.yurchenko",
		facebook_text: "my page on facebook",
		fidbek_title: "my fidbek",
		fidbek_text: "I can build you fence"
	}
/*result*/
	var result = tmpl(my_profile);
	$('body').append(result);
});