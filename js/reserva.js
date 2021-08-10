function reservar() {
	var nome = document.getElementById("nome")
	var hora = document.getElementById("hora")
	var data = document.getElementById("data")

    var parseData = new Date(data.value)

	var pedido = `Oi! Meu nome é **${nome.value}** e gostaria de fazer uma reserva para o dia **${data.value}** às **${hora.value}**`

	console.log(parseData)
	console.log(data.value)
	alert(pedido)
}
