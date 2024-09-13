

function ASMrun(code: ASMline[]) {
    console.log(1)

    let memory: ASMmem[] = [];

    function getNumber(str: string): number{
        // takes a0 or b0 or i0 or p0 and makes it number or value. else return str
        if(str[0] == "B"){
            return (memory[parseInt(str.slice(1))] as ASMnum).val;
        }
        else if (str[0] == "A") {
            return parseInt(str.slice(1));
        }
        else if (str[0] == "I") {
            throw ("TYPE ERROR:INPUT VALUES ARE OF TYPE BOOL");
        }
        else if (str[0] == "P") {
            // to be implemented
            return NaN;
        }

        return parseFloat(str);
    }

    function getString(str: string): string {
        // takes a0 or b0 or i0 or p0 and makes it number or value. else return str
        if (str[0] == "B" && isNum(str.slice(1))) {
            return (memory[parseInt(str.slice(1))] as ASMstr).txt;
        }

        return str;
    }

    for (let i = 0; i<128; i++){
        memory.push({type: "num", val: -1} as ASMnum);
    }

    let currentLine: number = 0;
    while (currentLine < code.length) {
        if(code[currentLine].contents[0] == "SAVE"){
            console.log(code[currentLine].contents);
            if(code[currentLine].contents[2] == "NUM"){
                
            }
        }

        currentLine++;
    }
}