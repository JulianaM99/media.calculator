TENTATIVAS:

let students = [
    {
        name: "Angelica",
        score1: 5,
        score2: 10
    },
    {
        name: "Fred",
        score1: 6,
        score2: 10
    },
    {
        name: "Wilson",
        score1: 7,
        score2: 8
    },
    {
        name: "Nelson",
        score1: 6,
        score2: 9
    }
];

function mediaCalculator(student) {
    let media = (students.score1 + students.score2) / 2; - O ERRO AQUI É QUE CALCULA O ARRAY TODO E NAO INDIVIDUALMENTE
    return media;
    
}

for (let student of students) {
    

    if (media >= 7) { - O ERRO AQUI É QUE VC QUER ACESSAR A MEDIA NA FUNCAO MAS ESTÁ FORA DO ESCOPO
        alert(`A média do(a) aluno(a) ${students. - OUTRO ERRO AQUI É O STUDENTS AO INVES DE STUDENT, QUE REPRESENTA CADA ALUNO INDIVIDUALMENTE name} é: ${media} \n Parabéns, ${students.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${students.name} é: ${media} \n Não foi dessa vez, ${students.name}. Tente novamente!`)
    }
}
