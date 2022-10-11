//MAPPING IN SOLIDITY Vs JAVASCRIPT

//SOLIDITY
mapping(address => uint) owner;
//to set value
owner[msg.sender] = 5 wei;
//to get value
owner[msg.sender];

//nested mapping
mapping(address => mapping(uint => bool)) owner;
//to set value
owner[msg.sender][msg.value] = true;
//to get value
owner[msg.sender][msg.value];

//JAVASCRIPT
const account = new Map([
    ["Owner1", 20],
]);
//to set value
account.set("owner4", 90);
//to get value
account.get("owner4");

//to keep track of value stored
account.forEach((value, key) => console.log(`${key} ${value}`));