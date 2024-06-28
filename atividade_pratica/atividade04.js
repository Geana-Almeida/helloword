const leia = require("readline-sync")

let caracteristicaEspecie, alimentacaoEspecie

let tipoEspecie = leia.question("Qual o grupo de especie que esse animal faz parte?(Vertebrado ou invertebrado) ").toUpperCase();

if(tipoEspecie === "VERTEBRADO"){
    caracteristicaEspecie = leia.question("Qual e a caracteristica desse animal?(Ave, Mamifero)").toUpperCase();

    if(caracteristicaEspecie === "AVE"){
        alimentacaoEspecie = leia.question("Qual e o grupo que esse animal se alimenta?(Carnivoro, Onivoro)").toUpperCase();

        if(alimentacaoEspecie === "CARNIVORO"){
            console.log("Aguia");
        }

        else if(alimentacaoEspecie === "ONIVORO"){
            console.log("Pomba");
        }

        else{
            console.log("Especie nao identificada.")
        }
    }

    else if(caracteristicaEspecie === "MAMIFERO"){
        let caracteristicaEspecie = leia.question("Qual e a caracteristica desse animal?(Onivoro, Herbivoro)").toUpperCase();

        if(caracteristicaEspecie === "ONIVORO"){
            console.log("Homem");
        }

        else if(caracteristicaEspecie === "HERBIVORO"){
            console.log("Vaca");
        }

        else{
            console.log("Especie nao identificada.")
        }
    }

    else{
        console.log("Especie nao identificada.")
    }

}


else if(tipoEspecie === "INVERTEBRADO"){
    caracteristicaEspecie = leia.question("Qual e a caracteristica desse animal?(Inseto, Anelideo)").toUpperCase();

    if(caracteristicaEspecie === "INSETO"){
        alimentacaoEspecie = leia.question("Qual e o grupo que esse animal se alimenta?(Hematofago, Herbivoro)").toUpperCase();

        if(alimentacaoEspecie === "HEMATOFAGO"){
            console.log("Pulga");
        }

        else if("HERBIVORO"){
            console.log("Lagarta")
        }

        else{
            console.log("Especie não identificada.")
        }
    }

    else if(caracteristicaEspecie === "ANELIDEO"){
        alimentacaoEspecie = leia.question("Qual e o grupo que esse animal se alimenta?(Hematofago, Herbivoro)").toUpperCase();

        if(alimentacaoEspecie === "HEMATOFAGO"){
            console.log("Sanguessuga");
        }

        else if("ONIVORO"){
            console.log("Minhoca")
        }

        else{
            console.log("Especie não identificada.")
        }
    }

    else{
        console.log("Especie não identificada.")
    }

}

else{
    console.log("Especie nao identificada.")
}