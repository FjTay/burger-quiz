import questions from "./questions.js"

/////////////// part regrouping reusable and technical functions /////////////////

const createDOMelements = ([mainId, HTMLelem, class_Name, id, nbr], timeOut) => {
    const anchor = document.getElementById(mainId)
    const create = () => {
        let elem = document.createElement(HTMLelem)
        elem.className = class_Name && class_Name
        elem.id = id && id
        anchor.append(elem)
    }
    nbr === 1 ? create() :
    setTimeout(() => {
        for(let i = 0; i < nbr; i++) {
            create()
        }
    }, timeOut)
}

const queryElems = (selector) => {
    return document.querySelectorAll(selector)
}

const cleanDOMelements = (toRemove, timeOut) => {
    setTimeout(() => {
        queryElems(toRemove).forEach(elem => elem.remove())
    }, timeOut)
}

const toggleClass = ([selector, newClass, isEffect], timeOut) => {
    queryElems(selector).forEach((elem, index) => {
        setTimeout(() => {
            elem.classList.toggle(newClass)
        }, isEffect ? timeOut * index : timeOut)
    })
}

const giveEventListener = ([selector, type, givenFunction], timeOut) => {
    queryElems(selector).forEach(elem => {
        setTimeout(() => {
            elem.addEventListener(type, givenFunction, true)
        }, timeOut)
    })
}

const getRandom = (arr) => {
    return (arr[Math.floor(Math.random() * arr.length)])
}

const makeSentence = (arr) => {
    return arr.map(str => {return str === "." ? player.name : str}).join('')
}

