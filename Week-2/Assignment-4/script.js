/* 
Click main-heading to change text.
*/
const heading = document.querySelector('.main-heading');

heading.addEventListener('click',() => {
    console.log('click');
    heading.innerHTML = 'Have a Good Time on Traveling!';
});

/*
Click see more button to show more cards.
*/
const seeMore = document.querySelector('#toggle-button');
const hide = document.querySelectorAll('.hide')

seeMore.addEventListener('click', ()=>{
    for(let i=0; i<hide.length; i++){
        hide[i].classList.toggle('hide');
    }
    if(seeMore.innerHTML === 'See More'){
        seeMore.innerHTML = 'See Less';
    }else{
        seeMore.innerHTML = 'See More';
    }
})
