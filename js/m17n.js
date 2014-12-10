function switchLanguage(lang) {
	changeDisplayLanguage(lang)
	updateLanguageButtonSelection(lang)
}

function changeDisplayLanguage(lang) {
	var elements = document.getElementsByClassName('pictogram-m17n')
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i]
		if (element.lang != lang) {
			element.style.display = 'none'
		} else {
			element.style.display = 'block'
		}
	}
}

function updateLanguageButtonSelection(lang) {
	var buttons = document.getElementsByClassName('pictogram-m17n-switch')
	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i]
		if (button.lang != lang) {
			button.classList.remove("selected")
		} else {
			button.classList.add("selected")
		}
	}
}
