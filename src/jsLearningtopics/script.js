const dataArray = [
    {
        family:"dom",
        syntax : "document.querySelector(selectors)",
        description : "Returns the first element within in the dodument with given selector.Selectors can be an id/class/tag name.",
        return : "specified element // null if not found"
    },
    {
        family: "dom",
        syntax:"element = baseElement.querySelector(selectors);",
        description: "Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.",
        return: "The first descendant element of baseElement //null if not found",
    },
    {
        family: "dom",
        syntax: "elementList = parentNode.querySelectorAll(selectors)",
        description: "Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.",
        return:"A non-live NodeList // empty NodeList if not matches"
    },
    {
        family: "element",
        syntax:"target.addEventListener(type, listener [, options]);",
        description:"It sets up a function that will be called whenever the specified event is delivered to the target. ",
        return:"undefined"
    },
    {
        family: "element",
        syntax: "node.remove();",
        description: "The ChildNode.remove() method removes the object from the tree it belongs to.",
        return:"no return value"
    },
    {
        family: "element",
        syntax: "node.contains(node)",
        description: "Returns a Boolean value indicating whether a node is a descendant of a specified node.",
        return: "true - if node is a descendant //false - if node is NOT a descendant"
    },
    {
        family: "element",
        syntax: "node.appendChild(node)",
        description: "The appendChild() method appends a node as the last child of a node.You can also use this method to move an element from one element to another ",
        return: "A Node Object, representing the appended node"
    },
    {
        family: "string",
        syntax: "string.includes(searchvalue, start)",
        description: "Determines whether a string contains the characters of a specified string",
        return: "true- if the string contains the value// false - if it doesn't"
    },
    {
        family: "string",
        syntax: "string.substring(start, end)",
        description: "Extracts the characters in a string between start and end, not including end itself.If start > stop, then function swaps both arguments.",
        return: "A new String containing the extracted characters",
        note:"The substring() method does not change the original string"
    },
    {
        family: "string",
        syntax: "string.substr(start, length)",
        description: "Extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.",
        return: "A new String, containing the extracted part of the text.",
        note:"The substr() method does not change the original string."
    },
    {
        family: "string",
        syntax: "string.slice(start, end)",
        description: "Extracts parts of a string and returns the extracted parts in a new string.If start > stop, This function will return an empty string. (“”)",
        return: "A String, representing the extracted part of the string",
        note: "slice() method does not change the original string"
    },
    {
        family: "array",
        syntax: "let new_array = arr.map(function callback( currentValue[, index[, array]]) {// return element for new_array}",
        description: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        return: "A new array with each element being the result of the callback function.",
        note: "You shouldn't be using map if:you're not using the array it returns; and/or you're not returning a value from the callback."
    },
    {
        family: "array",
        syntax: "arr.forEach(callback(currentValue [, index [, array]])[, thisArg])",
        description: "forEach() calls a provided callback function once for each element in an array in ascending order.",
        return: "no return value"
    },
]
let count = 0;
let currentMenuSelection = 'dom';
const nextBtn = document.getElementById("next");
const divEL =document.getElementById("info");
const topicDetails = document.getElementsByClassName("topicDetails");

const domBtn = document.getElementById("dom");
const elmntBtn = document.getElementById("elmt");
const strBtn =document.getElementById("string");
const arrBtn =document.getElementById("array");


domBtn.addEventListener('click' , ()=>{
    count = 0;
    displaySelected(filterByType('dom'),count);
    currentMenuSelection = 'dom';
})
elmntBtn.addEventListener('click', ()=>{
    count = 0;
    displaySelected(filterByType('element'), count);
    currentMenuSelection = 'element';
})
strBtn.addEventListener('click', ()=>{
    count = 0;
    displaySelected(filterByType('string'), count);
    currentMenuSelection = 'string';
})
arrBtn.addEventListener('click' , ()=>{
    count = 0;
    displaySelected(filterByType('array'), count);
    currentMenuSelection = 'array';
})

function displaySelected(input,index){
    const dply = document.createElement('div');
    dply.classList.add('content');
    if(index>=input.length){
        index=0;
    }
    var arrdata = input[index];
debugger;
    topicDetails[0].innerHTML = `
                <label>Syntax :</label>
                <h2>${arrdata.syntax}</h2>
                <label>About :</label>
                <p>${arrdata.description}</p>
                <label>Return Value :</label>
                <p>${arrdata.return}</p>`;
    //divEL.appendChild(dply);
}

function selectedFamilies(word) {
    var arrEl = [];
    dataArray.forEach(el => {
        const family = el.family;
        if (family == word) {
            arrEl.push(el);
        }
    });
    return arrEl;
}
function filterByType(type) {
    return selectedFamilies(type);
}
nextBtn.addEventListener('click' , ()=>{
    
    displaySelected(filterByType(currentMenuSelection), count++);
    
  
})
