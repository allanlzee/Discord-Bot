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
        //let answers = randomQuestion.incorrect_answers.push(correctAnswer); 

        console.log(question); 
        console.log(answers); 
        message.channel.send(question); 
        message.channel.awaitMessages()


    }
}