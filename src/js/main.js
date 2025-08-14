const bill = document.getElementById("bill");
const peopleNum = document.getElementById("people-num");
const tips = document.getElementById("tips");

let currentTip = "";

const setTipActive = (tip) => {
    tips.querySelectorAll(".tip").forEach(tip => {
        tip.classList.remove("active-tip");
    });
    if(currentTip == "custom") return;
    tip.classList.add("active-tip");
}

const tipsClick = (e) => {
    try{
        const tip = e.target.closest(".tip");
        
        if(!tip) return;

        const tipDataset = tip.dataset.percent;
        
        if(currentTip === tipDataset) return;

        currentTip = tipDataset;
        setTipActive(tip);
    }catch(err) {
        console.log("Error clicking tips: " + err);
    }
}



tips.addEventListener("click", tipsClick);