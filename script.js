function insert(num) {
  document.form.text.value = document.form.text.value + num;
}

function equ() {
  var exp = document.form.text.value;
  document.form.text.value = eval(exp);

}

function clean() {
  document.form.text.value = "";
}

function back() {
  var exp = document.form.text.value;
  document.form.text.value = exp.substring(0, exp.length - 1);
}