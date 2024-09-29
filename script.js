let questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What color is the sky?", answer: "blue" }
  ];
  
  let currentQuestionIndex = 0;
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      displaySecretMessage();
    } else {
      nextQuestion();
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      document.getElementById("question-text").textContent = questions[currentQuestionIndex].question;
      document.getElementById("answer-input").value = "";
      document.getElementById("message").classList.add("hidden");
    } else {
      document.getElementById("question-box").innerHTML = "<p>You've answered all questions!</p>";
    }
  }
  
  function displaySecretMessage() {
    document.getElementById("message").textContent = "Congratulations! You unlocked the secret message!";
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("question-box").style.display = "none";
  }
  