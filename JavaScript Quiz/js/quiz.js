(function() {
      function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];
    
        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
          // we'll want to store the list of answer choices
          const answers = [];
    
          // and for each available answer...
          for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
    
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
          );
        });
    
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
      }
    
      function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
    
        // keep track of user's answers
        let numCorrect = 0;
    
        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
          // if answer is correct
          if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;
    
            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
          } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
          }
        });
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      }
    
      const quizContainer = document.getElementById("quiz");
      const resultsContainer = document.getElementById("results");
      const submitButton = document.getElementById("submit");
      const myQuestions = [
        {
          question: "1. Where are you supposed to place your Js file at in your HTML files?",
          answers: {
            a: "At the bottom of your HTML content, just above the closing body tag?",
            b: "The Top (above the body, below the .css file)",
            c: "Directly above your HTML content, below the header?",
            d: "All options are okay, our modern browsers will interpret all HTML Documents"
          },
          correctAnswer: "a"
        },
        {
          question: "2. Which of the following is a valid type of function javascript supports?",
          answers: {
            a: "named function",
            b: "anonymous function",
            c: "Both A and B",
            d: "none of the above"
          },
          correctAnswer: "c"
        },
        {
          question: "3. What is the syntax for the call method, and with what value? ",
          answers: {
            a: "call(), .var",
            b: "call(), .value",
            c: "apply(), .this",
            d: "call(), .this"
          },
          correctAnswer: "d"
        },
        {
          question: "4. Which of the following type of variable is visible only within a function where it is defined?",
          answers: {
            a: "global variable",
            b: "local variable",
            c: "Both of the above.",
            d: "localVar()"
          },
          correctAnswer: "b"
        },
        {
          question: "5. Which built-in method returns the characters in a string beginning at the specified location?",
          answers: {
            a: "substr()",
            b: "getSubstring()",
            c: "slice()",
            d: "dice()"
          },
          correctAnswer: "a"
        },
        {
          question: "6. Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
          answers: {
            a: " toSource()",
            b: "valueOf()",
            c: "toString()",
            d: "trueString"
          },
          correctAnswer: "a"
        },
        {
          question: "7. Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
          answers: {
            a: "concat()",
            b: "match()",
            c: "replace().",
            d: "search()",
            e: "subString()"
          },
          correctAnswer: "c"
        },
        {
          question: "8. Which of the following function of String object returns the calling string value converted to lower case?",
          answers: {
            a: "toLocaleLowerCase()",
            b: "toLowerCase()",
            c: "toString()",
            d: "substring()"
          },
          correctAnswer: "b"
        },
        {
          question: "9. Which of the following function of String object causes a string to be displayed in the specified color as if it were in a font color='color' tag?",
          answers: {
            a: "fixed()",
            b: "fontcolor()",
            c: "colorFont()",
            d: "bold()"
          },
          correctAnswer: "b"
        },
        {
          question: "10. Which of the following function of Array object joins all elements of an array into a string?",
          answers: {
            a: "concat()",
            b: "join()",
            c: "pop()",
            d: "joinPop()"
          },
          correctAnswer: "b"
        },
        {
          question: "11. Which of the following function of Array object removes the first element from an array and returns that element?",
          answers: {
            a: "reverse()",
            b: "slide()",
            c: "some()",
            d: "shift()",
            e: "removeEl()"
          },
          correctAnswer: "d"
        }
      ];
    
      // display quiz right away
      buildQuiz();
    
      // on submit, show results
      submitButton.addEventListener("click", showResults);
    })();
    