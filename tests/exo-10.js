const examples = [
  {
    input: '1\n++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>-----.>++++++++++++++++++.-----------------.--.<<++.>>+++++++++.-----------.<<.>>+++++++++++++++.-.++++..----------.-------.+++++++.+++.---.+++++++++++.---------------.<<.>>-.+.<<.>>+.-----.++++++++.+++++++++.-------------.<<.>>-.+.++++++++++++++.<<.>>-------.+++..+.+++.<<++++++++++++.------------.>>-----------------.++++++++++++++++.-----------------.++++++++.+++++.--------.+++++++++++++++.------------------.++++++++.<<.>>------.++++++++++++++.+.<<.>>----.----.+++++++++.--.<<.>>----------------.++++++++++++.++++++.---.++.<<++++++++++++++.', 
    output:`Avec la possibilite de faire des loops, brainfuck est plus court.`
  },
  {
    input: `1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>,[<+.>-]
5`,
    output: 'ABCDEF',
  },
  {
    'input': `3
++++++++++++++++++++ ajouter 20
[>+++>+++++>+++++>++++>++<<<<<-] loop 
>+.>------.>+++++++e++.>-----.>>,[<+>-]<.
65
`,
    'output': '=^mKi'
  }
]

const hiddenTests = [
  {
    input:
`14
+++++[
  >+++>+++
    [>++++>+++>++<<<-]
  <<-
  ]
  +++++
    [>>>>>+++++.<<<<<-]
    +++
    [
      [>>+>->-<+>>-<+<]
      >>>,
        [<<<<+>>>>-]
      <<<<<<-
    ]
65
66
90
67
`, output: `#(-27`,
  }
]


window.examples = examples;
window.hiddenTests = hiddenTests;

/*
pseudo-pseudo à bf

case 0
val + 65
afficher
case 1
lire
loop
  case 0
  val + 1
  afficher
  case 1
  val - 1
end

case 0
val + 20
loop
  case 1
  val + 3
  case 2
  val + 5
  case 3
  val + 5
  case 4
  val + 4
  case 5
  val + 2
  case 0
  val - 1
end
case 1
val + 1
afficher
case 2
val - 6
afficher
case 3
val + 9
afficher
case 4
val - 5
afficher
case 6
lire
loop
  case 5 
  val + 1
  case 6
  val - 1
end
case 5
afficher

case 0
val + 5
loop
  case 1
  val + 3
  case 2
  val + 3
  loop
    case 3
    val + 4
    case 4
    val + 3
    case 5
    val + 2
    case 2
    val - 1
  end
  case 0
  val - 1
end
case 0
val + 5
loop
  case 5
  val + 5
  afficher
  case 0
  val - 1
end
case 0
val + 3
loop
  loop
    case 2
    val + 1
    case 3
    val - 1
    case 4
    val - 1
    case 3
    val + 1
    case 5
    val - 1
    case 4
    val + 1
    case 3
  end 
  case 6  
  lire
  loop
    case 2
    val + 1
    case 6
    val - 1
  end
  case 0
  val - 1
end

function pseudoToBF(pseudo){
  // indent
  const raw = pseudo.replace(/^\s+/mg, '');
  let case0 = 0;
  let code = '';
  for(const instr of raw.split('\n')){
    const [cmd, ...args] = instr.split(' ');
    switch(cmd) {
      case 'case': const case1 = parseInt(args[0]); code += (case1 < case0 ? '<' :'>').repeat(Math.abs(case0-case1));case0 = case1; break;
      case 'val': let [type, val] = args; code += type.repeat(val); break;
      case 'afficher': code += '.'; break;
      case 'lire': code += ','; break;
      case 'loop': code += '[';break;
      case 'end': code += ']';break;
    }
  }
  return code;
}
*/