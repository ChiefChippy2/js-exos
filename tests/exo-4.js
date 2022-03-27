const examples = [
  {
    input: '1 2 3 4', output: '0'
  },{
    input: '2 2 3 4', output: '26'
  },{
    input: '2 20 3 4', output: '29240'
  },{
    input: '3 20 30 5', output: '322103'
  }
]

const hiddenTests = [
  {
    input: '3 19 3 5', output: `265525`
  }
]


window.examples = examples;
window.hiddenTests = hiddenTests;