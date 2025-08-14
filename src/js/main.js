const bill = document.getElementById("bill");
const peopleNum = document.getElementById("people-num");
const tips = document.getElementById("tips");
const customTip = document.getElementById("custom");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset-btn");
const peopleNumErrorMsg = document.getElementById("people-num-error-msg");

let currentTip = "";

const setTipActive = (tip) => {
    setTipsInactive();
    
    if(customTip.value)customTip.value = ""
    tip.classList.add("active-tip");
    calculate();
}

const setTipsInactive = () => {
    tips.querySelectorAll(".tip").forEach(tip => {
        tip.classList.remove("active-tip");
    });
}

const tipsClick = (e) => {
    try{
        const tip = e.target.closest(".tip");
        
        if(!tip) return;

        const tipDataset = tip.dataset.percent;
        
        if(currentTip === tipDataset) return;

        currentTip = tipDataset;
        if(currentTip === "custom") return;
        setTipActive(tip);
    }catch(err) {
        console.log("Error clicking tips: " + err);
    }
}

const calculate = () => {
    const billData = Number(bill.value);
    const peopleNumData = Number(peopleNum.value) > 0 ? Number(peopleNum.value) : 1;
    const currenTipData = currentTip === "custom" ? Number(customTip.value) || 0 : Number(currentTip);

    const billPerPerson = billData / peopleNumData;
    const tipPerPerson = billPerPerson * (currenTipData / 100); 
    const totalPerPerson = billPerPerson+tipPerPerson; 

    tipAmount.textContent = tipPerPerson.toFixed(2);
    total.textContent = totalPerPerson.toFixed(2);

    resetBtn.disabled = false;
}

const resetInput = () => {
    resetBtn.disabled = true;

    bill.value = "";
    peopleNum.value = "";
    customTip.value = "";
    total.textContent = "0.00";
    tipAmount.textContent = "0.00";
    disableInputError(peopleNum, peopleNumErrorMsg);
    currentTip==="custom" ? customTip.value = "": setTipsInactive();
}

const validatePeopleNum = (e) => {
    if(Number(e.target.value) <= 0 && e.target.value !== "") {
        enableInputError(peopleNum, peopleNumErrorMsg);   
    }else {
        disableInputError(peopleNum, peopleNumErrorMsg);
    }
}

const enableInputError = (input, msg) => {
    input.classList.add("input-error");
    msg.classList.remove("hidden");
}
const disableInputError = (input, msg) => {
    input.classList.remove("input-error");
    msg.classList.add("hidden");
}

customTip.addEventListener("input", calculate);
bill.addEventListener("input", calculate);
peopleNum.addEventListener("input", calculate);
peopleNum.addEventListener("input", validatePeopleNum);

tips.addEventListener("click", tipsClick);

resetBtn.addEventListener("click", resetInput);

customTip.addEventListener("input", setTipsInactive);
