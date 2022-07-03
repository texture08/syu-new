function gen() {
  let e = document.getElementById("e").value;
  let v = document.getElementById("v").value;
  let i = document.getElementById("i").value;
  let type = document.getElementById("type").value;
  let result = document.getElementById("result");

  switch (v) {
    case "r":
      v = 1.8;
      break;

    case "y":
      v = 2.1;
      break;

    case "g":
      v = 2.1;
      break;

    case "b":
      v = 3.6;
      break;

    case "w":
      v = 3.6;
      break;
  }
  switch (type) {
    case "ma":
      i = i / 1000;
      break;

    case "a":
      i = i / 1;
      break;
  }

  let r = (e - v) / i;
  let p = i * (e - v);

  result.innerHTML = `<p>1/4抵抗: 0.25W 1/6抵抗: 0.167W<br>抵抗: ${r}Ω<br>電力: ${p}W</p>`;
}
