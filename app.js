async function consultaUser(){
	const user = document.getElementById("search").value
	const response = await fetch(`https://api.github.com/users/${user}`)
	const json = await response.json()
	document.getElementById("foto").innerHTML = `<img src="${json.avatar_url}">`
	document.getElementById("perfil").innerHTML = 
	`<br><h2>Seguidores: ${json.followers}</h2><br>
	<h3>Bio: ${json.bio}</h3>`
	
}
