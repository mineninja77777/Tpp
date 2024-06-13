// split into chunks so that bodmas

type Csts = 
    "Statement" |
    "Program"   |
    "Number"    |
    "Operator";

interface CInh{
    kind: Csts;
}

interface CStmt extends CInh{
    kind: "Statement";
    contents: CInh[];
}

interface CProg extends CInh{
    kind: "Program";
    contents: CStmt[];
}

interface CNum extends CInh {
    kind: "Number";
    value: number;
}

interface COpr extends CInh {
    kind: "Operator";
    symb: string;
}

function Ctokens(src: string[]): CProg{
    let prog: CProg;


    return prog;
}

function cHandleExpr(src: string[]): CStmt{
    let stmt: CStmt = {contents: []} as CStmt;

    for(let i = 0; i < src.length; i++){
        if(isNum(src[i])){
            stmt.contents.push({value: parseFloat(src[i])} as CNum);
        } else if (src[i] == "+" || src[i] == "-" || src[i] == "*" || src[i] == "/") {
            stmt.contents.push({ symb: src[i] } as COpr);
        } else if(src[i] == "("){
            let next: CStmt = cHandleExpr(src.slice(i + 1));
            stmt.contents.push(next);
            i+=next.contents.length + 1;
        } else if (src[i] == ")") {
            return stmt;
        }
    }
    return stmt;
}



console.log(cHandleExpr("1 + (1 * 2)".split("")).contents[2]);