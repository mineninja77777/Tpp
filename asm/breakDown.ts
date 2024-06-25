/*
valid funcs:
    save - {params: [location: number - index of location in memory, type: type - could be num, str, bool, list[any], func; val: any - type is based on type input]} - saves a value of a type to an index in memory
    load - {params: [location: number - place to load from]} loads a value from an index in memory
    add - {params: [location: number - place to save sum to], num1: number - 1st number to add, num2: number - 2nd number to add}
    goto - {params: [location: number - line to go to]} - goes back/forwards to a specific line
    if - {params: [val1: number, val2: number, code: func]} - executes code if val1 == val2
    setPx - {params: [x: number, y: number, rgb: list - [red, green, blue]} - sets  pixel at (x,y) (screen is 120 * 120) to colour rgb
    // some sort of input
*/

function asmSplit(code: string[]){

}
function lineify(code: string[], splitters: string[]){
    let out: string[] = [];
    let curr: string = "";
    code.forEach((val: string, ind: number)=>{
        if(splitters.indexOf(val) == -1){
            out.push(curr);
            curr = "";
        } else {
            curr += val;
        }
    })
}