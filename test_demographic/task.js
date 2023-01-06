/*demographic*/
const demographic = {
  type: jsPsychSurvey,
  pages: [
    [ 
      {
        type: 'text',
        prompt: "年齢を数字（半角）で記入ください。", 
        name: '年齢', 
        textbox_columns: 5,
        required: false,
      },{
        type: 'multi-choice',
        prompt: "性別について以下から選択してください。", 
        options: ['女性','男性','その他','回答しない'],
        columns: 1,
        name: 'gender', 
      }
    ]
  ],
  title: '以下の質問に回答ください。',
  button_label_next: '次へ',
  button_label_back: '前へ',
  button_label_finish: '次へ',
  show_question_numbers: 'onPage'
};



/*タイムラインの設定*/
var timeline = [demographic];