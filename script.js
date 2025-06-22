const marker = "##MARKER##";

function encryptText() {
  const text = document.getElementById('inputText').value;
  const key = document.getElementById('encryptionKey').value;
  const output = document.getElementById('outputText');

  if (!key) {
    alert('Please enter encryption key');
    return;
  }

  const shift = key.length;
  const fullText = marker + text;
  let result = '';

  for (let i = 0; i < fullText.length; i++) {
    const code = fullText.charCodeAt(i);
    result += String.fromCharCode(code + shift);
  }

  output.value = result;
}

function decryptText() {
  const text = document.getElementById('inputText').value;
  const key = document.getElementById('encryptionKey').value;
  const output = document.getElementById('outputText');

  if (!key) {
    alert('Please enter encryption key');
    return;
  }

  const shift = key.length;
  let result = '';

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    result += String.fromCharCode(code - shift);
  }

  if (!result.startsWith(marker)) {
    alert('Wrong password');
    output.value = '';
    return;
  }

  // Remove marker and display the actual decrypted text
  output.value = result.slice(marker.length);
}
