let btn = document.querySelector('.btn')
let card = document.querySelector('.card')
let extra = document.querySelector('.extra')

btn.addEventListener('click',()=>{

async function randomusers(){

let res = await fetch('https://randomuser.me/api/')
let data = await res.json()

let user = data.results[0]

card.innerHTML=`
<img src="${user.picture.large}">
<h1 class="name">${user.name.first} ${user.name.last}</h1>

<div class="info">
<p>${user.login.username}</p>
<p>${user.phone}</p>
</div>

<button class="more btn">show more</button>
`

extra.innerHTML=`
<img src="${user.picture.large}">
<h1 class="name">${user.name.title} ${user.name.first}</h1>

<div class="info">
<p>${user.email}</p>
<p>${user.location.country}</p>
<p>age: ${user.dob.age}</p>
</div>
`

if(user.gender === 'male'){
document.body.style.background='#4f7cff'
}else{
document.body.style.background='#f472b6'
}

let more = document.querySelector('.more')

more.addEventListener('click',()=>{
extra.classList.toggle('hidden')
})

}

randomusers()

})