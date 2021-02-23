//Programacao Funcional

var alunos = [
    {name: 'Gabriel',  notas: [6, 7, 8, 7]},
    {name: 'Patrick', notas: [2, 7, 3, 4]},
    {name: 'Bob', notas: [9, 7, 8, 10]}
];

var alunosMedia = [];

var soma = function(x, y){
    return x + y;
};

var media = function(list){
    for (i=0; i<list.length; i++){
        var somaNota = list[i].notas.reduce(soma, 0);
        alunosMedia.push({name: list[i].name, media: somaNota/4});
    }

}

var imprimeAlunos = function(){
    for(i=0; i < alunosMedia.length; i++){
        console.log(`Nome: ${alunosMedia[i].name} Media: ${alunosMedia[i].media}`);
    }
}

var imprimeAlunosAprovados = function(){
    const aprovados = alunosMedia.filter((value)=> value.media >= 7);
    for(i=0; i < aprovados.length; i++){
        console.log(`Nome: ${aprovados[i].name} Media: ${aprovados[i].media}`);
    }
}


//---------------------------------------------------------------------------------
//Programacao Imperativa 

var total = 0;
var aprovado = true;
var medias = [];

for(i=0; i < alunos.length; i++){
    total = 0;
    
    for(j=0; j< alunos.notas.length; j++){
        total += alunos.notas[j];
    }

    total /= 4;
    if(total < 7){
        aprovado = false;
    }else{
        aprovado = true;
    }

    medias.push({name: usuarios[i].name, media: total, status:aprovado});
}

for(i=0; i < medias.length; i++){
    console.log(`Nome: ${medias[i].name} Media: ${medias[i].media}`);
}

function listarAprovados(list){
    for(i=0; i<list.length; i++){
        if(list[i].status === true){
            console.log(`Nome: ${medias[i].name} Media: ${medias[i].media}`);
        }
    }
}

listarAprovados(medias);

