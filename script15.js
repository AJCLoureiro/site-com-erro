function verificar(){
	var date=new Date()
	var ano=date.getFullYear()
	var fano=document.getElementById('txtano')
	var res=document.querySelector('div#res')
	if (fano.value.length == 0 || Number(fano.value) > ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente!')
	} else {
		var fsex = document.getElementByName('radsex')
		var idade = ano - Number(fano.value)
		var gênero = ''
	}
	res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
}
	
	

	