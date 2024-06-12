type NodeType = 
    | "Program" 
    | "NumericLiteral" 
    | "Identifier" 
    | "BinaryExpr";

// pretty much abstract
interface Stmt {
    kind: NodeType;
}

interface Program extends Stmt{
    kind: "Program";
    body: Stmt[];
}

interface Expr extends Stmt{}

// basically a two input func
interface BinaryExpr extends Expr{
    kind: "BinaryExpr";
    left: Expr;
    right: Expr;
    operator: string;
}

interface Identifier extends Expr{
    kind: "Identifier";
    symbol: string;
}

interface NumericLiteral extends Expr {
    kind: "NumericLiteral";
    value: number;
}

