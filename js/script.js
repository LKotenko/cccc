'use script';


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

// Плавная прокрутка

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});


	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


// Меню бургер 
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};


// Табы

const tabsBtn = document.querySelectorAll('.item__item');
const tabsItems = document.querySelectorAll('.items__text');

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
		item.addEventListener('click', function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if( !currentBtn.classList.contains('active')){
		tabsBtn.forEach(function(item){
			item.classList.remove('active');
		});

		tabsItems.forEach(function(item){
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
		currentTab.classList.add('active');
		}

		console.log(tabId);


	});
}

document.querySelector('.item__item').click(); //.item__item:nth-child(2)