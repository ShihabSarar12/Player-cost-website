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
    const playerCost = document.getElementById('player-cost').value;
    let str = false;
    let playerCostNum;
    try{
        playerCostNum = parseFloat(playerCost);
    }catch(err){
        str = true;
    }
    if(isNaN(playerCost) || str){
        alert('Please enter a valid number');
    }
    else{
        playerTotal = playerCostNum * (cnt-1);
        cost.innerText = playerTotal;
    }
});
document.getElementById('total').addEventListener('click',function(){
    const managerCost = document.getElementById('manager-cost').value;
    const coachCost = document.getElementById('coach-cost').value;
    let str = false;
    let managerCostNum;
    let coachCostNum;
    try{
        managerCostNum = parseFloat(managerCost);
        coachCostNum = parseFloat(coachCost);
    }catch(err){
        str = true;
    }
    if(isNaN(managerCost) || isNaN(coachCost) || str){
        alert('Please enter a valid number');
    }
    else{
        const total = playerTotal + managerCostNum + coachCostNum;
        const totalCost = document.getElementById('total-cost');
        totalCost.innerText = total;
    }
});