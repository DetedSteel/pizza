const size = document.querySelectorAll('.size-item')
const orderForm = document.querySelector('.orderForm')
const orderList = document.querySelector('.orderList')
const addBtn = document.querySelectorAll('.add')
const removeBtn = document.querySelectorAll('.remove')
let sizeChoice
let ordersCount = 0

size.forEach(e => {
    e.addEventListener('click', (i) => {
        size.forEach(j => {
            j.classList.remove('selected')
        })
        e.classList.add('selected')
        if (e.innerHTML.includes('45')){
            sizeChoice = '45'
            console.log(45)
        } else if (e.innerHTML.includes('32')) {
            sizeChoice = '32'
            console.log(32)
        } else {
            sizeChoice = '25'
            console.log(25)
        }
    })
})

orderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let ananas = document.querySelector('#count_ananas')
    let ananas_count = ananas.innerText
    let bacon = document.querySelector('#count_bacon')
    let bacon_count = bacon.innerText
    let chile = document.querySelector('#count_chile')
    let chile_count = chile.innerText
    let ham = document.querySelector('#count_ham')
    let ham_count = ham.innerText
    let cheeze = document.querySelector('#count_cheeze')
    let cheeze_count = cheeze.innerText
    let mushrooms = document.querySelector('#count_mushrooms')
    let mushrooms_count = mushrooms.innerText
    let olives = document.querySelector('#count_olives')
    let olives_count = olives.innerText
    let salami = document.querySelector('#count_salami')
    let salami_count = salami.innerText
    let ingridientsArr = [ananas_count, bacon_count, chile_count, ham_count, cheeze_count, mushrooms_count, olives_count, salami_count]
    let ingNames = ['Ананас', 'Бекон', 'Чили', 'Ветчина', 'Сыр', 'Грибы', 'Оливки', 'Салями']
    if (sizeChoice) {
        orderList.innerHTML += `<div id="order_${ordersCount}" class="order_item">Размер: ${sizeChoice} см<br>Доп ингридиенты:<br></div>`
        let curOrder = document.querySelector(`#order_${ordersCount}`)
        for (let i = 0; i < ingridientsArr.length; i++){
            if (ingridientsArr[i] != '0'){
                curOrder.innerHTML += `${ingNames[i]}:  ${ingridientsArr[i]}<br>`
            }
        }
        console.log(curOrder)
        if (curOrder.innerHTML == `Размер: ${sizeChoice} см<br>Доп ингридиенты:<br>`) {
            curOrder.innerHTML += 'Не выбраны'
        }
        ordersCount++
        ananas.innerText = '0'
        bacon.innerText = '0'
        chile.innerText = '0'
        ham.innerText = '0'
        cheeze.innerText = '0'
        mushrooms.innerText = '0'
        olives.innerText = '0'
        salami.innerText = '0'
    } else {
        alert('Размер не выбран')
    }
    size.forEach(s => {
        s.classList.remove('selected')
    })
})

addBtn.forEach(i => {
    i.addEventListener('click', (e) => {
        let curCount = parseInt(e.target.parentElement.lastElementChild.innerText)
        e.target.parentElement.lastElementChild.innerText = curCount + 1
        if (curCount == 9) {
            e.target.parentElement.lastElementChild.innerText = curCount
        }
    })
})

removeBtn.forEach(i => {
    i.addEventListener('click', (e) => {
        console.log(e.target.parentElement.outerHTML)
        let curCount = parseInt(e.target.parentElement.lastElementChild.innerText)
        if (curCount == 0) {
            
        }  else {
            e.target.parentElement.lastElementChild.innerText = curCount - 1
        }
    })
})