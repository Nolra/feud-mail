$( document ).ready(function() {
	// data
	let userMail = [
		mail = { 
			avatar : "images/gorev.jpg",
			person : "Stas Gorev",
			counter : 3,
			time : "3м",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Будешь пиво?",
			star : "",
			text : "Вова! Поздравляю тебя с Днём Рождения! Ты суперклассный парень, и снаружи и внутри! <br><br> Желаю тебе не депрессовать, получать невыразимое удовольствие от жизни и преуспеть в кооперативных делах. В общем, чтобы все скользило гладко, как глоточек шабли ясным прованским утром. Скоро увидимся! U r the best"
		},
		mail = { 
			avatar : "images/agranof.jpg",
			person : "Sonia Agranof",
			counter : "",
			time : "10м",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Верстка",
			star : "",
			text : "привет. мы там со шмоном пришли к выводу, что карму не надо отображать как шкалу, а только как текст.<br><br> как он сделает это в прототипе будет видно, но мне кажется, что это хорошее решение. в связи с этим есть задача во всех эвентах придумать название для состояния карма = 0. чтобы начальное значение тоже как-то отображалось"
		},
		mail = { 
			avatar : "images/sasha.jpg",
			person : "Sasha Starost",
			counter : 12,
			time : "15м",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Политологическая перспектива",
			star : "star",
			text : "Активист Павел Крисевич устроил акцию «в поддержку политзаключенных» около здания ФСБ в Москве. <br><br> Его подвесили на крест в образе Иисуса Христа, облили жидкостью и «подожгли», бросая в огонь тома уголовных дел. <br><br> Крисевеч известен своими акциями: в частности, на приговоре фигурантам «дела Сети*» в Петербурге летом этого года он приковал себя наручниками у здания военного суда, поджог фаер и стал раскидывать листовки. На приговоре фигурантам дела «Нового величия» (считается в России экстремистской организацией) Крисевеч надел милицейскую форму и «вскрыл горло» манекену, забрызгав ступени суда кровью. <br><br> Во время протестов в Беларуси «повесился» на тросе на Троицком мосту в Петербурге и спрыгнул в воду в знак солидарности с протестующими республики. *считается запрещенной в России террористической организацией. Видео Георгия Маркова"
		},
		mail = { 
			avatar : "images/shmon.jpg",
			person : "Shmon Doma",
			counter : "",
			time : "45м",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Дизайн",
			star : "",
			text : "я кстати сказал после того, как ты сегодня ушел, но в общем 13 декабря свадьба"
		}
	]
	// end data
	let mailCounter = 0;
	userMail.map(function(){
		let thisMail = userMail[mailCounter];
		$(".mail-app-catalog").append(
			'<div class="mail-item" data-value="' + mailCounter + '">'+
				'<div class="mail-header">'+
					'<div class="avatar">'+
						'<img src="' + thisMail.avatar + '" alt="Mail Avatar">'+
					'</div>'+
				'</div>'+
				'<div class="mail-body">'+
					'<h2 class="person">' + thisMail.person + '<span class="mail-counter">' + thisMail.counter + '</span></h2>'+
					'<h3 class="title">' + thisMail.title + '</h3>'+
					'<h4 class="text">' + thisMail.text + '</h4>'+
					'<div class="mail-time">' + thisMail.time + '</div>'+
					'<div class="mail-star ' + thisMail.star + '"></div>'+
				'</div>'+
			'</div>'
		);
		mailCounter++;
	})
	$("title").text('Входящие ' + mailCounter  + ' - mail');
	$(".mail-item").click(function(event){
		$(this).addClass("already-read");
		let mail = userMail[$(this).attr("data-value")];
		$(".mail-app-catalog").hide();
		$(".mail-app").addClass("open");
		$(".mail-open").append(
			'<section class="read-mail">'+
				'<h1 class="read-mail-title">' + mail.title + '</h1>'+
				'<div class="read-mail-body">'+
						'<div class="read-mail-body-head">'+
							'<div class="read-mail-avatar">'+
								'<img src="' + mail.avatar + '">'+
							'</div>'+
							'<div class="from">' + mail.person + '</div>'+
							'<div class="to">мне</div>'+
							'<div class="date">' + mail.date + '.' + mail.month +'</div>'+
						'</div>'+
					'<p>' + mail.text + '</p>'+
				'</div>'+
			'</section>'
		);
	})
	$(".arrow").click(function(event){
		$(".read-mail").remove();
		$(".mail-app-catalog").show();
		$(".mail-app").removeClass("open");		
	})
});
