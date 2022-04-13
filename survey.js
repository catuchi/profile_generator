const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const surveyQuestions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const survey = [];

// for (let i = 0; i < surveyQuestions.length; i++) {
//   rl.question(surveyQuestions[i], (answer) => {
//     survey.push(answer);
//   })
//   console.log(survey);
//   rl.close();
// }

rl.question('What do you think of Node.js? ', (answer) => {
  survey.push(answer);
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's your name? Nicknames are also acceptable :", (answer) => {
    survey.push(answer);
    rl.question(surveyQuestions[1], (answer) => {
      survey.push(answer);
      rl.question(surveyQuestions[2], (answer) => {
        survey.push(answer);
        rl.question(surveyQuestions[3], (answer) => {
          survey.push(answer);
          rl.question(surveyQuestions[4], (answer) => {
            survey.push(answer);
            rl.question(surveyQuestions[5], (answer) => {
              survey.push(answer);
              rl.question(surveyQuestions[6], (answer) => {
                survey.push(answer);
                console.log(survey);
                rl.close();
              });
            });
          });
        });
      });
    });
  })
  
});