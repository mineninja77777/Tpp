// todo 
// make it possible to select mode
// code calculator
// continue with interpreter

namespace SpriteKind {
    export const Char = SpriteKind.create();
}

function compareList(l1: any[], l2: any[]): boolean{
    if(l1.length != l2.length){
        return false;
    }
    let f: boolean = true
    l1.forEach((val: any, i: number)=>{
        if(val != l2[i]){
            f = false;
        }
    })
    return f;
}

let inoutm: InputOutputManager = new InputOutputManager(OProg.Menu);

inoutm.code = "PLEASE SELECT MODEe  > T++e    ASM++".split("");
inoutm.drawScreen();