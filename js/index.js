const popAudio = new Audio('../sound/balloon-pop-48030.mp3')
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1
const gBalloons = generateModel()
renderHtml(gBalloons)

// Generating the gBalloons model
function generateModel(){
    let array = []
    for(let idx = 0; idx < 5; idx++){
        array[idx] = {
            id: idx,
            speed: getRandomInt(15),
            bottom: 0
        }
    }
    return array
}

// Renders the html body
function renderHtml(model){
    const balloonsContainer = document.querySelector('.balloons-container')
    const elementArray = model.map((_, idx) => `<div onclick='onPop(this)' class='balloon balloon${idx} data-id='${idx}'><span class="hbdspan"></span></div>`)
    balloonsContainer.innerHTML = elementArray.join('')
}

// Activates when balloon div is poped
function onPop(e){
    popAudio.play()
    e.style.opacity = '0'
    setTimeout(() => e.remove(), 500)
    gBalloons.splice(e.dataset.id, 1)
}

// Activates when the 'start' button is clicked
function startClickHandler(){
    const balloons = document.querySelectorAll('.balloon')
    console.log(balloons)
    setInterval(() => balloons.forEach((balloon, idx) => balloon.style.bottom = `${gBalloons[idx].bottom += gBalloons[idx].speed}px` ), 1000)
}