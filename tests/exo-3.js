const examples = [
  {
    input: 
`24
03
2022`, output:
`Jeudi`
  },
  {
    input: 
`03
12
1905`, output:
`Dimanche`
  },
  {
    input: 
`25
07
2031`, output:
`Vendredi`
  },
  {
    input: 
`4
10
2031`, output:
`Samedi`
  },{
    input: 
`10
11
1801`, output:
`Mardi`
  }
]

const hiddenTests = [
  {
    input:
`25
03
2021`, output: `Jeudi`
  }
]


window.examples = examples;
window.hiddenTests = hiddenTests;