var rootElement = document.querySelector('#root');
var collectElement = document.querySelector('#collect');
var btnAction = document.querySelector('.btn__stop');
var t;
var collect = [];
btnAction.textContent = 'Start';

const RandomString = [
    'Javascript',
    'PHP',
    'Java',
    'Ruby',
    'Mysql',
    'Mongodb',
    'Node Js'
];

btnAction.addEventListener('click', function() {
    btnAction.textContent === 'Start' ? btnAction.textContent = 'Stop' : btnAction.textContent = 'Start';

    if(btnAction.textContent === 'Stop'){
        startRandom();
    }else{
        stopRandom();
    }  
});

function startRandom(){
    var html = '';
    t = setInterval(getRandom, 10);
    collect.forEach(item => {
        html += item + '<br>';
    });
    collectElement.innerHTML = html;
}

function stopRandom(){
    clearInterval(t);
    collect.push(rootElement.textContent);
}

function getRandom(){
    const i = Math.floor(Math.random() * RandomString.length);
    rootElement.textContent = RandomString[i];
}




