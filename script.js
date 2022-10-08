let question =
{
    title: 'Combien font 2 x 4',
    answers: ['4', '8', '9', '24'],
    correctAnswer: 1
}

function showQuestion(q) {
    let questionElement = document.querySelector('.questionclass');
    questionElement.innerHTML = q.title;
    let answersElement = document.querySelectorAll('button')
    answersElement.forEach(function (element, index) {
        element.innerHTML = q.answers[index];
        element.addEventListener('click', function () {
            if (q.correctAnswer == index) {
                console.log("correct");
                element.classList.add("correct");
            }
            else {
                console.log("incorrect")
                element.classList.add("wrong")
                let incorrect = answersElement[q.correctAnswer]
                // trouver moyen de passer la bonne reponse en vert
                incorrect.classList.add('correct')
            }
        })
    })
}

showQuestion(question)