
function planoOptions(){
    const $planoSelect = document.getElementById('plano-select');
    const $selectText = document.getElementById('select-text');
    const $backgroundModal = document.getElementById('background-modal');
    const $planoOptions = document.getElementById('plano-options');
    const $planoOption = document.querySelectorAll('.plano-option');

    const planoModalElements = [$backgroundModal.style,$planoOptions.style];
    const handleModal = (display) => planoModalElements.forEach(x=> x.display = display);

    $planoSelect.onclick =() => handleModal('flex');
    
    $backgroundModal.onclick = () => handleModal('none');

    $planoOption.forEach(x=> x.onclick =()=>{
        const planoSelected = x.getElementsByTagName('input');
        planoSelected[0].checked = true;
        $selectText.innerHTML = x.textContent;
        handleModal('none');
    });
}

planoOptions();

function consentChecker(){
    const $termos = document.getElementById('termos');
    const $privacidade = document.getElementById('privacidade');
    const $subscribeButton = document.getElementById('subscribe-button');

    const checker = () =>{
        if($termos.checked && $privacidade.checked){
            $subscribeButton.style[`background-color`] = 'red';
            $subscribeButton.style.color = 'white';
            $subscribeButton.style.cursor = 'pointer';

        }
        else{
            $subscribeButton.style[`background-color`] = 'white';
            $subscribeButton.style.color = '#c6424a';
            $subscribeButton.style.cursor = 'auto';
        }
    }
    $privacidade.onclick =()=> checker();
    $termos.onclick =()=>checker();
}
consentChecker();
