// todo 
// make it possible to select mode
// code calculator
// continue with interpreter

namespace SpriteKind {
    export const Char = SpriteKind.create();
}

let inoutm: InputOutputManager = new InputOutputManager(OProg.Menu);

inoutm.code = "PLEASE SELECT MODEe  > T++e    ASM++".split("");
inoutm.drawScreen();