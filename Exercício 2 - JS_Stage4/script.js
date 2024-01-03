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
        score2: 5
    },
    {
        name: "Nelson",
        score1: 6,
        score2: 9
    }
];

function mediaCalculator(student) {
    let media = (student.score1 + student.score2) / 2;
    return media;
}

for (let student of students) {
    let media = mediaCalculator(student);

    if (media >= 7) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${media} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${media} \n Não foi dessa vez, ${student.name}. Tente novamente!`);
    }
}
