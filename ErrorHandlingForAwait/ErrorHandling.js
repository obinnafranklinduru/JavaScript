async function loadFile() {
    let fileLoad = true;

    if (fileLoad) {
        return "File is loaded";
    } else {
        throw "File not loaded";
    }
}
//  we can't handle the error in this function
async function fileLoad() {
    let file = await loadFile();
    console.log(file)
}
fileLoad()

// we can handle the error using the try and catch method
async function fileLoad() {
    try {
        let file = await loadFile();
        console.log(file)
    }
    catch (error) {
        console.log(error)
    }
}
fileLoad()