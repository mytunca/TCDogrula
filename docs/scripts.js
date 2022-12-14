document.querySelector("#tc").oninput = () => {
  const not = document.querySelector("#not")
  const sonIkiHane = document.querySelector('#sonIkiHane')

  not.textContent = "";
  sonIkiHane.textContent = "";

  if (!isNaN(tc.value)) {
    if (tc.value.length == 9) sonIkiHane.textContent = tcDogrula(tc.value);
  }
  else { not.textContent = "TC sadece sayılardan oluşmalıdır" }
}

function tcDogrula(numara) {
  const dizi = []
  for (let i = 0; i < 9; i++) {
    dizi[i] = parseInt(numara.substr(i, 1))
  }

  dizi[9] = (200 + (dizi[0] + dizi[2] + dizi[4] + dizi[6] + dizi[8]) * 7
   - (dizi[1] + dizi[3] + dizi[5] + dizi[7])) % 10;
  dizi[10] = (dizi.reduce((out, v) => out += v, 0)) % 10;

  return dizi[9].toString() + dizi[10].toString()

}