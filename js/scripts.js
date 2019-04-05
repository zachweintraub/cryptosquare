function encrypt(str) {
  var pureStr = str.replace(/[.,\/#!@$%\^&\*;:{}='"\-_`~()\s\]\[\?]/g, '');
  var cols = Math.ceil(Math.sqrt(pureStr.length));
  var cryptoSquare = [];
  var result = '';
  var iter = 0;
  for(var i = 0; i < cols; i++) {
    cryptoSquare.push(pureStr.substring(0, cols).split(''));
    pureStr = pureStr.substring(cols);
  };
  for(var i = 0; i < cols; i++) {
    for(var j = 0; j < cryptoSquare.length; j++) {
      if(cryptoSquare[j][i] != null){
        if(iter === 5){
          result += ' ';
          iter = 0;
        }
        result += cryptoSquare[j][i];
        iter++;
      }
    }
  }
  console.log(cryptoSquare);
  return result;
}

function unencrypt(str) {
  var pureStr = str.replace(/[.,\/#!@$%\^&\*;:{}='"\-_`~()\s\]\[\?]/g, '');
  var cols = Math.ceil(Math.sqrt(pureStr.length));
  var cryptoSquare = [];
  var result = '';
  for(var i = 0; i < cols; i++) {
    cryptoSquare.push([]);
  }
  console.log(cryptoSquare);
  for(var i = 0; i < cols; i++) {
    for(var j = 0; j < cols; j++) {
      cryptoSquare[i].push(pureStr.charAt(0));
      pureStr = pureStr.substring(1);
      }
    }

  console.log(cryptoSquare);
  for(var i = 0; i < cols; i++) {
    for(var j = 0; j < cryptoSquare.length; j++) {
      if(cryptoSquare[j][i] != null){
        result += cryptoSquare[j][i];
      }
    }
  }
  return result;
}


$(document).ready(function(){
  $('#encryptForm').submit(function(event){
    event.preventDefault();
    var inputStr = $('#encryptInput').val();
    $('#encryptAns p').text(encrypt(inputStr));
  });
  $('#unencryptForm').submit(function(event){
    event.preventDefault();
    var inputStr = $('#unencryptInput').val();
    $('#unencryptAns p').text(unencrypt(inputStr));
  });
});
