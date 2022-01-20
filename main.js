let backpack = [];

backpack.push("Sword");
backpack.push("Shield");
backpack.push("Food");

//console.log(backpack);

// this removes the first item in the array
// backpack.shift();

// (index start point, # of items to remove)
backpack.splice(0, 1);
//console.log(backpack);

let furCoat = "Fur Coat";

// adds variables value to the array
backpack.push(furCoat);
//console.log(backpack);

// removes last item in the array
backpack.pop();
//console.log(backpack);

// sets itemCount to the length of backpack array/# of items in the array
let itemCount = backpack.length;
//console.log(itemCount);

// adding multiple items at once
backpack.push("Flint", "Blanket", "Knife", "Toothbrush");
//console.log(backpack);

// (3, 3) starts at index 2 and removes 3 items
let backpack2 = backpack.splice(3, 3);
//console.log(`Backpack 1 - ${backpack}`);
//console.log(`Backpack 2 - ${backpack2}`);

// see the furst item in backpack2
//console.log(backpack2[0]);

// loop to see contents of each backpack
for (let i = 0; i < backpack.length; i++) {
    //console.log(`This is an iteration of our loop, and this is the current element of the array ${backpack[i]}`)
}
// does the same thing as this ^
for (let i = 0; i <= backpack2.length - 1; i++) {
    //console.log(backpack2[i]);
}

// shows the first three things in the array
for (let i = 0; i < 3; i++) {
    //console.log(backpack[i]);
}

backpack.push("hat")

if (backpack.length >= 3) {
    for (let i = 0; i < 3; i++) {
        //console.log(backpack[i]);
    }
} else {
    for (let i = 0; i < backpack.length; i++) {
        //console.log(backpack[i])
    }
}

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log("------------------", guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("guessMe is divisible by 4 or 5. We add 25")
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("guessMe is divisible by 3. We subtract 27")
        guessMe -= 27
    } else {
        console.log("guessMe hit else. We add 3")
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}

console.log(`Final Value: ${guessMe}`)