const fetchQuizzData = (url) => {    
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

const giveTextContent = (id, str) => {
    document.getElementById(id).innerHTML = str
}

const animateManage = (animations, id) => {
    let totalDelay = 0
    let startFunction = 0
    animations.flatMap(array => array).forEach((anim, index) => {
        const isFunction = anim[0] === undefined ? true : false
        startFunction += index === 0 ? 0 : isFunction ? 0 : 1
        totalDelay += isFunction ? anim[4] : anim[1]
        setTimeout(() => {
            let elem = document.getElementById(id)
            !isFunction ? elem.innerHTML = makeSentence(anim[0]) : anim[1](anim[2], anim[3])
        }, (startFunction * gameFrame.animationRate) + totalDelay)
    })
}

const createBurger = ([newBurger, anchor]) => {
    newBurger.burgerLayers.forEach((layer, index) => {
        createDOMelements([anchor, 
            newBurger.elementType, 
            `${newBurger.class_Name} ${layer}`,
            newBurger.shouldHaveId.indexOf(index) !== -1 && layer,
            1
        ])
    })
    createDOMelements(['breadTop', 'div', 'seed', false, 10], false)
}

/////////////// part regrouping objects relative to the game frame and quizz content /////////////////

const player = {
    name : false,
    touch : false
}

const gameFrame = {
    dummyNames : ["Chantale", "Frédégonde", "Berthe aux Grands Pieds", "Bébert_du_62", "Scarface_du_78", "Jacky"], 
    nickNameConfirm : [[["Confirmes tu ton pseudo\<br>", ".", " ?"], 0], [undefined, createDOMelements, ['readyBottom', 'button', 'readyButton', false, 3], 0, 0], [undefined,  giveEventListener, [".readyButton", "click", () => giveTextContent('readyLabel', '它们是 在前 级维 特 尔斯巴 \<br> 赫级 的基础上 进行 改良')], 0, 50], [["OK\<br>", ".", " !"], 2950] , [["Dégagez, les sauces"], 0], [undefined, toggleClass, [".readyButton", "burgerLeft", false], 0, 0], [undefined, cleanDOMelements, ['.readyButton'], 1200, 0]],
    readySentences : [[["Alors,\<br>", ".", " ?"], 0], [["T'es prête\<br>", ".", " ?"], 0], [["C'est parti,\<br>", ".", " !"], 0], [["et n'oublie pas..."], 0]],
    famousQuotes : ["L'avenir, c'est ce qu'on a inventé \<br> de mieux pour gâcher le présent.", "Le sage peut découvrir le monde \<br> sans franchir sa porte", "Ce n'est pas le doute, \<br> c'est la certitude qui rend fou", "La musique donne une âme à nos coeurs \<br> et des ailes à la pensée", "Ne sois pas humble, \<br> tu n’es pas si génial", "Il ne peut y avoir deux tigres \<br> sur la même coline", "Ta foi peut déplacer des montagnes \<br> et ton doute peut les créer", "Nous sommes deux fois armés \<br> si nous nous battons avec foi", "Pour survivre à la guerre, \<br> il faut devenir la guerre", "Une mer calme n’a jamais \<br> fait de marin habile", "La précision \<br>est la politesse des rois", "Seuls les morts \<br> ont vu la fin de la guerre", "Qui veut la guerre \<br> est en guerre avec soi", "Écouter, c'est apprendre;\<br> se taire, c'est conserver", "Jamais de moquerie, \<br>toujours de la taquinerie", "Quand on naît mulet, \<br> on ne peut pas devenir cheval", "L'homme repu ne croit pas l'affamé", "Le bonheur humain est composé de tant \<br> de pièces qu'il en manque toujours."],  
    finishSentences :  ["- Le Burger SNCF - \<br> Tout ça pour seulement 19.50 €", "- Le Cheese de chez Quick - \<br> Mini-prix, maxi-Chimie", "- Le CBO de chez MacDo - \<br> 9 chiens sur 10 pensent que c'est de la viande", "- Le Whooper de chez Burger King - \<br> Aux véritables arômes naturels de grillé", "- Le Bartho de Big Fernand - \<br> Rien à dire, de la balle"],
    animationRate : 1200,
    CSSanimRate : 400,
    quizzLength : 10,
    gameNbr : 0,
    questions : [],
    score : 0,
    interval: null,
    questionTimer: 1000
}

const burger = {
    class_Name: 'burger',
    burgerLayers : ['breadTop', 'salad', 'cheese', 'bacon', 'tomato', 'steak', 'cheese', 'steak', 'salad', 'bacon', 'cheese', 'breadBottom'],
    shouldHaveId : [0, 11],
    elementType :'div'
}

/////////////// part regrouping functions dedicated to the course of the quizz /////////////////

const cookiesRemove = () => {
    toggleClass(["#welcome", "unShadowed", false], 0)
    toggleClass(["#cookies", "hidden", false], 0)
    toggleClass(["#cookies", "shadowed", false], 0)
    giveEventListener([".quizzButton", "click", () => introStarts(checkName)], 0)
}

const introStarts = (callBack) => {
    toggleClass(["#cookies", "shadowed", false], 0)
    toggleClass(["#cookies", "hidden", false], gameFrame.CSSanimRate)
    createBurger([burger, 'burgerContainer'])
    toggleClass(['.burger', 'centered', true], 100)
    toggleClass(['#pick', 'pickHiddenTop', false], 100 * queryElems('.burger').length)
    toggleClass(['#pick', 'pickFalling', false], 100 * queryElems('.burger').length)
    setTimeout(() =>  callBack(), 700 + (100 * queryElems('.burger').length))
}

const checkName = () => {
    document.querySelector('input').addEventListener("input", () => {
        const pseudo = document.querySelector(".validatePseudo")
        const proposedName = document.querySelector('input').value
        const regexForName = /^[a-zA-Z ]{4,30}$/.test(proposedName)
        regexForName ? 
            (player.touch = true, pseudo.addEventListener("click", validateName, true)) : 
            pseudo.removeEventListener("click", validateName, true)
        pseudo.innerHTML = regexForName ? `Ok, ${proposedName},\<br> prépare-toi` : player.touch ? proposedName.length === 0 ? "Alors ça vient ?" : proposedName.length < 4 ? "Plus de 3 caractères !" : "Pas de caractères interdits !" : ""
    })
}

const validateName = () => {
    player.name = getRandom(gameFrame.dummyNames)
    toggleClass([".burger", "burgerLeft", true], 30)
    cleanDOMelements("#welcome", burger.burgerLayers.length * 30)
    toggleClass(["#ready", "hidden", false], burger.burgerLayers.length * 30)
    toggleClass(["#ready", "unShadowed", false], (burger.burgerLayers.length * 30) + gameFrame.CSSanimRate)
    animateManage(
        [gameFrame.nickNameConfirm,
        gameFrame.readySentences, [
            [[getRandom(gameFrame.famousQuotes)], 0], 
            [undefined, toggleClass, ["#ready", "shadowed", false], 3400, 0],
            [undefined, cleanDOMelements, ['#ready'], 3800, 0],
            [undefined, toggleClass, ["#game", "hidden", false], 3800, 0],
            [undefined, toggleClass, ["#game", "unShadowed", false], 4000, 0],
            [undefined, toggleClass, ["header", "unShadowed", false], 4000, 0],
            [undefined, giveEventListener, ["#replay", "click", () => reStart()], 0, 0],
            [undefined, gameStarts, 0, 4000, 0],
            [undefined, giveEventListener, ['#fk', 'click', () => bye()], 0, 0]
        ]], 
        'readyLabel'
    )
}

const gameStarts = (counter) => {
     if(counter === 0) gameFrame.questions = questions.slice(gameFrame.quizzLength * gameFrame.gameNbr, gameFrame.quizzLength * gameFrame.gameNbr + gameFrame.quizzLength)
    counter === gameFrame.quizzLength ? handleFinish() :
    animateManage([[
        [undefined, createDOMelements, ['container-buttons', 'button', 'quizzButton', false, gameFrame.questions[counter].type === 'boolean' ? 2 : 4], 0, 0],
        [undefined, dispatchQuestions, gameFrame.questions[counter], 0, 50],
        [undefined, giveEventListener, [".quizzButton", "click", (e) => handleAnswers(e, counter)], 0, 50],
        [undefined, giveTextContent, 'score', `Ton score : ${gameFrame.score}`, 0, 0],
        [undefined, giveTextContent, 'questionNbr', `Question n°${counter + 1}`, 0, 0],
        [undefined, toggleClass, ['#timer', 'shadowed', false], 0, 0],
        [undefined, toggleClass, ["#questionitSelf", "shadowed", false], 0, 0],
        [undefined, toggleClass, [".quizzButton", "unShadowed", false], 0, 100]
    ]], false)
    let timer = counter + gameFrame.gameNbr === 0 ? 23 : 20
    gameFrame.interval = setInterval(() => {
        document.getElementById("timer").innerHTML = timer
        timer --
        if (timer === -1) {
            clearInterval(gameFrame.interval) 
            counter < gameFrame.quizzLength ? handleAnswers(false, counter) : ""
        }
    }, gameFrame.questionTimer)
}

const dispatchQuestions = (question) => {
    giveTextContent("questionitSelf", question.question)
    const rightOne = getRandom([...new Array(question.incorrect_answers.length + 1)].map((_, index) => index))
    const answers = question.incorrect_answers
    answers.splice(rightOne, 0, question.correct_answer)
    queryElems('.quizzButton').forEach((quizzButton, index) => {
        quizzButton.id = index === rightOne ? "RightOne" : ""
        quizzButton.innerHTML = answers[index]
    })
}

const handleAnswers = (event, counter) => {
    queryElems('.quizzButton').forEach(button => button.disabled = true)
    clearInterval(gameFrame.interval) 
    event && handleScore(event.target.id, event.target.style)
    toggleClass(['#timer', 'shadowed', false], 100)
    toggleClass(['#questionitSelf', 'shadowed', false], 0)
    toggleClass(['.quizzButton', 'shadowed', false], 100)
    cleanDOMelements('.quizzButton', gameFrame.CSSanimRate + 200)
    setTimeout(() => {
        giveTextContent('timer', 10)
        gameStarts(counter + 1)
    }, gameFrame.CSSanimRate * 2)
}

const handleScore = (id, style) => {
    gameFrame.score += !id ? 0 : 1
    giveTextContent('score', `Ton score : ${gameFrame.score}`)
    const getRightOne = () => {
        document.getElementById("RightOne").style.background = "green"
    }
    style.background = id === "RightOne" ? "rgb(101, 233, 101)" : "salmon"
    id !== "RightOne" && getRightOne()
}

const handleFinish = () => {
    clearInterval(gameFrame.interval)
    const scoreBurger = {...burger, burgerLayers : [...burger.burgerLayers.slice(0, gameFrame.score + 2), burger.burgerLayers[burger.burgerLayers.length - 1]], shouldHaveId : [0, gameFrame.score + 2]}
    animateManage([[
        [undefined, scoreDisplay, gameFrame.score, 0, 0],
        [undefined, toggleClass, ["#game", "unShadowed", false], 0, 0],
        [undefined, toggleClass, ["#game", "hidden", false], 400, 0],
        [undefined, toggleClass, ["#finish", "hidden", false], 400, 0],
        [undefined, toggleClass, ["#finish", "unShadowed", false], 800, 0],
        [undefined, toggleClass, [".finishButton", "burgerRight", false], 800, 0],
        [undefined, toggleClass, ["#scoreLabel", "burgerRight", false], 800, 0],
        [undefined, createBurger, [scoreBurger, 'burgerContainer2'], 800, 0],
        [undefined, toggleClass, ['.burger', 'centered', true], gameFrame.CSSanimRate, 800]
    ]], false)
}

const reStart = () => {
    clearInterval(gameFrame.interval) 
    animateManage([[
        [undefined, toggleClass, [".burger", "burgerRight", false], 0, 0],
        [undefined, toggleClass, [".finishButton", "burgerRight", false], 0, 0],
        [undefined, toggleClass, ["#scoreLabel", "burgerRight", false], 0, 0],
        [undefined, giveTextContent, 'score', `Ton score : ${gameFrame.score}`, 0, 0],
        [undefined, cleanDOMelements, ".burger", 400, 0],
        [undefined, toggleClass, ["#finish", "unShadowed", false], 400, 0],
        [undefined, toggleClass, ["#finish", "hidden", false], 800, 0],
        [undefined, toggleClass, ["#game", "hidden", false], 800, 0],
        [undefined, toggleClass, ["#game", "unShadowed", false], 1200, 0],
        [undefined, gameStarts, 0, 1200, 0]
    ]], false)
    reinitGameParams()
}

const reinitGameParams = () => {
    gameFrame.gameNbr += 1
    gameFrame.score = 0
    giveTextContent('score', 0)
}

const scoreDisplay = (score) => {
    giveTextContent('scoreLabel', gameFrame.finishSentences[Math.ceil(score / 2)])
}

const bye = () => {
    animateManage([[
        [undefined, giveTextContent, "byeMsg", "PANAME QUIZ", 0, 0],
        [undefined, toggleClass, ["header", "unShadowed", false], 0, 0],
        [undefined, toggleClass, ["#finish", "unShadowed", false], 0, 0],
        [undefined, toggleClass, ["#finish", "hidden", false], 400, 0],
        [undefined, toggleClass, ["#bye", "hidden", false], 400, 0],
        [undefined, toggleClass, ["#bye", "unShadowed", false], 800, 0],
        [undefined, giveTextContent, "byeMsg", "DES REPONSES A DONNER", 2000],
        [undefined, giveTextContent, "byeMsg", "ZERO BURGERS A GAGNER", 1200],
        [undefined, giveTextContent, "byeMsg", `CIAO ${player.name}`, 3000]
    ]], false)
}

// introStarts(checkName)
cookiesRemove()
