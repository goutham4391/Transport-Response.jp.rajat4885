$(document).ready(function(){
  // 査定用 validation
  var validateFunc = function() {
   $(".validate").validation({
      msgs: {
      zip: "7桁の郵便番号を入力してください",
      submit: "郵便番号は入力必須です。<br />7桁の郵便番号を正しく入力してく ださい。"
     },
      extension: {
      top: 20,
      left: -180
      }
    });
   $(".validate2").validation({
	      msgs: {
	      zip: "7桁の郵便番号を入力してください",
	      submit: "郵便番号は入力必須です。<br />7桁の郵便番号を正しく入力してく ださい。"
	     },
	      extension: {
	      top: 25,
	      left: 135
	      }
	    });
  }

  $(".validate,.validate2").click(function() {
    // 古いバリデーションを削除
    $("div.validationTip,div#dlgmat,div#dlg").each(function(){ $(this).remove(); });
    // 査定用 validation を有効化
    $("#zipcode").addClass("required");
    $("#zipcode").addClass("zip");

    $(".sateibtn").removeAttr("disabled");

    // validation 実行
     validateFunc();
});
});
