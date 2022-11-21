const toggles = Object.values(document.getElementsByClassName('drawer-toggle'))



console.log(toggles)


toggles.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.target.dataset.drawerTarget
        const element = document.getElementById(target)

        element.classList.toggle('hide')
    })
})



//TOBIASA

/*let hidden = document.getElementsByClassName('project');
let switcher = document.getElementsByClassName('proj-menu');

function show(event) {
const div = event.target

  div.classList.toggle(hidden);
  div.classList.add('shown');
}


switcher.addEventListener('click', show);



[]
elements.forEach(element => {
  element.addEventListener('click', myFunction)
})


*/

//MOJE STARE

/*
let hidden = document.getElementById('proj-toggle');
let switcher =  document.getElementById('proj-menu');

function show () {
    hidden.classList.toggle('project');
    hidden.classList.add('shown');
}

switcher.addEventListener('click', show);*/

// NOWE


/*
let switchers = document.getElementsByClassName("proj-menu");


switchers[0].innerHTML = "testing 1";

function show () {
  document.getElementsByClassName("idk")[0].style.backgroundColor="blue";

}
switchers[0].addEventListener('click', show);


  switcher[0].addEventListener('click', show)
  switcher[1].addEventListener('click', showRed)




function show () {
  hidden[0].classList.toggle('hidden');


function show () {

  hidden.forEach(div => {
    console.log("to ja")
  })


}


}
*/