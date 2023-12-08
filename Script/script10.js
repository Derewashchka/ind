document.addEventListener('DOMContentLoaded', function() {
	let clickCount = 0;
	let winCount = 0;

	// Функція для генерації випадкового числа в заданому діапазоні
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Функція для заповнення рядка випадковими картинками
	function fillColumn(col) {
		const images = ['🍒', '🍋', '🍇', '🍉', '🍊', '🍎'];
		const usedIndexes = [];

		for (let i = 0; i < 3; i++) {
			const slot = document.getElementById(`row${i}-col${col}`);

			// Генеруємо унікальний випадковий індекс
			let randomIndex;
			do {
				randomIndex = getRandomInt(0, images.length - 1);
			} while (usedIndexes.includes(randomIndex));

			// Додаємо індекс в список використаних
			usedIndexes.push(randomIndex);

			slot.innerText = images[randomIndex];
		}
	}

	// Функція для перевірки перемоги
	function checkWin() {
		for (let i = 0; i < 3; i++) {
			const row = [];
			for (let j = 0; j < 3; j++) {
				const slot = document.getElementById(`row${i}-col${j}`);
				row.push(slot.innerText);
			}
			if (row[0] === row[1] && row[1] === row[2]) {
				return true;
			}
		}
		return false;
	}

	// Функція для гри
	function playGame() {
		// Перевірка, чи можна продовжити гру
		if (clickCount < 3) {
			// Очищаємо попередні результати
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					const slot = document.getElementById(`row${i}-col${j}`);
					slot.innerText = '';
				}
			}

			// Заповнюємо кожну колонку випадковими картинками
			for (let i = 0; i < 3; i++) {
				fillColumn(i);
			}

			// Перевіряємо перемогу
			if (checkWin()) {
				alert('Ви виграли!');
				winCount++;
			} else {
				alert('Спробуйте ще раз.');
			}

			// Збільшуємо рахунок натискань
			clickCount++;

			// Перевірка для вимкнення кнопки після трьох натискань
			if (clickCount === 3) {
				playButton.disabled = true;

				// Після третього натискання виводимо результат
				const gameResult = winCount > 0 ? 'Ви виграли!' : 'Ви програли.';
				alert(`Гра завершена. ${gameResult}`);
			}
		}
	}

	// Запитуємо ім'я користувача при завантаженні сторінки
	const playerName = prompt('Введіть ваше ім\'я:');

	// Створюємо блоки для слотів
	const centDiv = document.createElement('div');
	centDiv.id = 'cent';

	const containerDiv = document.createElement('div');
	containerDiv.id = 'container';
	containerDiv.appendChild(centDiv);

	const playerNameElement = document.createElement('h2');
	playerNameElement.innerText = `Ласкаво просимо, ${playerName}!`;
	centDiv.appendChild(playerNameElement);

	document.body.appendChild(containerDiv);

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const slot = document.createElement('div');
			slot.id = `row${i}-col${j}`;
			slot.className = 'slot';
			centDiv.appendChild(slot);
		}
		centDiv.appendChild(document.createElement('br'));
	}

	// Додаємо кнопку для гри
	const playButton = document.createElement('button');
	playButton.innerText = 'Грати';
	playButton.addEventListener('click', playGame);
	centDiv.appendChild(playButton);
});