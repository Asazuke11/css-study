var row_1 = document.getElementById('row_1');
var row_2 = document.getElementById('row_2');
var row_3 = document.getElementById('row_3');
var row_4 = document.getElementById('row_4');
var row_5 = document.getElementById('row_5');
var row_6 = document.getElementById('row_6');
var row_7 = document.getElementById('row_7');

//fontのサイズ数値
var row_1_size = 100;
var row_2_size = 140;
var row_3_size = 180;
var row_4_size = 220;
var row_5_size = 260;
var row_6_size = 300;
var row_7_size = 340;

//各<p>のフォントサイズ指定
row_1.style.fontSize = (`${row_1_size}px`);
row_2.style.fontSize = (`${row_2_size}px`);
row_3.style.fontSize = (`${row_3_size}px`);
row_4.style.fontSize = (`${row_4_size}px`);
row_5.style.fontSize = (`${row_5_size}px`);
row_6.style.fontSize = (`${row_6_size}px`);
row_7.style.fontSize = (`${row_7_size}px`);


function anime() {
  //フォントサイズを０．１ずつ減少
  row_1_size = row_1_size - 0.1;
  row_2_size = row_2_size - 0.1;
  row_3_size = row_3_size - 0.1;
  row_4_size = row_4_size - 0.1;
  row_5_size = row_5_size - 0.1;
  row_6_size = row_6_size - 0.1;
  row_7_size = row_7_size - 0.1;

  //小さくしたフォントサイズに変更
  row_1.style.fontSize = (`${row_1_size}px`);
  row_2.style.fontSize = (`${row_2_size}px`);
  row_3.style.fontSize = (`${row_3_size}px`);
  row_4.style.fontSize = (`${row_4_size}px`);
  row_5.style.fontSize = (`${row_5_size}px`);
  row_6.style.fontSize = (`${row_6_size}px`);
  row_7.style.fontSize = (`${row_7_size}px`);
}

setInterval(anime, 10);