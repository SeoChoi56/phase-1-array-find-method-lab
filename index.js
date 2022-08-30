//code your solution here

function isWin(element){
    return element.result === "W"
}


function superbowlWin(record) {
    const element = record.find(isWin)
    if(element)
    return element.year;
    else 
    return undefined;
}
