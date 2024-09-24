/*
valid funcs:
    save - {params: [location: number - index of location in memory, type: type - could be num, str, bool, list; val: any - type is based on type input]} - saves a value of a type to an index in memory;
    load - {params: [location: number - place to load from]} loads a value from an index in memory and console logs it;
    add - {params: [location: number - place to save sum to, num1: number - 1st number to add, num2: number - 2nd number to add]};
    wait {params: [time: number]} waits for time ms
    goto - {params: [location: number - line to go to]} - goes back/forwards to a specific line;
    cgoto - {params: [val1: number, val2: number, pos: int]} - goes to pos if val1 == val2, conditional goto;


[
    {0, num, 1},
    {1, num, 1},
]

0    save a0 num a0;
1    save a1 num a1;
2    add b0 a0 a1;
3    save a1 LIST NUM a1 b2 i3 a1

 * a23 = 23
 * b23 = thing at index 23 of memory
 * p23 = pixel 23 (there are 160*120) (will return number between 0-15)
 * i0  = is up pressed
 * i1  = is left pressed
 * i2  = is down pressed
 * i3  = is right pressed
 * i4(letter, 'SHIFT', 'ALT' or 'CTRL') = is key pressed (ROM)

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
    contType: string; // num str bool list
    cont: ASMmem[];
}



interface ASMline {
    contents: string[];
    line: number;
}

//works
function asmLineify(code: string[]): ASMline[] {
    let out: ASMline[] = [];
    let lineCount: number = 0;
    let cur: string = "";
    let seperators: string[] = [";", "e"];
    code.forEach((str, i) => {
        if (seperators.indexOf(str) != -1) {
            out.push({contents: [cur], line: lineCount++});
            cur = "";
        }
        else {
            cur += str;
        }
    })
    out.push({ contents: [cur], line: lineCount++});
    cur = "";
    return out;
}

// does works
function asmChunkify(lines: ASMline[]): ASMline[]{
    let out: ASMline[] = [];
    let ot: string[] = [];
    let cur: string = "";
    let seperators: string = " ";
    lines.forEach((line,i)=>{
        line.contents[0].split("").forEach((str,i)=>{
            if (str == seperators) {
                ot.push(cur);
                cur = "";
            }
            else {
                cur += str;
            }
        })
        ot.push(cur);
        cur = "";
        out.push({contents: ot, line: i});
        ot = [];
    })
    return out;
}

