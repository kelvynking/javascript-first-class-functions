function Monday() {
    console.log('Go for a five-mile run');
    console.log('Pump iron');
  }
  
function Tuesday() {
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
}

function Wednesday() {
    console.log('Go for a five-mile run');
    console.log('Go for a five-mile run');
}

function Thursday() {
    console.log('Go for a five-mile run');
    console.log('Pump iron');
}

function Friday() {
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
}

function runFiveMiles() {
    console.log('Go for a five-mile run');
}

function liftWeights() {
    console.log('Pump iron');
}

function swimFortyLaps() {
    console.log('Swim 40 laps');
}

function Monday() {
    runFiveMiles();
    liftWeights();
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftweights);
}

exerciseRoutine(() => console.log('Stretch! Work that core!'));

function morningRoutine(exercise) {
    let breakfast = null;

    if(exercise === liftWeights) {
        breakfast = 'protein bar';
    }else if(exercise === swimFortyLaps) {
        breakfast = 'kale smoothie';
    }else {
        breakfast = 'granola';
    }

    exerciseRoutine(exercise);

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
}

let afterExercise = morningRoutine(liftWeights);

afterExercise();