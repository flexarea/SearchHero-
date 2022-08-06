const base_url = 'https://superheroapi.com/api.php/10223569763528853'

const search = document.getElementById('search')
const searchBtn = document.  getElementById('search-btn')
const heroImage = document.getElementById('heroImage')

const randHero = () => { return Math.floor(Math.random()*731)}

const getSearch = (name) => {
console.log(search.value)
  
fetch(`${base_url}/search/${name}`)
.then(response => response.json())
.then(json => {
const hero = json.results[0]
heroImage.innerHTML = `<img src='${hero.image.url}' height= 200 width= 200/>`
})

}

searchBtn.onclick = () => getSearch(search.value)
