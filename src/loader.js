//  id-exo
const idExo = document.getElementById('id-exo').value;
function createScript(url){
  const el = document.createElement('script');
  el.src = url;
  document.body.appendChild(el);
}
createScript(`tests/exo-${idExo}.js`);
createScript(`exo-${idExo}/réponse.js`);

async function load() {

  const idExo = document.getElementById('id-exo').value;

  let currentOutput = '';
  function handleOutput(...args) {
    currentOutput += args.map(x=>`${x}`).join(' ');
    showOutput();
    return 1;
  }

  function showOutput() {
    document.getElementById('output').innerHTML = currentOutput.replace(/</g,'&lt;').replace(/\r?\n/g, '<br>');
  }
  function showIntendedOutput() {
    document.getElementById('ex-output').innerHTML = getOutput();
  }
  function clearOutput() {
    currentOutput = '';
    document.getElementById('output').innerHTML = '';
  }
  function showInput() {
    document.getElementById('input').innerHTML = currentInput.join('<br>');
  }

  console.log = handleOutput;

  // test cases
  const [examples, hiddenTests] = [window.examples, window.hiddenTests];

  console.debug(examples);

  let currentTest = -1;
  let currentInput = [];
  // readline

  function loadReadline() {
    currentTest ++;
    if (currentTest >= examples.length) {
      return hiddenTests[currentTest - examples.length].input.split('\n');
    }
    return examples[currentTest].input.split('\n');
  }

  function getOutput() {
    if (currentTest >= examples.length) {
      return hiddenTests[currentTest - examples.length].output;
    }
    return examples[currentTest].output;
  }

  function readline() {
    if (!currentInput.length) return undefined;
    return currentInput.shift();
  }

  window.readline = readline;

  async function test() {
    currentTest = -1;
    while(currentTest + 1 < examples.length + hiddenTests.length) {
      currentInput = loadReadline();
      showInput();
      showIntendedOutput();
      clearOutput();
      //const {main} = await import(`../exo-${idExo}/réponse.js`);
      try{
        await main();

      } catch(e) {
        console.error(e);
        alert('Résultat incorrect.');
        return;
      }
      if (currentOutput.replace(/\r\n/g, '\n') !== getOutput()) {
        await new Promise(resolve=>setTimeout(resolve, 250));
        alert('Résultat incorrect.')
        return;
      }
      await new Promise(resolve=>setTimeout(resolve, 1000));
    }
    return alert('Bravo!')
  }

  document.querySelector('button').addEventListener('click', test);
}

window.addEventListener('load', load);