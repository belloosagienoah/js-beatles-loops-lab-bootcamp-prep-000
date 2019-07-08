// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments){
var results =[];
for(var i=0; i<arrayMusicians.length; i++){

    results.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
}

return results;
}

theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]);
