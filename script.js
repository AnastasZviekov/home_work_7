sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

for(i=0; i<sports.length;i++) {
    currentArr = sports[i];
    if (currentArr.includes("swimmer")) {
        console.log(sports.indexOf(currentArr));
    }

    if (currentArr.includes(`skier`)) {
        console.log(sports.indexOf(currentArr));
    }

    if (currentArr.includes("hockey")) {
        console.log(sports.indexOf(currentArr));
    }

    if (currentArr.includes("apple")) {
        console.log(sports.indexOf(currentArr));
    }

    if (currentArr.includes("watermelon")) {
        console.log(sports.indexOf(currentArr));
    }
}

summerSports=sports.slice(5,7) .concat(sports.slice(-2));

winter_sports=sports.slice(0,2) .concat(sports.slice(3,5));

fruits=sports.slice(2,3) .concat(sports.slice(7,9));


for(i=0; i<winter_sports.length;i++) {
    winter_sports[i]=  winter_sports[i][0]+":"+winter_sports[i][1]+"\n"
}
for(i=0; i<summerSports.length;i++) {
    summerSports[i]=  summerSports[i][0]+":"+summerSports[i][1]+"\n"
}

for(i=0; i<fruits.length;i++) {
    fruits[i]=  fruits[i][0]+":"+fruits[i][1]+"\n"
}

console.log(`***Winter Sports***\n${winter_sports.join("")}\n***Summer Sports***\n${summerSports.join("")} 
***fruits***\n${fruits.join("")}`);
