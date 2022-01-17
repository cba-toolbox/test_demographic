/*demographic*/
var demographic = {
  type: jsPsychSurveyMultiChoice,
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

/*タイムラインの設定*/
var timeline = [fullscreen,demographic];