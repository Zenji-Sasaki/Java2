const PointBtn = document.querySelector(".btnPoint")
var result = "";
var is_calc = false;
var point = "0";

window.onload = function () {
  result = document.getElementById('result');
}

//クリア(AC)機能
function ac_click(){
  result.value = "0";
  is_calc = false;
  if(point == "0"){
    PointBtn.disabled = false;
  }
}

//数字入力機能
function num_click(val){
  if(is_calc)  result.value = "0";
  is_calc = false;
  if(result.value =="0" && val == "0"){
    result.value = "0";
  }
  else if(result.value == "0" && val == "00"){
    result.value = "0";}
  else if(result.value == "0"){
    result.value = val;
  }else{
    result.value += val;
  }
}

//小数点入力機能
function point_click(val){
  if(is_calc)  result.value = "0";
  is_calc = false;
  if(point == "0"){
    PointBtn.disabled = true;
  }
  if(result.value == "0"){
    result.value = "0.";}
  else{
    result.value += val;
  }
}

//演算子機能
function ope_click(val){
  if(is_calc)  is_calc = false;
  if(point == "0"){
    PointBtn.disabled = false;
  }
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

//イコール機能
function equal_click(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
  if(point == "0"){
  PointBtn.disabled = false;
  }
}

//演算子連続入力防止機能
function is_ope_last(){
  return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}