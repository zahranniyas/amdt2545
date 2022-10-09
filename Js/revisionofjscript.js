var uniName = "AMDT";
console.log(uniName);

var friendNames = ["Mashood", "Ahmad", "Azaad"];

if (friendNames[0][0] == "C" || friendNames[1][0] == "C" || friendNames[2][0] == "C") {

    console.log("Yes")
    
} else {
    console.log("Nope")
    
}
friendNames.pop()
friendNames.push("Cyrill");

if (friendNames[0][0] == "C" || friendNames[1][0] == "C" || friendNames[2][0] == "C") {

    console.log("Yes")
    
} else {
    console.log("Nope")
    
}