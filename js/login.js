const btn = document.querySelector("#btn").addEventListener('click', function load(){
    const load = document.querySelector("#load");
    load.style.display = 'block'
})

function transit(){
    window.location.href = "http://127.0.0.1:5500/my-profile.html";
}

function data(obj){
    console.log(obj.name,obj.value);
}
