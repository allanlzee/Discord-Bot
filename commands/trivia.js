module.exports = {
    name: 'trivia',
    description: 'trivia questions',

    async execute(message, args, fetch, servers) {
        // Generate trivia prompts
        const response = await fetch("https://opentdb.com/api.php?amount=15&category=21"); 
        const api = await response.json(); 

        let length = api.results.length; 
        var random = Math.floor(Math.random() * length); 

        let prompt = api.results[random]; 
        let question = prompt.question; 
        let correct = prompt.correct_answer; 

        // Fix the Correct Answer
        let indexStart = -1; 
        for (let i = 0; i < correct.length; i++) {
            if (correct[i] == /[&;]/ && indexStart == -1) {
                indexStart = i;
            } else if (correct[i] == /[&;]/ && indexStart >= 0) {
                correct.replace(correct.substring(indexStart, i), ""); 
            }
        }

        // Fix the question 
        question.replace("&#039;", "'"); 
        correct.replace('&iacute;', "i"); 
        question.replace('&quot;', ""); 
        

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