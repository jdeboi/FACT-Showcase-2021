const sketches = [];
let frameR = 60;
let currentSketch;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('sketch-holder');

    sketches.push(new Sketch_00());
    sketches.push(new Sketch_01());
    sketches.push(new Sketch_02());

    currentSketch = sketches[0];
    currentSketch.init();
}

function draw() {
    currentSketch.display();
    changeSketch();
}

function changeSketch() {
    if (frameCount % (frameR*5) === 0) {
        console.log("change")
        currentSketch = sketches[(currentSketch.id+1)%sketches.length];
        currentSketch.init();
    }
}