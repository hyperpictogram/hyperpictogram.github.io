function switchLanguage(lang) {
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