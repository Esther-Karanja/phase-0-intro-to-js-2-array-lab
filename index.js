const cats = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(catName){
    cats.push(catName);
}

function destructivelyPrependCat(catName){
    cats.unshift(catName);
}

function destructivelyRemoveLastCat(catName){
    cats.pop(catName);
}

function destructivelyRemoveFirstCat(catName){
    cats.shift(catName);
}

function appendCat(catName){
    const newcats= [...cats, catName];
    return newcats;
}

function prependCat(catName){
    const newcats= [catName, ...cats];
    return newcats;
}

function removeLastCat(){
    const newCats= cats.slice(0,2);
    return newCats;
}

function removeFirstCat(){
    const newCats= [...cats.slice(-2)];
    return newCats;
}