// editar dados pessoais modal
var editarDadosModalContainer = document.querySelector('.editarDadosModalContainer');
var editarDadosModalCloseBtn = document.querySelector('.editarDadosModalCloseBtn');
var contatoFotoDadosBtnPlus = document.querySelector('.contatoFotoDadosBtnPlus');


// ações abrir e fechar modal editar redes sociais
var editarRedesModal = document.querySelector('.editarRedesSociaisModalWrapper');
var editarRedesModalOpenBtn = document.querySelector('.socialBtnEditar');
var editarRedesModalCloseBtn = document.querySelector('.editarRedesSociaisModalCloseBtn');


// ações editar perfil
var perfilBtnEditar = document.querySelector('.perfilBtnEditar');
var editarperfilModalContainer = document.querySelector('.editarperfilModalContainer');
var editarPerfilModalCloseBtn = document.querySelector('.editarPerfilModalCloseBtn');
var editarPerfilDropdownBtn = document.querySelector('.editarPerfilDropdownBtn');
var bandeirasDropdownWrapper = document.querySelector('.bandeirasDropdownWrapper');
var abaPerfilPlusBtn = document.querySelector('.abaPerfilPlusBtn');


// editar empresa modal
var midiasBtnEditar = document.querySelector('.midiasBtnEditar');
var editarMidiasModalContainer = document.querySelector('.editarMidiasModalContainer');
var editarMidiasModalCloseBtn = document.querySelector('.editarMidiasModalCloseBtn');


// editar endereços modal
var editarEnderecoModalContainer = document.querySelector('.editarEnderecoModalContainer');
 var editarEnderecoModalCloseBtn = document.querySelector('.editarEnderecoModalCloseBtn');
 var enderecoBtnEditar = document.querySelector('.enderecoBtnEditar');


// editar características modal
var editarCaracteristicasModalWrapper = document.querySelector('.editarCaracteristicasModalWrapper');
var editarCaracteristicasModalCloseBtn = document.querySelector('.editarCaracteristicasModalCloseBtn');
var btnPlusCaracteristicas = document.querySelector('#btnPlusCaracteristicas');


// editar hobbies modal
var btnPlusHobbies = document.querySelector('#btnPlusHobbies');
var editarHobbiesModalWrapper = document.querySelector('.editarHobbiesModalWrapper');
var editarHobbiesModalCloseBtn = document.querySelector('.editarHobbiesModalCloseBtn');


// editar tags pessoais modal
var btnPlusTagPessoais = document.querySelector('#btnPlusTagPessoais');
var editarTagsPessoaisModalWrapper = document.querySelector('.editarTagsPessoaisModalWrapper');
var editarTagsPessoaisModalCloseBtn = document.querySelector('.editarTagsPessoaisModalCloseBtn');


// delete modal
var deleteModalWrapper = document.querySelector('.deleteModalWrapper');
var deleteModalBtnCan = document.querySelector('.deleteModalBtnCan');
var caractTextsCloseBtn = document.querySelector('.caractTextsCloseBtn');


deleteModalBtnCan.addEventListener('click', function() {
	deleteModalWrapper.style.display = 'none';
});


var tabFichas1 = document.querySelector('#tabFichas1');
var tabFichas2 = document.querySelector('#tabFichas2');
var tabFichas3 = document.querySelector('#tabFichas3');
var tabFichas4 = document.querySelector('#tabFichas4');
var tabFichasLink1 = document.querySelector('.tabFichasLink1');
var tabFichasLink2 = document.querySelector('.tabFichasLink2');
var tabFichasLink3 = document.querySelector('.tabFichasLink3');
var tabFichasLink4 = document.querySelector('.tabFichasLink4');


tabFichas1.style.backgroundColor = '#26547C';
tabFichasLink1.style.color = '#fff';


tabFichas1.addEventListener('click', function() {
	tabFichas1.style.backgroundColor = '#26547C';
	tabFichasLink1.style.color = '#fff';
	tabFichas2.style.backgroundColor = '#fff';
	tabFichasLink2.style.color = '#26547C';
	tabFichas3.style.backgroundColor = '#fff';
	tabFichasLink3.style.color = '#26547C';
	tabFichas4.style.backgroundColor = '#fff';
	tabFichasLink4.style.color = '#26547C';
});

tabFichas2.addEventListener('click', function() {
	tabFichas2.style.backgroundColor = '#26547C';
	tabFichasLink2.style.color = '#fff';
	tabFichas1.style.backgroundColor = '#fff';
	tabFichasLink1.style.color = '#26547C';
	tabFichas3.style.backgroundColor = '#fff';
	tabFichasLink3.style.color = '#26547C';
	tabFichas4.style.backgroundColor = '#fff';
	tabFichasLink4.style.color = '#26547C';
});

tabFichas3.addEventListener('click', function() {
	tabFichas3.style.backgroundColor = '#26547C';
	tabFichasLink3.style.color = '#fff';
	tabFichas1.style.backgroundColor = '#fff';
	tabFichasLink1.style.color = '#26547C';
	tabFichas2.style.backgroundColor = '#fff';
	tabFichasLink2.style.color = '#26547C';
	tabFichas4.style.backgroundColor = '#fff';
	tabFichasLink4.style.color = '#26547C';
});

tabFichas4.addEventListener('click', function() {
	tabFichas4.style.backgroundColor = '#26547C';
	tabFichasLink4.style.color = '#fff';
	tabFichas1.style.backgroundColor = '#fff';
	tabFichasLink1.style.color = '#26547C';
	tabFichas2.style.backgroundColor = '#fff';
	tabFichasLink2.style.color = '#26547C';
	tabFichas3.style.backgroundColor = '#fff';
	tabFichasLink3.style.color = '#26547C';
});




// editar perfil
// ações editar perfil
var perfilBtnEditar = document.querySelector('.perfilBtnEditar');
var editarperfilModalContainer = document.querySelector('.editarperfilModalContainer');
var editarPerfilModalCloseBtn = document.querySelector('.editarPerfilModalCloseBtn');
var editarPerfilDropdownBtn = document.querySelector('.editarPerfilDropdownBtn');
var bandeirasDropdownWrapper = document.querySelector('.bandeirasDropdownWrapper');
var abaPerfilPlusBtn = document.querySelector('.abaPerfilPlusBtn');


// perfilBtnEditar.addEventListener('click', function() {
// 	editarperfilModalContainer.style.display = 'flex';
// });

abaPerfilPlusBtn.addEventListener('click', function() {
	editarperfilModalContainer.style.display = 'flex';
});

editarPerfilModalCloseBtn.addEventListener('click', function() {
	editarperfilModalContainer.style.display = 'none';
});

editarPerfilDropdownBtn.addEventListener('click', function() {
	if (bandeirasDropdownWrapper.style.display == 'none') {
		bandeirasDropdownWrapper.style.display = 'block';
	} else {
		bandeirasDropdownWrapper.style.display = 'none';
	}
});