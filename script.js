const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia Já Incluso🛑")
    return
  }

  alert("Adicionado com Sucesso✅")
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

/* const data = {
  run: [
    "01-01",
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06",
    "01-07",
    "01-08",
    "01-09",
    "01-10",
  ],
  takePills: [
    ,
    "01-01",
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06",
    "01-07",
    "01-08",
    "01-09",
    "01-10",
  ],
  journal: ["01-02"],
}*/
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
