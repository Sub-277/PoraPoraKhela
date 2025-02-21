import { useState } from "react";

export default function MCQQuestion() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const question = "What is the capital of France?";
  const options = ["Berlin", "Madrid", "Paris", "Rome"];
  const correctAnswer = "Paris";

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <div className="space-y-2">
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="mcq"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="cursor-pointer"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button 
          onClick={handleSubmit} 
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
        {submitted && (
          <p className={`mt-4 text-lg font-semibold ${selectedOption === correctAnswer ? "text-green-500" : "text-red-500"}`}>
            {selectedOption === correctAnswer ? "Correct! 🎉" : "Wrong answer. Try again!"}
          </p>
        )}
      </div>
    </div>
  );
}
