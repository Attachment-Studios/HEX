var searchEngine = "google.com"

function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
}
function redirect() {
	url = document.getElementById('url-bar').value;
	searchEngine = document.getElementById('search-engine').value;
	if ( validURL(url) == true ) {
		window.location.href = url;
	} else {
		url = url.replace(" ", "+");
		url = "https://" + searchEngine + "?q=" + url;
		window.location.href = url;
	}
}