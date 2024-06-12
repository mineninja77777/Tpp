// let x = 45 + (foo * bar)
// [letToken, identifierToken, equalsToken, numberToken, openPareb, identifierToken, ...]

enum TokenType{
    Number,
    Identifier,
    Equals,
    OpenParen,
    CloseParen,
    BinaryOperator, 
    Let,
    EOF,
}

// reserved Keywords
const KEYWORDS: {[id: string]: TokenType; } = {
    "let": TokenType.Let,
}

interface Token{
    value: string;
    type: TokenType
}


function token(value: string, type: TokenType): Token {
    return {value, type};
}

function isAlpha(src: string): boolean{
    return src.toUpperCase() != src.toLowerCase();
}

// only uses char
function isNum(src: string): boolean{
    const c = src.charCodeAt(0);
    const bounds = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
    return (c >= bounds[0] && c <= bounds[1])
}

function isSkippable(str: string){
    return str == ' '|| str == 'e' || str == ''; 
}

function tokenise(sourceCode: string[]): Token[]{
    const tokens: Token[] = [];
    const src = sourceCode;

    // go through each token until end of file, removing when done
    while (src.length > 0){
        if (src[0] == "("){
            tokens.push(token(src.shift(), TokenType.OpenParen));
        } else if (src[0] == ")"){
            tokens.push(token(src.shift(), TokenType.CloseParen));
        } else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/"){
            tokens.push(token(src.shift(), TokenType.BinaryOperator));
        } else if (src[0] == "="){
            tokens.push(token(src.shift(), TokenType.Equals));
        } else {
            // handle multiChar tokens

            //build number token
            if(isNum(src[0])){
                let num = "";
                while (src.length > 0 && isNum(src[0])){
                    num += src.shift();
                }
                tokens.push(token(num, TokenType.Number));
            } // is identifier
            else if(isAlpha(src[0])){
                let idn = ""; // foo || Let   (user defined vs scrcode defined)
                while (src.length > 0 && isAlpha(src[0])) {
                    idn += src.shift();
                }

                const reserved = KEYWORDS[idn];
                if(reserved == undefined){
                    tokens.push(token(idn, TokenType.Identifier));
                } else{
                    tokens.push(token(idn, reserved));
                }
            } else if(isSkippable(src[0])){
                src.shift();
            } else{
                console.log("unreconised char");
                game.over(false);
            }
        }
    }


    tokens.push(token("EndOfFile", TokenType.EOF));
    return tokens
}
