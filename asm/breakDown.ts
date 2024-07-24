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

 * a23 = 23
 * b23 = thing at index 23 of memory

*/

type asmFuncs = 
"save" |
"log" |
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
    kind: asmTypes;   // type param
    val: any;       // num, str, bool, any[]
}

interface ASMlog extends ASMfuncCall {
    type: "log";
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

function asmChunkify(code: string[]): string[]{
    let out: string[] = [];
    let cur: string = "";
    let seperators: string[] = [" ", ".", ";"];
    code.forEach((str,i)=>{
        if(seperators.indexOf(str) != -1){
            out.push(cur);
            cur = "";
        }
        else if(str == '"' || str == "'"){
            out.push(cur);
            out.push(str)
            cur = "";
        } 
        else{
            cur += str;
        }
    })
    return out;
}

function asmTokenize(chuckified: string[]): ASMfuncCall[]{
    let out: ASMfuncCall[] = [];

    return out;
}
console.log(asmChunkify("abc abc 12 39 239 9430 2380f djsio ] [ ; jdak a a;b;c;d;e;f".split("")))