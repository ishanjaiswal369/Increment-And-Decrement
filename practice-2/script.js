console.log('helllo');

let inbox = document.querySelector('.container');
inbox.addEventListener('click', function(e){
    console.log(e.screenX, e.screenY);
});