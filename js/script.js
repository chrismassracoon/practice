
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
		button = document.querySelector('button'),
		input = document.querySelector('.adding__input'),
		favorite = document.querySelector('#check');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';


movieDB.movies.sort();

updateFilm();
function updateFilm() {
	movieDB.movies.sort();
	movieList.innerHTML = '';
	movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
}

button.addEventListener('click', addNewFilm);

function addNewFilm(e){
e.preventDefault();
if(!input.value){
button.insertAdjacentHTML('afterend', '<span class="error">Вы ничего не ввели</span>');
setTimeout(() => {document.querySelectorAll('.error').forEach(i => i.innerHTML = '<span class="error"></span>')}, 1000);
} else {
	if(input.value.length > 21){
		let newString = input.value.slice(0, 21) + '...';
		movieDB.movies.push(newString);
		if(favorite.checked){
			button.insertAdjacentHTML('afterend', '<span class="error">Добавляем любимый фильм</span>');
	setTimeout(() => {document.querySelectorAll('.error').forEach(i => i.innerHTML = '<span class="error"></span>')}, 1000);
	favorite.checked = false;
		}
	} else {
	movieDB.movies.push(input.value);
	if(favorite.checked){
		button.insertAdjacentHTML('afterend', '<span class="error">Добавляем любимый фильм</span>');
setTimeout(() => {document.querySelectorAll('.error').forEach(i => i.innerHTML = '<span class="error"></span>')}, 1000);
favorite.checked = false;
	}
	}
	
	input.value = '';
	updateFilm();
}
}

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove();
		console.log(e.target.parentElement)
	}
})