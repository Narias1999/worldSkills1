const menuItems = document.getElementsByClassName('menu-item')
const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')
const desactivator = document.getElementById('desactivator')
window.addEventListener('scroll', function(ev){
	if(window.scrollY){
		document.querySelector("header").className="header-shadow"
	} else{
		document.querySelector("header").className=""
	}
})
btnMenu.addEventListener('click', function(){
	menu.classList.add('active-menu')
	desactivator.classList.add('show-desactivator')
})
desactivator.addEventListener('click', function(){
	menu.classList.remove('active-menu')
	desactivator.classList.remove('show-desactivator')
})
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', function(ev){
		for (let i = 0; i < menuItems.length; i++){
			menuItems[i].classList.remove("active")
		}
		ev.path[0].classList.add('active')
		if (menu.classList.contains('active-menu')) {
			menu.classList.remove('active-menu')
			desactivator.classList.remove('show-desactivator')
		}
		if(window.scrollY){
			document.querySelector("header").className="header-shadow"
		} else{
			document.querySelector("header").className=""
		}
	})
}