const screen = document.querySelector('.screen');
const btnClear = document.querySelector('.btn-clear');
const btnEqual = document.querySelector('.btn-equal');
const btns = document.querySelectorAll('.btn');

const returnBtnValue=(e)=>{
    screen.value += e.target.dataset.num;
    return e.target.dataset.num;
}
btns.forEach((btn)=>{
    btn.addEventListener('click', returnBtnValue);
});
btnClear.addEventListener('click', ()=>{
    console.log('clear')
    screen.value = ''
});
btnEqual.addEventListener('click', ()=>{

});