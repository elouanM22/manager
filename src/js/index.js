// thèmes particulier : mdp, 2fa, pare feu, antivirus, habitudes
// thèmes professionnel : mdp, 2fa, pare feu, antivirus, habitudes, législatif
const questions = [
    {
        id: 0,
        question: "Pro ou perso",
        optionA: "Pro",
        optionB: "Perso",
        nextA: 1,
        nextB: 9,
        correctOption: "optionB",
        theme: "pro"
    },
    {
        id: 1,
        question: "Cb de caractères dans votre mdp ?",
        optionA: "1",
        optionB: "785",
        nextA: 1,
        nextB: 9,
        correctOption: "optionB",
        theme: "mdp"
    },
    {
        id: 2,
        question: "question nul ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },
    {
        id: 3,
        question: "question moyen ",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },
    {
        id: 4,
        question: "question fort",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },
    {
        id: 5,
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },
    {
        id: 6,
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },
    {
        id: 7,
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },
    {
        id: 8,
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },
    {
        id: 9,
        question: "Quel niveau",
        optionA: "nul",
        optionB: "moyen",
        optionC: "fort",
        nextA: 2,
        nextB: 3,
        nextC: 4
    },
    {
        id: 10,
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },
    {
        id: 11,
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },
    {
        id: 12,
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },
    {
        id: 13,
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },
    {
        id: 14,
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },
    {
        id: 15,
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },
    {
        id: 16,
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    }
]

let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
var indexNumber = 0
var themes = []


// function for displaying next question in the array to dom
function NextQuestion(index) {
    const currentQuestion = questions[index]
    document.getElementById("question-number").innerHTML = currentQuestion.id
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}

function getNbOptions() {
    return document.getElementsByName("option").length;
}

function checkForAnswer() {
    let currentQuestion = questions[indexNumber];
    let options = document.getElementsByName("option");
    let currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer

    // Vérification pour s'assurer qu'une option a été choisie
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex";
        return false;
    }

    let ret = false

    options.forEach((option) => {
        if (option.checked) {
            switch (option.value) {
                case "optionA":
                    ret = currentQuestion.nextA;
                    break;
                case "optionB":
                    ret = currentQuestion.nextB;
                    break;
                case "optionC":
                    ret = currentQuestion.nextC;
                    break;
                case "optionD":
                    ret = currentQuestion.nextD;
                    break;
                default:
                    ret = false;
                    break;
            }
            if (option.value != currentQuestionAnswer) {
                themes.push(currentQuestion.theme)

            }
        }
    });
    console.log("themes: " + themes)
    return ret
}


//called when the next button is called
function handleNextQuestion() {
    let nextQuestion = 99
    nextQuestion = checkForAnswer()
    indexNumber = nextQuestion
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (true) {
            console.log("affichage question: " + nextQuestion)
            NextQuestion(nextQuestion)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 100);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}