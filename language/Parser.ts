class Parser {
    private tokens: Token[] = [];

    constructor(){};

    private not_eof(): boolean {
        return this.tokens[0].type != TokenType.EOF;
    }

    private at() {
        return this.tokens[0] as Token;
    }

    private eat() {
        const prev = this.tokens.shift() as Token;
        return prev;
    }

    private expect(type: TokenType, err: any) {
        const prev = this.tokens.shift() as Token;
        if (!prev || prev.type != type) {
            console.error("Parser Error:\n" + err + prev + " - Expecting: " + type);
            game.gameOver(true);
        }

        return prev;
    }

    public produceAST(sourceCode: string): Program {
        this.tokens = tokenise(sourceCode.split(""));
        const program: Program = {
            kind: "Program",
            body: [],
        };

        // Parse until end of file
        while (this.not_eof()) {
            program.body.push(this.parse_stmt());
        }

        return program;
    }

    // Handle complex statement types
    private parse_stmt(): Stmt {
        // skip to parse_expr
        return this.parse_expr();
    }

    // Handle expressions
    private parse_expr(): Expr {
        return this.parse_additive_expr();
    }

    // Handle Addition & Subtraction Operations
    private parse_additive_expr(): Expr {
        let left = this.parse_multiplicitave_expr();

        while (this.at().value == "+" || this.at().value == "-") {
            const operator = this.eat().value;
            const right = this.parse_multiplicitave_expr();
            left = {
                kind: "BinaryExpr",
                left,
                right,
                operator,
            } as BinaryExpr;
        }

        return left;
    }

    // Handle Multiplication, Division & Modulus Operations
    private parse_multiplicitave_expr(): Expr {
        let left = this.parse_primary_expr();

        while (
            this.at().value == "/" || this.at().value == "*" || this.at().value == "%"
        ) {
            const operator = this.eat().value;
            const right = this.parse_primary_expr();
            left = {
                kind: "BinaryExpr",
                left,
                right,
                operator,
            } as BinaryExpr;
        }

        return left;
    }

    // Orders Of Prescidence
    // AdditiveExpr
    // MultiplicitaveExpr
    // PrimaryExpr

    // Parse Literal Values & Grouping Expressions
    private parse_primary_expr(): Expr {
        const tk = this.at().type;

        // Determine which token we are currently at and return literal value
        switch (tk) {
            // User defined values.
            case TokenType.Identifier:
                return { kind: "Identifier", symbol: this.eat().value } as Identifier;

            // Constants and Numeric Constants
            case TokenType.Number:
                return {
                    kind: "NumericLiteral",
                    value: parseFloat(this.eat().value),
                } as NumericLiteral;

            // Grouping Expressions
            case TokenType.OpenParen: {
                this.eat(); // eat the opening paren
                const value = this.parse_expr();
                this.expect(
                    TokenType.CloseParen,
                    "Unexpected token found inside parenthesised expression. Expected closing parenthesis.",
                ); // closing paren
                return value;
            }

            // Unidentified Tokens and Invalid Code Reached
            default:
                console.error("Unexpected token found during parsing!" + this.at());
                game.gameOver(true);
                return null;
        }
    }
}
