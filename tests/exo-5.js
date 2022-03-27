const examples = [
  {
    input: 
`0818237813`, output:
`+33 8 18 23 78 13`
  },
  {
    input : '0916452724',
    output: '+33 9 16 45 27 24',
  },
  {
    input : '+(09)16452-724',
    output: '+33 9 16 45 27 24',
  },
  {
    input : '0800jdfhzjfhzeze700az-+311',
    output: '+33 8 00 70 03 11',
  }
]

const hiddenTests = [
  {
    input:`0123-555+666`, output: `+33 1 23 55 56 66`
  },
  {
    input:`0975azyza-zadzgypl106777`, output: `+33 9 75 10 67 77`
  },
  {
    input:`0123559666`, output: `+33 1 23 55 96 66`
  },
]


window.examples = examples;
window.hiddenTests = hiddenTests;