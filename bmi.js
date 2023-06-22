const input = document.querySelector('input')
const btn = document.querySelector('button')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const hidden = document.getElementsByClassName('hidden')[0]
const result = document.getElementsByClassName('result')[0]
const recommend = document.getElementsByClassName('recommend')[0]
const status = document.getElementsByClassName('status')[0]

function bmi(){
    const we = weight.value
    const he = height.value
    const finalResult = (we / Math.pow((he/100), 2)).toFixed(2)

    // let res
    // let rec

    result.textContent = finalResult

    if (finalResult >= 30.0){
        status.textContent = 'Obese'
        recommend.textContent = 'You need to hit the gym'
    }
    else if(finalResult >= 25.0 ){
        status.textContent = 'Overweight'
        recommend.textContent = 'You need to control your eating habit'
        
    }
    else if(finalResult >= 18.5 ){
        status.textContent = 'Normal'
        recommend.textContent = 'You are in check, keep it up!'
        
    }
    else{
        status.textContent = 'Underweight'
        recommend.textContent = 'Please see a nutritionist'
    }
        



    hidden.style.display = 'block'
}


btn.addEventListener('click', bmi)

