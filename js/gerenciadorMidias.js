var modalTipomidiaWrapper = document.querySelector('.modalTipomidiaWrapper');
var selecionarmidiaModalCloseBtn = document.querySelector('.selecionarmidiaModalCloseBtn');
var midiaTemplateBlock = document.querySelector('.midiaTemplateBlock ');
var novomidiaBtn = document.querySelector('.novomidiaBtn ');


novomidiaBtn.addEventListener('click', function() {
	modalTipomidiaWrapper.style.display = 'block';
});


selecionarmidiaModalCloseBtn.addEventListener('click', function() {
	modalTipomidiaWrapper.style.display = 'none';
});


midiaTemplateBlock.addEventListener('click', function() {
	modalTipomidiaWrapper.style.display = 'none';
});