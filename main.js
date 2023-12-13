const msgStatus = document.querySelector('.msg-status')
const header = document.querySelector('header')
const menu = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger')
const closeNav = document.querySelector('.navmobile')

// display-none

const stickHeader = () => {
	const scroll = window.scrollY
	if (scroll > 0) {
		header.classList.add('active')
	}
}

const hideNav = () => {
	closeNav.style.display = 'none'
}
hideNav()

const mobileNav = () => {
	menu.classList.remove('.active')
}
if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'Wiadomość wysłana!'
	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'Wystąpił błąd.'
	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}

window.addEventListener('scroll', stickHeader)
burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active')
	menu.classList.toggle('active')
})

closeNav.addEventListener('click', hideNav)
