import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const quizQuestions = [
  {
    question: "What does JSX stand for in React?",
    options: ["JavaScript XML", "JavaScript X-File", "Java Syntax Extension", "Java XML Syntax"],
    answer: "JavaScript XML",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    answer: "<ul>",
  },
  {
    question: "In React, which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useReducer", "useMemo"],
    answer: "useState",
  },
  {
    question: "What is the default display value of the `<div>` element in CSS?",
    options: ["block", "inline", "flex", "grid"],
    answer: "block",
  },
  {
    question: "How do you pass data from a parent component to a child component in React?",
    options: ["Using Redux", "Using props", "Using context", "Using state"],
    answer: "Using props",
  },
  {
    question: "Which HTML element is used to define a table header?",
    options: ["<th>", "<td>", "<tr>", "<thead>"],
    answer: "<th>",
  },
  {
    question: "What does the CSS property `position: fixed;` do?",
    options: [
      "Positions an element relative to its parent",
      "Positions an element relative to the viewport",
      "Positions an element relative to its siblings",
      "Positions an element at the bottom of the page",
    ],
    answer: "Positions an element relative to the viewport",
  },
  {
    question: "In React, which method is used to handle side effects in functional components?",
    options: ["useEffect", "useState", "useCallback", "useContext"],
    answer: "useEffect",
  },
  {
    question: "Which attribute is used in HTML to specify the source of an image?",
    options: ["href", "src", "alt", "link"],
    answer: "src",
  },
  {
    question: "What is the purpose of the `key` prop in React?",
    options: [
      "To identify unique elements in a list",
      "To store the state of a component",
      "To handle events in a component",
      "To pass data between components",
    ],
    answer: "To identify unique elements in a list",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState([]); 
  const handleAnswerSubmit = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setAnswers((prevAnswers) => [...prevAnswers, selectedOption]); 
      setCurrentQuestion(nextQuestion);
      setSelectedOption(answers[nextQuestion] || ''); 
    } else {
      setShowScore(true); 
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || ''); 
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption('');
    setAnswers([]);
    setShowScore(false);
  };

  return (
    <>
      <div className='bg-dark w-100 d-flex align-items-center' style={{ margin: "0px", padding: "0px", height: "100vh",backgroundImage:`url('https://www.shutterstock.com/shutterstock/videos/1100708873/thumb/1.jpg?ip=x480')`,backgroundSize:"cover",backgroundPosition: "center", }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card>
                <Card.Body>
                  {showScore ? (
                    <div>
                      <h1 className='text-center mb-3'>Quiz App</h1>
                      <hr />
                      <h3>Congratulations!!! <br />Your score is {score} out of {quizQuestions.length}</h3>
                      <Button className='mt-3' variant="dark" onClick={resetQuiz}>Restart Quiz</Button>
                    </div>
                  ) : (
                    <>
                      <h1 className='text-center mb-3'>Quiz App</h1>
                      <hr />
                      <h4 className='mt-2'>{quizQuestions[currentQuestion].question}</h4>
                      <div className="d-grid gap-2 mt-4">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <Button
                            key={index}
                            variant={selectedOption === option ? "dark" : "outline-dark"}
                            onClick={() => setSelectedOption(option)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <Button
                          variant="dark"
                          onClick={handlePrevious}
                          disabled={currentQuestion === 0}
                        >
                          Previous
                        </Button>
                        <Button
                          variant="dark"
                          onClick={handleAnswerSubmit}
                          disabled={!selectedOption}
                        >
                          {currentQuestion === quizQuestions.length - 1 ? "Submit" : "Next"}
                        </Button>
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default QuizApp;
