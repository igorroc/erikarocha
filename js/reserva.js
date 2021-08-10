var url = new URL(window.location)
var nome = url.searchParams.get("nome");
var hora = url.searchParams.get("nome");
var data = url.searchParams.get("nome");

function reservar(event) {
	var form = this

	var nome = document.getElementById("nome")
	var hora = document.getElementById("hora")
	var data = document.getElementById("data")

	var parseData = new Date(data.value)

	var pedido = `Oi! Meu nome é **${nome.value}** e gostaria de fazer uma reserva para o dia **${data.value}** às **${hora.value}**`

    location.replace(`https://api.whatsapp.com/send?phone=557399837885&text=${pedido}`)

	console.log(form.action)
	event.preventDefault()
}
