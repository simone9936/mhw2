const V_image='images/checked.png';
const O_image='images/unchecked.png';


function selector(event){
    const container = event.currentTarget;
    const checkbox = container.querySelector('.checkbox');  
    opacity(container.dataset.questionId);
    checkbox.src = V_image;
    container.classList.remove('opacity');
    //checkbox.appendChild(img);
    container.classList.add('colors');

    if(container.dataset.questionId === 'one'){
        sol1 = container.dataset.choiceId;
    }
    if(container.dataset.questionId === 'two'){
        sol2 = container.dataset.choiceId;
    }
    if(container.dataset.questionId === 'three'){
        sol3 = container.dataset.choiceId;
        ViewAnswers();  
    }
    
 }
    
function opacity(questionId){
    const boxes = document.querySelectorAll('.choice-grid div');
    for (const box of boxes)
    if(box.dataset.questionId === questionId){
        box.classList.add('opacity');
        const check = box.querySelector('.checkbox');
        check.src = O_image;
        box.classList.remove('colors')
     }
}

function ViewAnswers(){
    let temp1 = 0;
    let temp2 = 0;
    
    if(sol1 === sol2 || sol1 === sol3){
        temp1++;
    }
    if(sol2 === sol3 ){
        temp2++;
    }
    if(temp2 > temp1){
        for(let i in RESULTS_MAP){
            if(i === sol3){
                const title = document.createElement('h1');
                const contents = document.createElement('p');
                title.textContent = RESULTS_MAP[i].title;
                contents.textContent = RESULTS_MAP[i].contents;
                const view = document.querySelector('#result');
                view.appendChild(title);
                view.appendChild(contents);
                const button = document.querySelector('#button');
                button.addEventListener('click', Restart);
                button.classList.remove('hidden');
            }
        }     
    }else{
        for(let i in RESULTS_MAP){
            if(i === sol1){
                const title = document.createElement('h1');
                const contents = document.createElement('p');
                title.textContent = RESULTS_MAP[i].title;
                contents.textContent = RESULTS_MAP[i].contents;
                const view = document.querySelector('#result');
                view.appendChild(title);
                view.appendChild(contents);
                const button = document.querySelector('#button');
                button.addEventListener('click', Restart);
                button.classList.remove('hidden');
            }
        }
    }

    const boxes = document.querySelectorAll('.choice-grid div');  
    for(const box of boxes){
        box.removeEventListener('click', selector);
    }
}

function Restart(){
    const boxes = document.querySelectorAll('.choice-grid div');

    for(const box of boxes){
        box.classList.remove('opacity');
        const check = box.querySelector('.checkbox');
        check.src = 'images/unchecked.png';
        box.classList.remove('colors');
            
        box.addEventListener('click', selector);
        const result = document.querySelector('#result');
        result.innerHTML = '';
        const button = document.querySelector('#button');
        button.classList.add('hidden');
    } 
}

let sol1 = null;
let sol2 = null;
let sol3 = null;

const boxes = document.querySelectorAll('.choice-grid div');
    for (const box of boxes)
        {
            box.addEventListener('click', selector);
        }

