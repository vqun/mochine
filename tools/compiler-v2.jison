/* description: typegine */

/* lexical grammar */
%lex
%%

\s+|\'|\"                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"("                   return '('
")"                   return ')'
"int"                 return 'Int'
"number"              return 'Number'
"array"               return 'Array'
"bool"                return 'Bool'
"string"              return 'String'
"date"                return 'Date'
"enum"                return 'Enum'
","                   return ','
<<EOF>>               return 'EOF'
[^()'"]*              return 'INVALID'

/lex

%left ','
%left 'Int' 'Number' 'Array' 'Bool' 'String' 'Date' 'Enum'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : NUMBER
        {$$ = [].concat(Number(yytext));}
    | '(' e ')'
        {$$ = $2;}
    | e ',' e
        {$$ = [].concat($1,$3)}
    | INVALID
        {$$ = $1}
    | Int e
        {$$ = Typegines.int.apply(Typegines, [].concat($2));}
    | Number e
        {$$ = Typegines.number.apply(Typegines, [].concat($2));}
    | Bool e
        {$$ = Typegines.bool.apply(Typegines, [].concat($2));}
    | String e
        {$$ = Typegines.string.apply(Typegines, [].concat($2));}
    | Enum e
        {$$ = Typegines.enum.apply(Typegines, [].concat($2));}
    | Date e
        {$$ = Typegines.date.apply(Typegines, [].concat($2));}
    | Array e
        {$$ = Typegines.array.apply(Typegines, [].concat($2));}
    | '(' ')'
        {$$ = null;}
    ;