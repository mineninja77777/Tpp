function ASMrun(code: ASMline[]) {

    let memory: ASMmem[] = [];

    function getNumber(str: string): number{
        // takes a0 or b0 or i0 or p0 and makes it number or value. else return str
        if(str[0] == "B"){
            return (memory[parseFloat(str.slice(1))] as ASMnum).val;
        }
        else if (str[0] == "A") {
            return parseFloat(str.slice(1));
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
    function getBool(str: string): boolean {
        // takes a0 or b0 or i0 or p0 and makes it number or value. else return str
        if (str[0] == "B" && isNum(str.slice(1))) {
            return (memory[parseInt(str.slice(1))] as ASMbool).trfa;
        }

        return str == "TRUE";
    }
    

    for (let i = 0; i<128; i++){
        memory.push({type: "num", val: -1} as ASMnum);
    }

    let currentLine: number = 0;
    while (currentLine < code.length) {
        if(code[currentLine].contents[0] == "SAVE"){
            if(code[currentLine].contents[2] == "NUM"){
                memory[getNumber(code[currentLine].contents[1])] = {type: "num", val: getNumber(code[currentLine].contents[3])} as ASMnum;
            }
            if (code[currentLine].contents[2] == "STR") {
                memory[getNumber(code[currentLine].contents[1])] = { type: "str", txt: getString(code[currentLine].contents[3]) } as ASMstr;
            }
            if (code[currentLine].contents[2] == "BOOL") {
                memory[getNumber(code[currentLine].contents[1])] = { type: "bool", trfa: getBool(code[currentLine].contents[3]) } as ASMbool;
            } if(code[currentLine].contents[2] == "LIST"){
                // to be implemented
            }
        }
        if (code[currentLine].contents[0] == "LOAD"){
            console.log(JSON.stringify(memory[getNumber(code[currentLine].contents[1])]));
        }
        if (code[currentLine].contents[0] == "ADD"){
            if (memory[getNumber(code[currentLine].contents[2])].type == "num"){
                memory[getNumber(code[currentLine].contents[1])] = { type: "num", val: getNumber(code[currentLine].contents[3]) + getNumber(code[currentLine].contents[2])} as ASMnum;
            }
            if (memory[getNumber(code[currentLine].contents[2])].type == "str") {
                memory[getNumber(code[currentLine].contents[1])] = { type: "str", txt: getString(code[currentLine].contents[3]) + getString(code[currentLine].contents[2]) } as ASMstr;
            }
            if (memory[getNumber(code[currentLine].contents[2])].type == "list") {
                // to be implemented
            }
        }
        if (code[currentLine].contents[0] == "WAIT") {
            pause(getNumber(code[currentLine].contents[1]));
        }
        if (code[currentLine].contents[0] == "GOTO"){
            currentLine = getNumber(code[currentLine].contents[1])-1;
        }
        if (code[currentLine].contents[0] == "CGTO") {
            if ((code[currentLine].contents[2] == "<" && getNumber(code[currentLine].contents[1]) < getNumber(code[currentLine].contents[3])) || (code[currentLine].contents[2] == "=" && getNumber(code[currentLine].contents[1]) == getNumber(code[currentLine].contents[3])) || (code[currentLine].contents[2] == ">" && getNumber(code[currentLine].contents[1]) > getNumber(code[currentLine].contents[3]))){
                currentLine = getNumber(code[currentLine].contents[4]) - 1;
            }
        }

        currentLine++;
    }

    console.log("program completed");
}