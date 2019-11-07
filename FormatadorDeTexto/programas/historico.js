
const Historico = {
	
	arrHistorico : [],
	
	indice : 0,
	
	priVez : true,
	
	adicionar : function(txt){
		Historico.arrHistorico.push(txt);
		Historico.indice += 1;
	},
	
	voltar : function(){
		if(Historico.priVez == true){
			Historico.indice -= 2;
			Historico.priVez = false;
		}else{
			Historico.indice -= 1;
		}
		const valor = Historico.arrHistorico[Historico.indice];
		if(valor == undefined){
			Historico.indice += 1;
			return false;
		}else{
			return valor;
		}
	},
	
	avancar : function(){
		Historico.indice += 1;
		const valor = Historico.arrHistorico[Historico.indice];
		if(valor == undefined){
			Historico.indice -= 1;
			return false;
		}else{
			return valor;
		}
	}
	
}
