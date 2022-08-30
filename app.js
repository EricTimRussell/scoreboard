
let home = 0

let away = 0

function drawScoreHome() {
  // @ts-ignore
  document.getElementById('homescore').innerHTML = `
  <div>
  ${home}
  </div>
  `
}

function drawScoreAway() {
  // @ts-ignore
  document.getElementById('awayscore').innerHTML = `
  <div>
  ${away}
  </div>
  `
}

function goalHome() {
  home++
  drawScoreHome()
}

function goalHome3() {
  (home += 3)
  drawScoreHome()
}

function goalHome6() {
  (home += 6)
  drawScoreHome()
}

function goalAway() {
  away++
  drawScoreAway()
}

function goalAway3() {
  (away += 3)
  drawScoreAway()
}

function goalAway6() {
  (away += 6)
  drawScoreAway()
}

function reset() {
  // @ts-ignore
  document.getElementById('awayscore').innerHTML = `
  ${away *= 0}
  `
  // @ts-ignore
  document.getElementById('homescore').innerHTML = `
  ${home *= 0}
  `
}


drawScoreAway()
drawScoreHome()