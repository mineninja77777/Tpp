/*
valid funcs:
    save - {params: [location: number - index of location in memory, type: type - could be num, str, bool, list[any]; val: any - type is based on type input]} - saves a value of a type to an index in memory
    load - {params: [location: number - place to load from]} loads a value from an index in memory and console logs it
    add - {params: [location: number - place to save sum to], num1: number - 1st number to add, num2: number - 2nd number to add}
    goto - {params: [location: number - line to go to]} - goes back/forwards to a specific line
    cgoto - {params: [val1: number, val2: number, pos: int]} - goes to pos if val1 == val2, conditional goto
    setPx - {params: [x: number, y: number, rgb: list - [red, green, blue]} - sets  pixel at (x,y) (screen is 120 * 120) to colour rgb
    // some sort of input

    {
        [0, num, 1],
        [1, num, 1],
    }

0    save b0 num a0;
1    save b1 num a1;
2    add b0 a0 a1;

 * a23 = 23
 * b23 = thing at index 23 of memory

*/



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
            out.push(str);
            cur = "";
        } 
        else{
            cur += str;
        }
    })
    return out;
}
