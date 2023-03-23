// thèmes : theorie, pratique, base, pro, mdp

const questions = [
    {
        id: 0,
        question: "Remplissez vous ce questionnaire en tant que profesionnel ou pariculier ?",
        optionA: "Particulier",
        optionB: "Professionnel",
        nextA: 1,
        nextB: 99,
        correctOption: "optionA",
        theme: "pro"
    },

    {
        id: 1,
        question: "Etes vous familier avec l'informatique ?",
        optionA: "Non, je suis débutant",
        optionB: "Je me débrouille",
        optionC: "Oui, je m'y connais bien",
        nextA: 2,
        nextB: 2,
        nextC: 2,
        correctOption: "optionB",
        theme: "base"
    },
    {
        id: 2,
        question: "Qu'est ce que la cybersécurité ?",
        optionA: "Le chiffrmeent des données et des communications sensibles.",
        optionB: "La pratique de créer et mettre a jour régulièrement des mot de passe forts.",
        optionC: "La protection des ressources informatiques et réseau contre les accès non autorisés",
        optionD: "L'utilisation d'antivirus et pare-feux pour éviter les infections virales.",
        nextA: 3,
        nextB: 3,
        nextC: 3,
        nextD: 3,
        correctOption: "optionC",
        theme: "theorie"
    },
    {
        id: 3,
        question: "Qu'est ce que le phishing ?",
        optionA: "Un type de cyberattaque qui utilise des vulnérabilités logicielles pour avoir accès a des données sensibles.",
        optionB: "Un type de cyberattaque qui vole les données sensibles par connection physique a un appareil.",
        optionC: "Un type de cyberattaque qui sature un serveur pour disrupter son fonctionnement normal.",
        optionD: "Un type de cyberattaque qui utilise de faux mail ou sites afin de pousser l'utilisateur a révéler des informations sensibles.",
        nextA: 4,
        nextB: 4,
        nextC: 4,
        nextD: 4,
        correctOption: "optionD",
        theme: "theorie"
    },
    {
        id: 4,
        question: "Qu'est ce qu'un mot de passe fort",
        optionA: "Un mot de passe d'au moins 10 caractères contenant minuscules, majuscules, chiffres et symboles.",
        optionB: "Un mot de passe facile à retenir et ne contenant aucune information personnelle.",
        optionC: "Un mot de passe qui est différent pour chaque compte et service.",
        optionD: "Toutes ces réponses a la fois.",
        nextA: 5,
        nextB: 5,
        nextC: 5,
        nextD: 5,
        correctOption: "optionD",
        theme: "mdp"
    },
    {
        id: 5,
        question: "Utilisez vous un gestionnaire de mot de passe ?",
        optionA: "Oui",
        optionB: "Non",
        nextA: 6,
        nextB: 6,
        correctOption: "optionA",
        theme: "mdp"
    },
    {
        id: 6,
        question: "Utilisez vous de l’authentification à double facteur (2FA) ?",
        optionA: "Oui",
        optionB: "Non",
        nextA: 7,
        nextB: 7,
        correctOption: "optionA",
        theme: "mdp"
    },
    {
        id: 7,
        question: "Quel service permet de connaitre les comptes compromis dont nous sommes propriétaires ?",
        optionA: "HaveIBeenPwned",
        optionB: "HaveIBeenHacked",
        optionC: "CNIL",
        optionD: "ANSSI",
        nextA: 8,
        nextB: 8,
        nextC: 8,
        nextD: 8,
        correctOption: "optionA",
        theme: "pratique"
    },
    {
        id: 8,
        question: "Que faire si vous rencontrez une activité suscipiceuse sur un de vos services ?",
        optionA: "Prévenir immédiatement le prestataire",
        optionB: "Changer immédiatement le mot de passe et activer l'authentification double facteur si possible.",
        optionC: "Vérifier vos autres comptes pour des signes de compromission.",
        optionD: "Toutes ces réponses a la fois.",
        nextA: 9,
        nextB: 9,
        nextC: 9,
        nextD: 9,
        correctOption: "optionD",
        theme: "pratique"
    },
    {
        id: 9,
        question: "Que devriez vous faire avant d'installer une nouvelle application ?",
        optionA: "La scanner a l'aide d'un programme antivirus",
        optionB: "Vérifier la source et les avis d'utilisateurs.",
        optionC: "Lire attentivement le contrat de licence et la politique de confidentialité afin de comprendre quelles données sont récupérées et comment sont elles utilisés ",
        optionD: "Toutes ces réponses a la fois.",
        nextA: 10,
        nextB: 10,
        nextC: 10,
        nextD: 10,
        correctOption: "optionD",
        theme: "pratique"
    },
    {
        id: 10,
        question: "Qu'est ce que l'ingenierie sociale ?",
        optionA: "Une technique qui utilise la psycologie humaine et la manipulation afin de faire reveler aux personnes visées des informations confidentielles.",
        optionB: "Une pratique utilisant machine learning et IA afin d'analyser le comportement humain.",
        optionC: "L'utilisaton du charisme et de la concilience pour influencer les decisions d'une personne.",
        optionD: "Une technique qui utilise les reseaux sociaux pour répandre de la mésinformation.",
        nextA: 11,
        nextB: 11,
        nextC: 11,
        nextD: 11,
        correctOption: "optionA",
        theme: "theorie"
    },
    {
        id: 11,
        question: "Que devriez vous faire en vous connectant sur un réseau public ?",
        optionA: "Eviter d'accéder a des informations personnelles ou sensibles.",
        optionB: "Utiliser un VPN.",
        optionC: "Couper le Bluetooth et le partage de fichiers sur votre appareil.",
        optionD: "Toutes ces reponses",
        nextA: 12,
        nextB: 12,
        nextC: 12,
        nextD: 12,
        correctOption: "optionD",
        theme: "pratique"
    },
    {
        id: 12,
        question: "Faites vous régulièrement des sauvegardes de vos données ?",
        optionA: "Oui",
        optionB: "Non",
        nextA: 13,
        nextB: 13,
        correctOption: "optionA",
        theme: "sauvegarde"
    },
    {
        id: 13,
        question: "Vos sauvegardes sont-elles séparés geographiquement de votre appareil",
        optionA: "Oui",
        optionB: "Non",
        nextA: 14,
        nextB: 14,
        correctOption: "optionA",
        theme: "sauvegarde"
    },
    {
        id: 14,
        question: "Selon vous, le risque numérique",
        optionA: "Est un risque opérationnel comme un autre",
        optionB: "Est un risque technique",
        nextA: 15,
        nextB: 15,
        correctOption: "optionA",
        theme: "theorie"
    },
    {
        id: 15,
        question: "Ces typologies d’attaques sont-elles toutes des attaques informatiques : Déni de service, Cheval de Troie, Fraude au président, Phishing (ou hameçonnage), Ransomware (ou rançongiciel)",
        optionA: "Oui",
        optionB: "Non",
        nextA: 16,
        nextB: 16,
        correctOption: "optionA",
        theme: "theorie"
    },
    {
        id: 16,
        question: "Selon vous, la cybersécurité est un sujet",
        optionA: "Purement technique",
        optionB: "Purement organisationnel",
        optionC: "Technique et organisationnel",
        nextA: 17,
        nextB: 17,
        nextC: 17,
        correctOption: "optionC",
        theme: "theorie"
    },
    {
        id: 17,
        question: "Selon vous, quelle(s) conséquence(s) une cyber-attaque peut-elle avoir sur votre entreprise ?",
        optionA: "Un blocage de l’activité",
        optionB: "Une perte de confiance des clients, salariés, partenaires, fournisseurs",
        optionC: "Un vol de données stratégiques",
        optionD: "L’ensemble de ces conséquences",
        nextA: 18,
        nextB: 18,
        nextC: 18,
        nextD: 18,
        correctOption: "optionD",
        theme: "theorie"
    },
    {
        id: 18,
        question: "La cybersécurité n’est qu’une question de confiance",
        optionA: "Oui",
        optionB: "Non",
        nextA: 19,
        nextB: 19,
        correctOption: "optionB",
        theme: "theorie"
    },
    {
        id: 19,
        question: "Si vous êtes victime d'une cyber-attaque, pensez-vous que votre responsabilité puisse être engagée vis-à-vis de vos clients, fournisseurs ou sous-traitants ?",
        optionA: "Oui",
        optionB: "Non",
        nextA: 20,
        nextB: 20,
        correctOption: "optionA",
        theme: "theorie"
    },
    {
        id: 20,
        question: "Est-ce parce que vous respectez le RGPD que vous êtes protégé en matière de cybersécurité ?",
        optionA: "Oui",
        optionB: "Non",
        nextA: 21,
        nextB: 21,
        correctOption: "optionB",
        theme: "theorie"
    },
    {
        id: 21,
        question: "Si vous êtes victime d'une cyberattaque, est-ce utile de porter plainte ?",
        optionA: "Oui",
        optionB: "Non",
        nextA: 99,
        nextB: 99,
        correctOption: "optionA",
        theme: "theorie"
    }

]

