function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  let loops = 0
  while (loops < array.length) {
    array[loops] = array[loops] + "!!!"
    loops++
  }
  return array
}


// console.log(johnLennonFacts(facts))


function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}

console.log(iLoveTheBeatles(4))
