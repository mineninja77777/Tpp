namespace SpriteKind {
    export const Char = SpriteKind.create();
}

// all caps;
// "e" is line break;



let whiteLetters: { [key: string]: Image } = {};
let validChars: string[] = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "1",
    "2", "3", "4", "5", "6", "7", "8", "9", "0",
    ".", ":", ";", "(", ")", "[", "]", "{", "}",
    "+", "-", "*", "÷", "/", "\\", "|", "\"", "'",
    ",", "<", ">", "&", "!", "=", " "
];

let lineLength: number = 150;

let code: string[] = stringToList("");
//console.log(code);
let scroll: number = 0;
let cursor: Sprite = sprites.create(assets.image`cursor`);
animation.runImageAnimation(cursor, assets.animation`cursorA`, 500, true);
cursor.setPosition(1,5);

let cursorBack = 1;

for (let j = 0; j < 7; j++){
    for (let i = 0; i < 9; i++){
        whiteLetters[validChars[i + j*9]] = charFromSpriteSheet(assets.image`white`, 6 * i, 9 * j);
    }
}

function stringToList(str: string): string[]{
    let ret: string[] = [];
    
    for (let i = 0; i < str.length; i++) {
        ret.push(str.charAt(i));
    }

    return ret;
}

function charFromSpriteSheet(sheet: Image, x1: number, y1: number): Image{
    let img: Image = image.create(5,8);
    for(let i = 0; i < 5; i++){
        for (let j = 0; j < 8; j++) {
            img.setPixel(i, j, sheet.getPixel(i+x1, j+y1));
        }
    }
    return img;
}

function drawScreen(){
    sprites.allOfKind(SpriteKind.Char).forEach((value: Sprite) => {
        sprites.destroy(value);
    })

    let x = 4;
    let y = 5 + scroll;
    console.log(code.length);
    if(code.length - cursorBack < 1){
        cursor.setPosition(1, 5);
    }

    for(let i = 0; i < code.length; i++){

        x+=6;
        if (x >= lineLength){
            y+=9;
            x = 4;
        }

        if(code[i] == "e"){
            y += 9;
            x = 4;
            if (i == (code.length - cursorBack)) {
                cursor.setPosition(x - 3, y);
            }
            continue;
        }

        if (i == (code.length - cursorBack)) {
            cursor.setPosition(x - 3, y);
        }

        let char = sprites.create(whiteLetters[code[i]], SpriteKind.Char);
        char.setPosition(x-6, y);
    }
}

function executeCode(){
    
}

function splitIntoTokens(): string[]{
    let tokens: string[] = [];
    let splitPoints: string[] = ["+", "=", "-", "*", "/", ".", ",", "(", ")"];


    return tokens;
}

drawScreen();

browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function() {
    code.insertAt(code.length - cursorBack+1, "A");
    drawScreen();
});
browserEvents.B.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "B");
    drawScreen();
});
browserEvents.C.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "C");
    drawScreen();
});
browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "D");
    drawScreen();
});
browserEvents.E.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "E");
    drawScreen();
});
browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "F");
    drawScreen();
});
browserEvents.G.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "G");
    drawScreen();
});
browserEvents.H.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "H");
    drawScreen();
});
browserEvents.I.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "I");
    drawScreen();
});
browserEvents.J.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "J");
    drawScreen();
});
browserEvents.K.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "K");
    drawScreen();
});
browserEvents.L.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "L");
    drawScreen();
});
browserEvents.M.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "M");
    drawScreen();
});
browserEvents.N.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "N");
    drawScreen();
});
browserEvents.O.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "{");
    } else {
        code.insertAt(code.length - cursorBack+1, "O");
    }
    drawScreen();
});
browserEvents.P.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "}");
    } else {
        code.insertAt(code.length - cursorBack+1, "P");
    }
    drawScreen();
});
browserEvents.Q.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "Q");
    drawScreen();
});
browserEvents.R.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "R");
    drawScreen();
});
browserEvents.S.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "S");
    drawScreen();
});
browserEvents.T.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "T");
    drawScreen();
});
browserEvents.U.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "U");
    drawScreen();
});
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "V");
    drawScreen();
});
browserEvents.W.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "W");
    drawScreen();
});
browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "X");
    drawScreen();
});
browserEvents.Y.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "Y");
    drawScreen();
});
browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "Z");
    drawScreen();
});
browserEvents.Enter.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "e");
    drawScreen();
});
browserEvents.Zero.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if(browserEvents.Shift.isPressed()){
        code.insertAt(code.length - cursorBack+1, ")");
    } else{
        code.insertAt(code.length - cursorBack+1, "0");
    }
    drawScreen();
});
browserEvents.One.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "!");
    } else {
        code.insertAt(code.length - cursorBack+1, "1");
    }
    drawScreen();
});
browserEvents.Two.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "2");
    drawScreen();
});
browserEvents.Three.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "3");
    drawScreen();
});
browserEvents.Four.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "4");
    drawScreen();
});
browserEvents.Five.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "[");
    } else {
        code.insertAt(code.length - cursorBack+1, "5");
    }
    drawScreen();
});
browserEvents.Six.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "]");
    } else {
        code.insertAt(code.length - cursorBack+1, "6");
    }
    drawScreen();
});
browserEvents.Seven.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "&");
    } else {
        code.insertAt(code.length - cursorBack+1, "7");
    }
    drawScreen();
});
browserEvents.Eight.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "*");
    } else {
        code.insertAt(code.length - cursorBack+1, "8");
    }
    drawScreen();
});
browserEvents.Nine.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "(");
    } else {
        code.insertAt(code.length - cursorBack+1, "9");
    }
    drawScreen();
});
browserEvents.BackTick.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "\"");
    drawScreen();
});
browserEvents.Alt.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.splice(code.length - cursorBack, 1);
    drawScreen();
});
browserEvents.Comma.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "<");
    } else {
        code.insertAt(code.length - cursorBack+1, ",");
    }
    drawScreen();
});
browserEvents.Period.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, ">");
    } else {
        code.insertAt(code.length - cursorBack+1, ".");
    }
    drawScreen();
});
browserEvents.ForwardSlash.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "'");
    } else {
        code.insertAt(code.length - cursorBack+1, "/");
    }
    drawScreen();
});
browserEvents.BackSlash.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "\\");
    } else {
        code.insertAt(code.length - cursorBack+1, "|");
    }
    drawScreen();
});
browserEvents.SemiColon.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, ":");
    } else {
        code.insertAt(code.length - cursorBack+1, ";");
    }
    drawScreen();
});
browserEvents.Hyphen.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, "-");
    drawScreen();
});
browserEvents.Equals.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (browserEvents.Shift.isPressed()) {
        code.insertAt(code.length - cursorBack+1, "+");
    } else {
        code.insertAt(code.length - cursorBack+1, "=");
    }
    drawScreen();
});
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    code.insertAt(code.length - cursorBack+1, " ")
    drawScreen();
});
browserEvents.ArrowUp.onEvent(browserEvents.KeyEvent.Pressed, function () {
    scroll -= 9;
    drawScreen();
});
browserEvents.ArrowDown.onEvent(browserEvents.KeyEvent.Pressed, function () {
    scroll+=9;
    drawScreen();
});
browserEvents.ArrowLeft.onEvent(browserEvents.KeyEvent.Pressed, function () {
    cursorBack++;
    if(cursorBack - 1 > code.length){
        cursorBack = code.length + 1;
    }
    drawScreen();
});
browserEvents.ArrowRight.onEvent(browserEvents.KeyEvent.Pressed, function () {
    cursorBack--;
    if (cursorBack <= 1) {
        cursorBack = 1;
    }
    drawScreen();
});