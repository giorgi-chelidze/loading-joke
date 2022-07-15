const header = document.getElementById('header')
const tittle = document.getElementById('tittle')
const excerpt = document.getElementById('excerpt')
const profile_img= document.getElementById('profile_img')
const name = document.getElementById('name')
const chack_int = document.getElementById('chack_int');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')
const card = document.getElementById('card')
const chackInt = document.getElementById('chack_int')
const smile = document.getElementById('smile')
const byGiorgi = document.getElementById('by-giorgi')


setTimeout(cardDessappear, 3000)
function cardDessappear (){
    card.style.display = "none";
}
setTimeout(cardAppear, 8000)
function cardAppear (){
    card.style.display = "block";
}
setTimeout(chackIntCon, 3000)
function chackIntCon (){
    chackInt.style.display = "block";
}
setTimeout(chackIntConDel, 5500)
function chackIntConDel (){
    chackInt.style.display = "none";
}
setTimeout(smileShow, 5500)
function smileShow (){
    smile.style.display = "block";
}
setTimeout(smileDel, 8000)
function smileDel (){
    smile.style.display = "none";
}
setTimeout(byGiorgiC, 10500)
function byGiorgiC (){
    byGiorgi.style.display = "block";
}

setTimeout(getDate, 3000)
function getDate (){
    header.innerHTML = ' <img src="./imgs/autor.jpg" alt="image" id="header">'
    tittle.innerHTML = 'Amanda Loundgren the best English teacher'
    excerpt.innerHTML = 'Her favorite phrase is "Tamaraa what did you do yesterday?"'
    name.innerHTML = 'Amanda Loundgren'
    profile_img.innerHTML = '<img src="./imgs/amanda2.jpg" alt="img">'
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}