let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
var indexNumber = 0
var themes = []


// function for displaying next question in the array to dom
function NextQuestion(index) {
    if (index !== false) {
        const currentQuestion = questions[index]
        let span3 = document.getElementById("option-three-span");
        let span4 = document.getElementById("option-four-span");
        span3.style.display = "inline";
        span4.style.display = "inline";
        if (typeof currentQuestion.optionC === "undefined") {
            span3.style.display = "none";
        }

        if (typeof currentQuestion.optionD === "undefined") {
            span4.style.display = "none";
        }

        document.getElementById("question-number").innerHTML = currentQuestion.id
        document.getElementById("player-score").innerHTML = playerScore
        document.getElementById("display-question").innerHTML = currentQuestion.question;
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    }
}


function checkForAnswer() {
    let currentQuestion = questions[indexNumber];
    let ret = false
    let options = document.getElementsByName("option");
    let currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer

    // Vérification pour s'assurer qu'une option a été choisie
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex";
        return false;
    }

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
            if (option.value != currentQuestionAnswer && !themes.includes(currentQuestion.theme)) {
                themes.push(currentQuestion.theme)

            }
        }
    });

    console.log("themes: " + themes)
    return ret
}


//called when the next button is called
function handleNextQuestion() {
    if (checkForAnswer) {
        let nextQuestion
        nextQuestion = checkForAnswer()
        indexNumber = nextQuestion
        unCheckRadioButtons()
        //delays next question displaying for a second
        setTimeout(() => {
            if (nextQuestion !== 99) {
                NextQuestion(nextQuestion)
            }
            else {
                handleEndGame()
            }
            resetOptionBackground()
        }, 100);
    }
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

    let themesfin = getThemes();
    console.log("themes : " + themesfin)

    // Stocke les données récupérées dans le stockage local
    localStorage.setItem("themes", JSON.stringify(themesfin));

    // Redirige vers la page answers.html
    window.location.href = "answers.html";
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

function getThemes() {
    return themes
}

