enum InputType {
    Calculator,
    Coding,
    Menu
}

class InputOutputManager {

    public state: InputType;

    private whiteLetters: { [key: string]: Image } = {};

    private lineLength: number = 150;

    public code: string[] = [];

    private scroll: number = 0;
    private cursor: Sprite = sprites.create(assets.image`cursor`);
    private cursorBack = 1;

    constructor(s5tate: InputType) {
        this.initDict();
        this.drawScreen();
        this.handleKeyInputs();

        this.state = s5tate;

        animation.runImageAnimation(this.cursor, assets.animation`cursorA`, 500, true);
        this.cursor.setPosition(1, 5);
    }

    private stringToList(str: string): string[] {
        let ret: string[] = [];

        for (let i = 0; i < str.length; i++) {
            ret.push(str.charAt(i));
        }

        return ret;
    }

    private initDict() {
        let validChars: string[] = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "X", "Y", "Z", "1",
            "2", "3", "4", "5", "6", "7", "8", "9", "0",
            ".", ":", ";", "(", ")", "[", "]", "{", "}",
            "+", "-", "*", "÷", "/", "\\", "|", "\"", "'",
            ",", "<", ">", "&", "!", "=", " "
        ];
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 9; i++) {
                this.whiteLetters[validChars[i + j * 9]] = this.charFromSpriteSheet(assets.image`white`, 6 * i, 9 * j);
            }
        }
    }

    public drawScreen() {
        sprites.allOfKind(SpriteKind.Char).forEach((value: Sprite) => {
            sprites.destroy(value);
        })

        if(this.state = InputType.Menu){
            this.cursor.setFlag(SpriteFlag.Invisible, true);
        } else {
            this.cursor.setFlag(SpriteFlag.Invisible, false);
        }

        let x = 4;
        let y = 5 + this.scroll;
        if (this.code.length - this.cursorBack < 1) {
            this.cursor.setPosition(1, 5);
        }

        for (let i = 0; i < this.code.length; i++) {

            x += 6;
            if (x >= this.lineLength) {
                y += 9;
                x = 4;
            }

            if (this.code[i] == "e") {
                y += 9;
                x = 4;
                if (i == (this.code.length - this.cursorBack)) {
                    this.cursor.setPosition(x - 3, y);
                }
                continue;
            }

            if (i == (this.code.length - this.cursorBack)) {
                this.cursor.setPosition(x - 3, y);
            }

            let char = sprites.create(this.whiteLetters[this.code[i]], SpriteKind.Char);
            char.setPosition(x - 6, y);
        }
    }

    private charFromSpriteSheet(sheet: Image, x1: number, y1: number): Image {
        let img: Image = image.create(5, 8);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                img.setPixel(i, j, sheet.getPixel(i + x1, j + y1));
            }
        }
        return img;
    }

    private handleKeyInputs() {
        browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "A");
            }
            this.drawScreen();
        });
        browserEvents.B.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "B");
            }
            this.drawScreen();
        });
        browserEvents.C.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "C");
            }
            this.drawScreen();
        });
        browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "D");
            }
            this.drawScreen();
        });
        browserEvents.E.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "E");
            }
            this.drawScreen();
        });
        browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "F");
            }
            this.drawScreen();
        });
        browserEvents.G.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "G");
            }
            this.drawScreen();
        });
        browserEvents.H.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "H");
            }
            this.drawScreen();
        });
        browserEvents.I.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "I");
            }
            this.drawScreen();
        });
        browserEvents.J.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "J");
            }
            this.drawScreen();
        });
        browserEvents.K.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "K");
            }
            this.drawScreen();
        });
        browserEvents.L.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "L");
            }
            this.drawScreen();
        });
        browserEvents.M.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "M");
            }
            this.drawScreen();
        });
        browserEvents.N.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "N");
            }
            this.drawScreen();
        });
        browserEvents.O.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "{");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "O");
                }
            }
            this.drawScreen();
        });
        browserEvents.P.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu) {
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "}");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "P");
                }
            }
            this.drawScreen();
        });
        browserEvents.Q.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "Q");
            }
            this.drawScreen();
        });
        browserEvents.R.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "R");
            }
            this.drawScreen();
        });
        browserEvents.S.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "S");
            }
            this.drawScreen();
        });
        browserEvents.T.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "T");
            }
            this.drawScreen();
        });
        browserEvents.U.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "U");
            }
            this.drawScreen();
        });
        browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "V");
            }
            this.drawScreen();
        });
        browserEvents.W.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "W");
            }
            this.drawScreen();
        });
        browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "X");
            }
            this.drawScreen();
        });
        browserEvents.Y.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "Y");
            }
            this.drawScreen();
        });
        browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "Z");
            }
            this.drawScreen();
        });
        browserEvents.Enter.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state == InputType.Coding){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "e");
            } else if (this.state == InputType.Calculator){
                // run as calculator
            }
            this.drawScreen();
        });
        browserEvents.Zero.onEvent(browserEvents.KeyEvent.Pressed, () => {

            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, ")");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "0");
                }
            }
            this.drawScreen();
        });
        browserEvents.One.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "!");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "1");
                }
            }
            this.drawScreen();
        });
        browserEvents.Two.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "2");
            }
            this.drawScreen();
        });
        browserEvents.Three.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "3");
            }
            this.drawScreen();
        });
        browserEvents.Four.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "4");
            }
            this.drawScreen();
        });
        browserEvents.Five.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "[");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "5");
                }
            }
            this.drawScreen();
        });
        browserEvents.Six.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "]");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "6");
                }
            }
            this.drawScreen();
        });
        browserEvents.Seven.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "&");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "7");
                }
            }
            this.drawScreen();
        });
        browserEvents.Eight.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "*");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "8");
                }
            }
            this.drawScreen();
        });
        browserEvents.Nine.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "(");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "9");
                }
            }
            this.drawScreen();
        });
        browserEvents.BackTick.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "\"");
            }
            this.drawScreen();
        });
        browserEvents.Alt.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu) {
                this.code.splice(this.code.length - this.cursorBack, 1);
            }
            this.drawScreen();
        });
        browserEvents.Comma.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "<");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, ",");
                }
            }
            this.drawScreen();
        });
        browserEvents.Period.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, ">");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, ".");
                }
            }
            this.drawScreen();
        });
        browserEvents.ForwardSlash.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "'");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "/");
                }
            }
            this.drawScreen();
        });
        browserEvents.BackSlash.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "|");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "\\");
                }
            }
            this.drawScreen();
        });
        browserEvents.SemiColon.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, ":");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, ";");
                }
            }
            this.drawScreen();
        });
        browserEvents.Hyphen.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, "-");
            }
            this.drawScreen();
        });
        browserEvents.Equals.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if (this.state != InputType.Menu){
                if (browserEvents.Shift.isPressed()) {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "+");
                } else {
                    this.code.insertAt(this.code.length - this.cursorBack + 1, "=");
                }
            }
            this.drawScreen();
        });
        browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, () => {
            if(this.state != InputType.Menu){
                this.code.insertAt(this.code.length - this.cursorBack + 1, " ")
            }
            this.drawScreen();
        });
        browserEvents.ArrowUp.onEvent(browserEvents.KeyEvent.Pressed, () => {
            
            this.scroll -= 9;
            this.drawScreen();
        });
        browserEvents.ArrowDown.onEvent(browserEvents.KeyEvent.Pressed, () => {
            this.scroll += 9;
            this.drawScreen();
        });
        browserEvents.ArrowLeft.onEvent(browserEvents.KeyEvent.Pressed, () => {
            this.cursorBack += 1;
            if (this.cursorBack - 1 > this.code.length) {
                this.cursorBack = this.code.length + 1;
            }
            this.drawScreen();
        });
        browserEvents.ArrowRight.onEvent(browserEvents.KeyEvent.Pressed, () => {
            this.cursorBack -= 1;
            if (this.cursorBack <= 1) {
                this.cursorBack = 1;
            }
            this.drawScreen();
        });
        browserEvents.CapsLock.onEvent(browserEvents.KeyEvent.Pressed, () => {
            // run as code
        });
    }
}