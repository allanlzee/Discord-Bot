module.exports = {
    name: 'trivia_anime',
    description: 'anime and manga trivia questions', 

    async execute(message, args, fetch, servers) {
        // Generate trivia prompts
        const response = await fetch("https://opentdb.com/api.php?amount=50&category=31"); 
        const api = await response.json(); 

        let length = api.results.length; 
        var random = Math.floor(Math.random() * length); 

        let prompt = api.results[random]; 
        let question = prompt.question; 
        let correct = prompt.correct_answer; 

        let answers = []; 

        let answerLength = prompt.incorrect_answers.length + 1; 

        // Shuffle the random
        let shuffle = Math.floor(Math.random() * answerLength); 

        let m = 0; 
        
        for (let i = 0; i < answerLength; i++) {
            if (i == shuffle) {
                answers.push(correct); 
            } else {
                answers.push(prompt.incorrect_answers[m]); 
                m++; 
            }
        }

        // Fix the Correct Answer
        let indexStart = -1; 
        for (let i = 0; i < correct.length; i++) {
            if (correct[i] == /[&;]/ && indexStart == -1) {
                indexStart = i;
            } else if (correct[i] == /[&;]/ && indexStart >= 0) {
                correct.replace(correct.substring(indexStart, i), ""); 
            }
        }

        let difficulty = prompt.difficulty; 

        let points; 
        switch(difficulty) {
            case 'easy':
                points = 10;
                break; 
            case 'medium':
                points = 20; 
                break;
            case 'hard':
                points = 30;
                break;
            default: 
                points = 25; 
                break; 
        }

        console.log(prompt); 
        
        const filter = userAnswer => {
            return prompt.correct_answer.toLowerCase() === userAnswer.content.toLowerCase() && userAnswer.author.id == message.author.id; 
        }

        message.channel.send(question).then(() => {
            message.channel.send(answers); 
            message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} got the correct answer!`);
                let member = collected.first().author.toString(); 
                if (!servers[member]) {
                    servers[member] = points; 
                } else {
                    servers[member] += points; 
                }
                message.channel.send(`${member} received ${points} points!`); 
            })
            .catch(collected => {
                message.channel.send(`The correct answer was "${correct}".`); 
            });
        }); 
    }
}