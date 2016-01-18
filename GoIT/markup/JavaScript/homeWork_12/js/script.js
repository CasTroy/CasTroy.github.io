$(function(){
	var html = $('#test').html();

	var data = {
		title: 'Jack Yurchenco',
		profile_image_url: 'img/i.png',
		specialty: 'GoIT Student',
		causes: 'I want to learn front-end because:',
		cause_one: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, qui?",
		cause_two: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis saepe. Consequuntur, fuga ut. Possimus!",
		cause_three: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tempore officia debitis voluptatibus placeat doloribus fuga est, porro aliquam repellendus.",
		mobile_title: "phone number:",
		mobile_number: "+380936652615",
		facebook_title: "link to the page facebbok: ",
		facebook_url: "https://www.facebook.com/zheka.yurchenko",
		facebook_text: "my page on facebook",
		fidbek_title: "my fidbek",
		fidbek_text: "I can build you fence"
	};



	var contant = tmpl(html, data);
	$('body').append(contant);
});