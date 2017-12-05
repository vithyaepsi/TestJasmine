/*
** signe: '*', '+', '-', '/'
** gauche: un nombre non negatif
** droite: un nombre plus petit que 430
**
** La fonction renvoie le resultat du calcul
**
** La fonction renvoie null en cas d'erreur
*/
function calculatrice(signe, gauche, droite) {
    var result = null;
    if(typeof(signe) == "undefined" || typeof(gauche) == "undefined" || typeof(droite) == "undefined"){
    	return null;
    }
    else{
    	if(droite >= 430){
	    	return null;
	    }
	    if(gauche < 0){
	    	return null;
	    }
    }
    
    if(signe == "+" && typeof(gauche) == "number" && typeof(droite) == "number" ){
    	result =  gauche + droite;
    }
    else if(signe == "-" && typeof(gauche) == "number" && typeof(droite) == "number" ){
    	result =  gauche - droite;
    }
    else if(signe == "/" && typeof(gauche) == "number" && typeof(droite) == "number" ){
    	if(droite == 0){
    		return null;
    	}
    	result =  gauche / droite;
    }
    else if(signe == "*" && typeof(gauche) == "number" && typeof(droite) == "number" ){
    	result = gauche * droite;
    }
    else{
    	return null;
    }


    return result;
}
 
module.exports = calculatrice;
