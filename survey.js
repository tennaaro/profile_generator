const { RSA_SSLV23_PADDING } = require('constants');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer1) => {
  console.log(`Thank you for your name: ${answer1}`);

  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`What a fun activity: ${answer2}`)

    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`Cool tunes: ${answer3}`)

      rl.question("Which meal is your favourite?", (answer4) => {
        console.log(`Oh I love: ${answer4}`)

        rl.question("What is your favourite thing to eat for that meal?", (answer5) => {
          console.log(`Oh I love that too: ${answer5}`)

          rl.question("What is your favourite sport?", (answer6) => {
            console.log(`Good choice of sport: ${answer6}`)

            rl.question("What is your superpower?", (answer7) => {
              console.log(`Good choice of sport: ${answer7}`)

              rl.close()
              console.log(`${answer1} loves ${answer2} and listening to ${answer3}. Their favourite meal is ${answer4} and food is definitely ${answer5}. They love to play ${answer6} and if they had a superpower, it would be ${answer7}.`)
            })
          })
        })
      })
    }) 
  });
});


