
function Formatador(texto){
    this.texto         = texto;
    this.nvTexto       = "";
    this.arrCaracteres = texto.split("");
    this.arrParagrafos = texto.split("\n");
    this.ttlCaracteres = this.arrCaracteres.length;
    this.ttlParagrafos = this.arrParagrafos.length;
}

Formatador.prototype.adicionarPrefixoSufixo = function(cadaParagrafo, prefixo, sufixo){
    if(cadaParagrafo == true){
        for(let i = 0; i < this.ttlParagrafos; i++){
            if(this.arrParagrafos[i] != ""){
                this.nvTexto += prefixo + this.arrParagrafos[i] + sufixo + "\n";
            }else{
                this.nvTexto += "\n";
            }
        }
    }else{
        for(let i = 0; i < this.ttlParagrafos; i++){
            let linha        = "";
            let arrConjuntos = this.arrParagrafos[i].split(" ");
            for(let i = 0; i < arrConjuntos.length; i++){
                if(arrConjuntos[i] != ""){
                    linha += prefixo + arrConjuntos[i] + sufixo + " ";
                }else{
                    linha += " ";
                }
            }
            this.nvTexto += linha + "\n";
        }
    }
    return this.nvTexto.trimRight();
}

Formatador.prototype.adicionarQuebrasDeLinhas = function(qtdQuebras){
	if(qtdQuebras > 0){
		let quebras = "";
		for(let i = 0; i < qtdQuebras; i++){
			quebras += "\n";
		}
		for(let i = 0; i < this.ttlParagrafos; i++){
			const paragrafo = this.arrParagrafos[i];
			if(paragrafo != ""){
				this.nvTexto += paragrafo + quebras;
			}
		}
	}else{
		this.nvTexto = this.texto;
	}
	return this.nvTexto.trimRight();
}

Formatador.prototype.primeiraLetraMaiuscula = function(todasAsLetras){
	const expRegular = /[A-z]/;
    if(todasAsLetras == true){
        for(let i = 0; i < this.ttlParagrafos; i++){
            let linha        = "";
            let arrConjuntos = this.arrParagrafos[i].split(" ");
            for(let i = 0; i < arrConjuntos.length; i++){
				let conjunto = arrConjuntos[i];
				if(expRegular.exec(conjunto) != null){
					let arrPalavra = conjunto.split("");
					if(expRegular.exec(arrPalavra[0]) != null){
						linha += conjunto.replace(arrPalavra[0], arrPalavra[0].toUpperCase()) + " ";
					}else{
						let caracteres  = "";
						let novaPalavra = arrPalavra[0];
						for(let i = 1; i < arrPalavra.length; i++){
							if(expRegular.exec(arrPalavra[i]) != null){
								caracteres += arrPalavra[i].toUpperCase();
								for(let x = i + 1; x < arrPalavra.length; x++){
									caracteres += arrPalavra[x];
								}
								break;
							}else{
								caracteres += arrPalavra[i];
							}
						}
						novaPalavra += caracteres;
						linha       += novaPalavra + " ";
					}
				}else{
					linha += conjunto + " ";
				}
            }
            this.nvTexto += linha + "\n";
        }
    }else{
        for(let i = 0; i < this.ttlParagrafos; i++){
			let priCaractere = this.arrParagrafos[i].substring(0, 1);
			if(expRegular.exec(priCaractere) != null){
				this.nvTexto += this.arrParagrafos[i].replace(priCaractere, priCaractere.toUpperCase()) + "\n";
			}else{
				const arrCaracteres = this.arrParagrafos[i].split("");
				let nvParagrafo     = "";
				let feito           = false;
				for(let i = 0; i < arrCaracteres.length; i++){
					if(expRegular.exec(arrCaracteres[i]) != null && feito == false){
						nvParagrafo += arrCaracteres[i].toUpperCase();
						feito       =  true;
					}else{
						nvParagrafo += arrCaracteres[i];
					}
				}
				this.nvTexto += nvParagrafo + "\n";
			}
        }
    }
    return this.nvTexto.trimRight();
}

Formatador.prototype.converterTamanho = function(tudoParaMaiusculo){
    if(tudoParaMaiusculo == true){
        this.nvTexto = this.texto.toUpperCase();
    }else{
        this.nvTexto = this.texto.toLowerCase();
    }
    return this.nvTexto;
}

Formatador.prototype.indentarParagrafos = function(qtdEspaco){
    let espacos = "";
    for(let i = 0; i < qtdEspaco; i++){
        espacos += " ";
    }
    for(let i = 0; i < this.ttlParagrafos; i++){
        const paragrafo  = this.arrParagrafos[i].trimLeft();
		let valorVolatil = "";
		if(paragrafo != ""){
			valorVolatil = espacos;
		}
		this.nvTexto += valorVolatil + paragrafo + "\n";
    }
    return this.nvTexto.trimRight();
}

Formatador.prototype.inverterTexto = function(){
    const textoInvertido = this.arrCaracteres.reverse();
    for(let i = 0; i < this.ttlCaracteres; i++){
        this.nvTexto += this.arrCaracteres[i];
    }
    return this.nvTexto;
}

Formatador.prototype.localizarSubstituir = function(alvoSubstituicao, substituto){
    this.nvTexto = this.texto.split(alvoSubstituicao).join(substituto);
    return this.nvTexto;
}

Formatador.prototype.removerItens = function(alvo, todos){
	if(todos == true){
		for(let i = 0; i < this.ttlCaracteres; i++){
			if(this.arrCaracteres[i] == alvo){
				this.arrCaracteres[i] = "";
			}
			this.nvTexto += this.arrCaracteres[i];
		}
	}else{
		const indicesRemocao = [];
		for(let i = 0; i < this.ttlCaracteres; i++){
			if(this.arrCaracteres[i] == alvo && this.arrCaracteres[i + 1] == alvo){
				indicesRemocao.push(i + 1);
			}else{
				indicesRemocao.push("");
			}
		}
		for(let i = 0; i < indicesRemocao.length; i++){
			if(indicesRemocao[i] != ""){
				this.arrCaracteres[i] = "";
			}
			this.nvTexto += this.arrCaracteres[i];
		}
	}
	return this.nvTexto;
}
