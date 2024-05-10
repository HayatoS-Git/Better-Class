//Create Input-Field at 出席登録 Page
var span = document.querySelector('div#breadCrumbArea > div > ul > li > span > span');

if (span.textContent === '出席登録') {
  const labelElement = document.querySelector('label.gray');

  if (labelElement && labelElement.textContent.trim() === "認証コード") {
    //新規input要素を追加
    let add_html_code = '<div class="better-class"><div><label for="four-digit-input">認証コード</label><input type="number" id="four-digit-input"  min="0" max="9999" oninput="javascript: this.value = this.value.slice(0, 4);"></div></div>';
    const parentDiv = labelElement.parentElement;
    parentDiv.insertAdjacentHTML( 'afterEnd', add_html_code);
    
    //オリジナルinput要素を取得
    let attend_code = new Array(4);
    const inputElements = parentDiv.querySelectorAll('input');
    inputElements.forEach(function(inputElement, index){
      attend_code[index] = inputElement;
    });

    //新規inputの数値をオリジナルinputに入力
    const inputBox = document.getElementById('four-digit-input');
    inputBox.addEventListener('input', () => {
      const inputText = inputBox.value;
      if (inputText.length === 4) {
        attend_code[0].value = inputText.charAt(0);
        attend_code[1].value = inputText.charAt(1);
        attend_code[2].value = inputText.charAt(2);
        attend_code[3].value = inputText.charAt(3);
      }
    });
  }

}

//Click Button When Press "Enter"
document.getElementById("four-digit-input").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const buttonElements = document.querySelectorAll('span.ui-button-text.ui-c');
    
    buttonElements.forEach(buttonElement => {
      if (buttonElement && buttonElement.textContent.trim() === "出席登録する") {
        console.log("click!");
        buttonElement.parentElement.click();
      }
    });
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
