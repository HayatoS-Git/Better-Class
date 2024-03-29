//Create Input-Field at 出席登録 Page
var span = document.querySelector('div#breadCrumbArea > div > ul > li > span > span');

if (span.textContent === '出席登録') {
  let textbox = document.getElementsByClassName('ui-outputpanel ui-widget dataContent')[0];
  if (textbox === null){
    textbox = document.getElementById('funcForm:j_idt160:0:j_idt167');
  }
  if (textbox === null){
    textbox = document.getElementById('funcForm:j_idt160:1:j_idt167');
  }
  console.log(textbox);
  let add_code = '<div class="better-class"><div><label for="four-digit-input">認証コード</label><input type="number" id="four-digit-input"  min="0" max="9999" oninput="javascript: this.value = this.value.slice(0, 4);"></div></div>';
  textbox.insertAdjacentHTML( 'afterEnd', add_code);  
}

//Input to Messy Input-Field
const inputBox = document.getElementById('four-digit-input');

let ttt1, ttt2, ttt3, ttt4;
if( document.getElementById('funcForm:j_idt160:1:j_idt180') === null){
  ttt1 = document.getElementsByClassName('ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all verification1 verification')[0];
  ttt2 = document.getElementsByClassName('ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all verification2 verification')[0];
  ttt3 = document.getElementsByClassName('ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all verification3 verification')[0];
  ttt4 = document.getElementsByClassName('ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all verification4 verification')[0];
}
else{
  ttt1 = document.getElementById('funcForm:j_idt160:1:j_idt180');
  ttt2 = document.getElementById('funcForm:j_idt160:1:j_idt181');
  ttt3 = document.getElementById('funcForm:j_idt160:1:j_idt182');
  ttt4 = document.getElementById('funcForm:j_idt160:1:j_idt183');
}

if (span.textContent === '出席登録') {
  inputBox.addEventListener('input', () => {
    const inputText = inputBox.value;
    if (inputText.length === 4) {
      ttt1.value = inputText.charAt(0);
      ttt2.value = inputText.charAt(1);
      ttt3.value = inputText.charAt(2);
      ttt4.value = inputText.charAt(3);
    }
  });
  
  //Click Button When Press "Enter"
  document.getElementById("four-digit-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      document.getElementById("funcForm:j_idt235").click();
    }
  });

  //Input-Field Style
  document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('focusin', function() {
      this.parentNode.querySelector('label').classList.add('active');
    });
    
    input.addEventListener('focusout', function() {
      if (!this.value) {
        this.parentNode.querySelector('label').classList.remove('active');
      }
    });
  });
}

// ページ上のJavaScriptを無効化する
/*
const script = document.createElement('script');
script.textContent = `
  $(function () {
    $(document).off('keydown.disableF1toF12').on('keydown.disableF1toF12', function (e) {
      if (e.keyCode >= 112 && e.keyCode <= 123) {
        e.preventDefault();
      }
    });
  });
`;
document.body.appendChild(script);
*/
