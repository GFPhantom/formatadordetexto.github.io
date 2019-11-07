
const MetaDados = {
	
	ttlCaracteres : function(txt){
		return txt.length;
	},
	
	ttlPalavras : function(txt){
        let totalPalavras = 0;
        const arrItens    = txt.split("\n");
        for(let i = 0; i < arrItens.length; i++){
            if(arrItens[i] != ""){
                const arrConjuntos = arrItens[i].split(" ");
                for(let j = 0; j < arrConjuntos.length; j++){
					const arrPalavras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
										 "m", "n","o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z",
					                     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
										 "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];
                    let conjunto      = arrConjuntos[j];
					if(conjunto != ""){
						conjunto = conjunto.replace(/[ÁÀÃÂ]/, "A");
						conjunto = conjunto.replace(/[áàãâ]/, "a");
						conjunto = conjunto.replace(/[ÉÈÊ]/, "E");
						conjunto = conjunto.replace(/[éèê]/, "e");
						conjunto = conjunto.replace(/[ÍÌÎ]/, "I");
						conjunto = conjunto.replace(/[íìî]/, "i");
						conjunto = conjunto.replace(/[ÓÒÕÔ]/, "O");
						conjunto = conjunto.replace(/[óòõô]/, "o");
						conjunto = conjunto.replace(/[ÚÙÛ]/, "U");
						conjunto = conjunto.replace(/[úùû]/, "u");
						for(let i = 0; i < arrPalavras.length; i++){
							if(conjunto.indexOf(arrPalavras[i]) != - 1){
								totalPalavras++;
								break;
							}
						}
                    }
                }
            }
        }
		return totalPalavras;
	}
	
}
