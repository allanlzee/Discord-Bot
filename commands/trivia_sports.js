// https://opentdb.com/api.php?amount=15&category=21

module.exports = {
    name: "trivia_sports",
    description: "Sports trivia",

    async execute(message, args, fetch) {
        const response = await fetch("https://opentdb.com/api.php?amount=15&category=21"); 
        const api_response = await response.json(); 

        let length = api_response.results.length; 
        var random = Math.floor(Math.random() * length); 

        let randomQuestion = api_response.results[random]; 
        let question = randomQuestion.question; 
        let correctAnswer = question.correct_answer; 
        
        message.channel.send(question);
        const filter = msg => msg.content.includes('discord'); 

        const answer = await message.channel.awaitMessages(filter, {maxMatches: 10, time: 20000, errors: ['time', 'maxMatches']})
            .then(collected => {
                message.channel.send(`${collected.first().author} is correct!`);
            }) 
            .catch(collected => {
                message.channel.send("No correct answers. Tough luck."); 
            });
        
        let reply; 
        if (answer) {
            reply = answer.first(); 
            if (reply.content.toLowerCase() === correctAnswer.toLowerCase()) {
                message.channel.send("Correct."); 
            } else {
                message.channel.send("Incorrect."); 
            }
        }     
    }
}