$( document ).ready(function() {
	// data user
	let userData = [
		user = {
			login: "Vladimir Esionov",
			email: "nolraprof@gmail.com",
		}
	]
	// data user end
	// data
	let userMail = [

		// all
		mail = { 
			avatar : "images/gorev.jpg",
			person : "Stas Gorev",
			counter : 3,
			time : "5м",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Будешь пиво?",
			star : "",
			body : "Вова! Поздравляю тебя с Днём Рождения! Ты суперклассный парень, и снаружи и внутри! <br><br> Желаю тебе не депрессовать, получать невыразимое удовольствие от жизни и преуспеть в кооперативных делах. В общем, чтобы все скользило гладко, как глоточек шабли ясным прованским утром. Скоро увидимся! U r the best <img src='images/beer.jpg' alt='Beer'>",
			allEmail: true,
			socialEmail: false,
			promoEmail: false,
			opened: false
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
			body : "привет. мы там со шмоном пришли к выводу, что карму не надо отображать как шкалу, а только как текст.<br><br> как он сделает это в прототипе будет видно, но мне кажется, что это хорошее решение. в связи с этим есть задача во всех эвентах придумать название для состояния карма = 0. чтобы начальное значение тоже как-то отображалось. Глянь крутое видео вот <iframe width='80%' src='https://www.youtube.com/embed/M7m_3b1Jjzc' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
			allEmail: true,
			socialEmail: false,
			promoEmail: false,
			opened: false
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
			body : "Активист Павел Крисевич устроил акцию «в поддержку политзаключенных» около здания ФСБ в Москве. <br><br> Его подвесили на крест в образе Иисуса Христа, облили жидкостью и «подожгли», бросая в огонь тома уголовных дел. <br><br> Крисевеч известен своими акциями: в частности, на приговоре фигурантам «дела Сети*» в Петербурге летом этого года он приковал себя наручниками у здания военного суда, поджог фаер и стал раскидывать листовки. На приговоре фигурантам дела «Нового величия» (считается в России экстремистской организацией) Крисевеч надел милицейскую форму и «вскрыл горло» манекену, забрызгав ступени суда кровью. <br><br> Во время протестов в Беларуси «повесился» на тросе на Троицком мосту в Петербурге и спрыгнул в воду в знак солидарности с протестующими республики. *считается запрещенной в России террористической организацией. <img src='images/pavel.jpg' alt='Pavlik'> Фото Георгия Маркова",
			allEmail: true,
			socialEmail: false,
			promoEmail: false,
			opened: false
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
			body : "я кстати сказал после того, как ты сегодня ушел, но в общем 13 декабря свадьба. Можешь написать о ней в <a href='https://t.me/esionov_notes' target='_blank'>своём канале</a> кстати",
			allEmail: true,
			socialEmail: false,
			promoEmail: false,
			opened: false
		},


		// social
		mail = { 
			avatar : "images/new-paper.jpg",
			person : "Добрая Газета",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Новая",
			star : "",
			body : "Письмо Доброй Газеты о том какие либералы хорошие, а ватники плохие",
			allEmail: false,
			socialEmail: true,
			promoEmail: false,
			opened: false
		},
		mail = { 
			avatar : "images/gosuslugi.png",
			person : "Гос Услуги",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Долги",
			star : "",
			body : "Вас ждет нищета и визит налоговой",
			allEmail: false,
			socialEmail: true,
			promoEmail: false,
			opened: false
		},
		mail = { 
			avatar : "images/facebook.png",
			person : "Фейсбук",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Вас отметили в публикации",
			star : "",
			body : "Сообщение со ссылкой на фейсбук",
			allEmail: false,
			socialEmail: true,
			promoEmail: false,
			opened: false
		},		
		mail = { 
			avatar : "images/change.png",
			person : "change.org",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Слоны не могут какать",
			star : "",
			body : "Подпишите эту петицию, чтобы спости слонов и сомов.",
			allEmail: false,
			socialEmail: true,
			promoEmail: false,
			opened: false
		},





		// promo
		mail = { 
			avatar : "",
			person : "Реклама",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Реклама",
			star : "",
			body : "Реклама",
			allEmail: false,
			socialEmail: false,
			promoEmail: true,
			opened: false
		},
		mail = { 
			avatar : "",
			person : "Реклама",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Реклама",
			star : "",
			body : "Реклама",
			allEmail: false,
			socialEmail: false,
			promoEmail: true,
			opened: false
		},
		mail = { 
			avatar : "",
			person : "Реклама",
			counter : "",
			time : "2ч",
			date : new Date().getDate(),
			month: new Date().getMonth(),
			title : "Реклама",
			star : "",
			body : "Реклама",
			allEmail: false,
			socialEmail: false,
			promoEmail: true,
			opened: false
		}












	]
	const email = userData[0].email;
  const login = userData[0].login;
  // end data 

	function renderData() {
		// parse data
		var mailCounter = 0;
		var allEmailCounter = 0;
		var socialEmailCounter = 0;
		var promoEmailCounter = 0;
		userMail.map(function(mail){
			if (mail.allEmail && !(mail.opened)) {
				allEmailCounter++
			}
			if (mail.socialEmail && !(mail.opened)) {
				socialEmailCounter++
			}
			if (mail.promoEmail && !(mail.opened)) {
				promoEmailCounter++
			}
			if (!(mail.opened)) {
				mailCounter++
			}
			
		})
		// end parse data
		// add meta info
		$("title").text('Входящие ' + mailCounter  + ' - mail');
		$(".user-email").text(email);
		$(".all-counter").text(allEmailCounter);
		$(".social-counter").text(socialEmailCounter);
		$(".promo-counter").text(promoEmailCounter);
		// add meta info end
	};
	renderData();












	// add email
	function addMailTemplate(thisObj, addMailCounter) {
			let mail = '<div class="mail-item" data-value="' + addMailCounter + '">'+
				'<div class="mail-header">'+
					'<div class="avatar">'+
						'<img src="' + thisObj.avatar + '" alt="Mail Avatar">'+
					'</div>'+
				'</div>'+
				'<div class="mail-body">'+
					'<h2 class="person">' + thisObj.person + '<span class="mail-counter">' + thisObj.counter + '</span></h2>'+
					'<h3 class="title">' + thisObj.title + '</h3>'+
					'<h4 class="text">' + thisObj.body + '</h4>'+
					'<div class="mail-time">' + thisObj.time + '</div>'+
					'<div class="mail-star ' + thisObj.star + '"></div>'+
				'</div>'+
			'</div>';
			return mail;
	}
	let addMailCounter = 0;
	userMail.map(function(elem){
		let mailHtml = addMailTemplate(elem, addMailCounter)
		if (elem.allEmail) {
			$(".all-mail").append(mailHtml);
		}
		if (elem.socialEmail) {
			$(".social-mail").append(mailHtml)
		}
		if (elem.promoEmail) {
			$(".promo-mail").append(mailHtml)
		}		
		addMailCounter++;
	})
	// add email end












	// email open
	$(".mail-item").click(function(event){
		userMail[$(this).attr("data-value")].opened = true;
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
					'<p>' + mail.body + '</p>'+
				'</div>'+
			'</section>'
		);
		renderData();
	})
	// email open end
	// close email
	$(".arrow").click(function(event){
		$(".read-mail").remove();
		$(".mail-app-catalog").show();
		$(".mail-app").removeClass("open");		
	})
	// close email end
	// nav
	$(".nav").click(function(event){
		$(".menu").addClass("open");		
	})
	$(".menu-item").click(function(event){
		$(".menu").removeClass("open");
		$(".mail-app-catalog>div").hide();
	})
	$(".all").click(function(event){
		$(".nav-title").text("Несортированные");
		$(".all-mail").show();
	})
	$(".promo").click(function(event){
		$(".nav-title").text("Промоакции");
		$(".promo-mail").show();
	})
	$(".social").click(function(event){
		$(".nav-title").text("Соцсети");
		$(".social-mail").show();
	})
	$(".menu-item span").off()
	// nav end




});
