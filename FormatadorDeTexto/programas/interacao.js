
const Interacao = {
	
	adTexto : function(txt){
		document.getElementById("texto").value = txt;
	},
    
    informarSituacao : function(situacao){
        function desativarBotoes(modo){
            const colecaoBotoes = document.getElementsByTagName("button");
            for(let i = 0; i < colecaoBotoes.length; i++){
                colecaoBotoes[i].disabled = modo;
            }
        }
        desativarBotoes(true);
        const impSituacao = document.getElementById("situacao");
        const arrLetras   = situacao.split("");
        let   indice      = 0;
        impSituacao.innerHTML = "";
        const i = setInterval(function(){
            if(indice == arrLetras.length - 1){
                clearInterval(i);
                desativarBotoes(false);
            }
            impSituacao.innerHTML += arrLetras[indice];
            indice++;
        }, 30);
    },
    
    alerta : function(valor){
        const divAlerta         = document.getElementById("alerta");
        divAlerta.innerHTML     = valor;
        divAlerta.style.display = "block";
        setTimeout(function(){
            divAlerta.style.display = "none";
        }, 2600);
    },
    
    mostrar : function(obj){
        obj.style.display = "block";
    },
    
    esconder : function(obj){
        obj.style.display = "none";
    },
	
	exibirMetaDados : function(objMetaDados){
		document.getElementById("total_caracteres").innerHTML = objMetaDados["ttl_caracteres"];
		document.getElementById("total_palavras").innerHTML   = objMetaDados["ttl_palavras"];
	}
    
}
