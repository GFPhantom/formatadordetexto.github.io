
const objTexto       = document.getElementById("texto");
let priAcaoConcluida = false;
let salvarEntradaIni = true;

document.getElementById("bt_formatar").onclick = function(){
    const metodo = document.getElementById("metodos").value;
    if(objTexto.value == ""){
        Interacao.alerta("Digite/cole algum texto na área de texto");
    }else if(metodo == "Selecione um método"){
        Interacao.alerta("Selecione algum método");
    }else{
		if(salvarEntradaIni == true){
			Historico.adicionar(objTexto.value);
			salvarEntradaIni = false;
		}
        let novoTexto  = "";
        let situacao   = "";
        const ponteiro = new Formatador(objTexto.value);
        switch(metodo){
            case "1":
                novoTexto = ponteiro.adicionarPrefixoSufixo(document.getElementById("prefixo_sufixo_cada_paragrafo").checked,
                                                            document.getElementById("prefixo").value,
                                                            document.getElementById("sufixo").value);
                situacao  = "Modificação concluída";
            break;
            case "2":
                novoTexto = ponteiro.adicionarQuebrasDeLinhas(document.getElementById("qtd_quebras").value);
                situacao  = "As quebras de linhas foram adicionadas";
            break;
            case "3":
                novoTexto = ponteiro.primeiraLetraMaiuscula(document.getElementById("1letra_maiuscula_todas_letras").checked);
                situacao  = "Conversão da primeira letra concluída";
            break;
            case "4":
                novoTexto = ponteiro.converterTamanho(document.getElementById("tudo_para_maiusculo").checked);
                situacao  = "Conversão concluída";
            break;
            case "5":
                novoTexto = ponteiro.removerItens("\n", document.getElementById("remover_todas_quebras").checked);
                situacao  = "As quebras de linha foram removidas";
            break;
            case "6":
                novoTexto = ponteiro.removerItens(" ", document.getElementById("remover_todos_espacos").checked);
                situacao  = "Os espaços foram removidos";
            break;
            case "7":
                novoTexto = ponteiro.indentarParagrafos(document.getElementById("qtd_espaco_indentacao").value);
                situacao  = "Parágrafos indentados";
            break;
            case "8":
                novoTexto = ponteiro.inverterTexto();
                situacao  = "Texto modificado";
            break;
            default:
                novoTexto = ponteiro.localizarSubstituir(document.getElementById("alvo_substituicao").value,
                                                         document.getElementById("substituto").value);
                situacao  = "Alvos substituídos";
            break;
        }
		priAcaoConcluida = true;
		Interacao.adTexto(novoTexto);
		Interacao.exibirMetaDados({"ttl_caracteres" : MetaDados.ttlCaracteres(objTexto.value),
							       "ttl_palavras"   : MetaDados.ttlPalavras(objTexto.value)});
		Historico.adicionar(novoTexto);
        Interacao.informarSituacao(situacao);
    }
}

document.getElementById("metodos").onchange = function(){
    const div1letraMaiuscula       = document.getElementById("div_1letra_maiuscula");
    const divRemoverEspacos        = document.getElementById("div_remocao_espacos");
    const divConversaoTamanho      = document.getElementById("div_conversao_tamanho");
    const divPrefixoSufixo         = document.getElementById("div_prefixo_sufixo");
    const divIndentacao            = document.getElementById("div_indentacao");
    const divSubstituicao          = document.getElementById("div_substituicao");
    const divAdicaoQuebrasDeLinha  = document.getElementById("div_adicao_quebras_de_linha");
	const divRemocaoQuebrasDeLinha = document.getElementById("div_remocao_quebras_linha");
    if(this.value == "1"){
        Interacao.mostrar(divPrefixoSufixo);
    }else{
        Interacao.esconder(divPrefixoSufixo);
    }
    if(this.value == "2"){
        Interacao.mostrar(divAdicaoQuebrasDeLinha);
    }else{
        Interacao.esconder(divAdicaoQuebrasDeLinha);
    }
    if(this.value == "3"){
        Interacao.mostrar(div1letraMaiuscula);
    }else{
        Interacao.esconder(div1letraMaiuscula);
    }
    if(this.value == "4"){
        Interacao.mostrar(divConversaoTamanho);
    }else{
        Interacao.esconder(divConversaoTamanho);
    }
	if(this.value == "5"){
		Interacao.mostrar(divRemocaoQuebrasDeLinha);
	}else{
		Interacao.esconder(divRemocaoQuebrasDeLinha);
	}
    if(this.value == "6"){
        Interacao.mostrar(divRemoverEspacos);
    }else{
        Interacao.esconder(divRemoverEspacos);
    }
    if(this.value == "7"){
        Interacao.mostrar(divIndentacao);
    }else{
        Interacao.esconder(divIndentacao);
    }
    if(this.value == "9"){
        Interacao.mostrar(divSubstituicao);
    }else{
        Interacao.esconder(divSubstituicao);
    }
}

document.getElementById("texto").oninput = function(){
    Interacao.exibirMetaDados({"ttl_caracteres" : MetaDados.ttlCaracteres(objTexto.value),
						       "ttl_palavras"   : MetaDados.ttlPalavras(objTexto.value)});
}

document.getElementById("bt_voltar").onclick = function(){
	const txtSalvo = Historico.voltar();
	if(txtSalvo != false){
		Interacao.adTexto(txtSalvo);
		Interacao.exibirMetaDados({"ttl_caracteres" : MetaDados.ttlCaracteres(txtSalvo),
						           "ttl_palavras"   : MetaDados.ttlPalavras(txtSalvo)});
	}
}

document.getElementById("bt_avancar").onclick = function(){
	const txtSalvo = Historico.avancar();
	if(txtSalvo != false){
		Interacao.adTexto(txtSalvo);
		Interacao.exibirMetaDados({"ttl_caracteres" : MetaDados.ttlCaracteres(txtSalvo),
						           "ttl_palavras"   : MetaDados.ttlPalavras(txtSalvo)});
	}
}
