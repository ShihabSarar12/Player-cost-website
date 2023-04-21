const btn = document.getElementsByClassName('select-btn');
let cnt = 1;
let playerTotal;
const cost = document.getElementById('cost');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        const cardBody = btn[i].parentNode.parentNode;
        const playerName = cardBody.childNodes[1].innerText;
        const list = document.getElementById('list');
        if(btn[i].innerText.toLowerCase() !== 'unselect' && cnt <= 5){
            btn[i].innerText = 'Unselect';
            const li = document.createElement('li');
            li.innerText = playerName;
            list.appendChild(li);
            cnt++;
        }
        else{
            btn[i].innerText = 'Select';
            const players = list.childNodes;
            for(let i=0;i<players.length;i++){
                if(players[i].innerText === playerName && cnt >= 0){
                    list.removeChild(players[i]);
                    cnt--;
                    break;
                }
            }
        }
    });
}
document.getElementById('cal-btn').addEventListener('click',function(){
    const playerCost = parseFloat(document.getElementById('player-cost').value);
    if(isNaN(playerCost) || (playerCost+'') === ''){
        alert('Please enter a valid number');
    }
    else{
        playerTotal = playerCost * (cnt-1);
        cost.innerText = playerTotal;
    }
});
document.getElementById('total').addEventListener('click',function(){
    const managerCost = parseFloat(document.getElementById('manager-cost').value);
    const coachCost = parseFloat(document.getElementById('coach-cost').value);
    if((isNaN(managerCost) || (managerCost+'') === '') || (isNaN(coachCost) || (coachCost+'') === '')){
        alert('Please enter a valid number');
    }
    const total = playerTotal + managerCost + coachCost;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = total;
});