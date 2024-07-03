/*
valid funcs:
    save - {params: [location: number - index of location in memory, type: type - could be num, str, bool, list[any], func; val: any - type is based on type input]} - saves a value of a type to an index in memory
    load - {params: [location: number - place to load from]} loads a value from an index in memory and console logs it
    add - {params: [location: number - place to save sum to], num1: number - 1st number to add, num2: number - 2nd number to add}
    goto - {params: [location: number - line to go to]} - goes back/forwards to a specific line
    if - {params: [val1: number, val2: number, code: func]} - executes code if val1 == val2
    setPx - {params: [x: number, y: number, rgb: list - [red, green, blue]} - sets  pixel at (x,y) (screen is 120 * 120) to colour rgb
    // some sort of input

    {
        [0, num, 1],
        [1, num, 1],
    }

0    save 0 num 1;
1    save 1 num 1;
2    add 0 a0 a1;
3    if a0 10 {goto 2};


*/

type asmFuncs = 
"save" |
"load" |
"add"  |
"goto" |
"if"   |
"setPx";

type asmTypes = 
"str"|
"num"|
"bool"|
"list";

interface ASMmem{
    type: asmTypes;
}

interface ASMstr extends ASMmem{
    type: "str";
    txt: string;
}

interface ASMnum extends ASMmem{
    type: "num";
    val: number;
}

interface ASMbool extends ASMmem {
    type: "bool";
    trfa: boolean;
}

interface ASMlist extends ASMmem {
    type: "list";
    cont: ASMmem[];
}



interface ASMfuncCall{
    type: asmFuncs;
    index: number;
}

interface ASMsave extends ASMfuncCall{
    type: "save";
    location: number;
    kind: string;   // type param
    val: any;       // num, str, bool, any[]
}

interface ASMload extends ASMfuncCall {
    type: "load";
    location: number;
}

interface ASMadd extends ASMfuncCall {
    type: "add";
    location: number;
    a: number;
    b: number;
}

interface ASMgoto extends ASMfuncCall {
    type: "goto";
    location: number;
}

interface ASMif extends ASMfuncCall {
    type: "if";
    val1: any;
    val2: any;
    code: ASMfuncCall;
}

interface ASMsetPx extends ASMfuncCall {
    type: "setPx";
    rgb: number[];
    x: number;
    y: number;
}

function asmTokenise(code: string[]){

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