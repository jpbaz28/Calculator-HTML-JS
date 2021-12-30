let resultItems = [];
const results = [];

function calculate(event) {
    const resultList = document.getElementById("result-list");
    
    let value1st = document.getElementById("input1").value;
    let value2nd = document.getElementById("input2").value;
    const selection = document.getElementById("operator-select");
    let result = document.getElementById("result");
    const operator = selection.options[selection.selectedIndex].value;
    let num1 = parseInt(value1st);
    let num2 = parseInt(value2nd);
    console.log(operator, num1, num2);
    switch(operator) {
        case '+' :
            const sum = num1 + num2;
            result.innerHTML = sum;
            results.push(result.innerHTML);
            break;
        case '-': 
            const diff = num1 - num2;
            result.innerHTML= diff;
            results.push(result.innerHTML);
            break;
        case '*': 
            const prod = num1 * num2;
            result.innerHTML = prod;
            results.push(result.innerHTML);
            break;
        case '/':
            const quot = num1 / num2;
            result.innerHTML = quot;
            results.push(result.innerHTML);
            break;
        default:
            result.innerHTML = "0";
    }   
    console.log(results);
    resultItems = results.map(r => `<li>${r}</li>`).join('');
    resultList.innerHTML = resultItems;
    num1 = 0;
    num2 = 0;
}