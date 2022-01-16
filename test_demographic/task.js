/* デモ用のストループ課題 */
/*demographic*/
var demographic = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "あなたの性別を教えて下さい", 
      name: 'gender', 
      options: ['男性', '女性', 'その他', '回答しない'], 
      required: true
    }, 
    {
      prompt: "あなたは心理学者ですか？", 
      name: 'psychologist', 
      options: ['はい', 'いいえ'], 
      required: false
    }
  ],
  button_label: "次へ",
};


/*デブリーフィング*/
var debrief = {
type: "html-keyboard-response",
stimulus: "<p style='text-align:left'>質問は以上です。キーボードのキーをどれか押すと終わります。</p>",
};

/*タイムラインの設定*/
var timeline = [fullscreen,demographic,debrief];