import React, { useState } from "react";

const QuizComponent = ({ questions }) => {
    // State to hold selected answers per question index
    const [selectedAnswers, setSelectedAnswers] = useState({});
    // State to track if the quiz has been submitted
    const [submitted, setSubmitted] = useState(false);

    // Handler for when an option is selected
    const handleSelect = (questionIndex, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer,
        }));
    };

    // Handler for submitting the quiz
    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className="quiz-container p-4 bg-white rounded shadow-md">
            {/* Tailwind classes:
            p-4: padding,
            bg-white: white background,
            rounded: rounded corners,
            shadow-md: medium shadow for elevation */}
            <h2 className="quiz-title text-2xl font-bold mb-4">
                Quiz
            </h2>
            {questions.map((q, index) => (
                <div key={index} className="quiz-question mb-6">
                    <p className="question-text font-semibold mb-2">
                        {q.question}
                    </p>
                    <div className="options space-y-2">
                        {/* Tailwind:
                  space-y-2 adds vertical spacing between options */}
                        {q.options.map((option, optIndex) => (
                            <button
                                key={optIndex}
                                onClick={() => handleSelect(index, option)}
                                className={`w-full text-left px-4 py-2 border rounded 
                  ${selectedAnswers[index] === option ? "bg-blue-200" : "bg-gray-100"}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {submitted && (
                        <div className="result mt-2">
                            {selectedAnswers[index] === q.answer ? (
                                <span className="text-green-600 font-semibold">
                  Correct!
                </span>
                            ) : (
                                <span className="text-red-600 font-semibold">
                  Incorrect. Correct answer: {q.answer}
                </span>
                            )}
                        </div>
                    )}
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="submit-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
            >
                Submit Answers
            </button>
        </div>
    );
};

export default QuizComponent;
