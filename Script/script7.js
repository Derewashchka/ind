document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Введіть ваше питання';
    inputElement.id = 'questionInput';
    document.body.appendChild(inputElement);

	const magicB = document.createElement('div');
    magicB.id = 'magicB';
    document.body.appendChild(magicB);

    const answers = ["Так", "Ні", "Спробуйте ще раз", "Можливо"];

    const textElement = document.createElement('div');
    textElement.id = 'textClick';
    textElement.innerText = 'click';
    magicB.appendChild(textElement);

    magicB.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        textElement.innerText = randomAnswer;
    });
});
