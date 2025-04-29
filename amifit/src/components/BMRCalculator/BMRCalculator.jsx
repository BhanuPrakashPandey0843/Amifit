import React, { useState } from "react";
import {
  FaMars,
  FaVenus,
  FaWeight,
  FaRulerVertical,
  FaClock,
} from "react-icons/fa";

const BMRCalculator = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [weightType, setWeightType] = useState("2");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [activity, setActivity] = useState("");
  const [bmr, setBmr] = useState(null);
  const [suggestion, setSuggestion] = useState("");
  const [pal, setPal] = useState(null);
  const [error, setError] = useState("");
  const [showWork, setShowWork] = useState(false);

  const calculateBMR = () => {
    if (!age || !gender || !heightFeet || !heightInches || !weight) {
      setError("Please fill in all fields.");
      return;
    }

    const height = heightFeet * 30.48 + heightInches * 2.54;
    let calculatedBmr;

    if (weightType === "1") {
      calculatedBmr =
        gender === "2"
          ? 66 + 6.2 * weight + 12.7 * height - 6.76 * age
          : 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    } else {
      calculatedBmr =
        gender === "2"
          ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
          : 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    setBmr(Math.round(calculatedBmr));
    setError("");

    const bmrSuggestion =
      calculatedBmr <= 1926
        ? "Little or no exercise."
        : calculatedBmr <= 2207
        ? "Exercise 1–3 times/week."
        : calculatedBmr <= 2351
        ? "Exercise 4–5 times/week."
        : calculatedBmr <= 2488
        ? "Daily or intense 3–4 times/week."
        : calculatedBmr <= 2796
        ? "Heavy exercise 6–7 days/week."
        : "Very intense exercise daily or physical job.";

    setSuggestion(bmrSuggestion);
  };

  const calculateCalories = () => {
    if (activity && bmr) {
      setPal(Math.round(bmr * parseFloat(activity)));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-16 px-6 flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          💪 BMR & Calorie Calculator
        </h1>

        {error && <div className="text-red-600 mb-4 font-medium">{error}</div>}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <p className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaVenus /> Gender
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="1"
                  checked={gender === "1"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="2"
                  checked={gender === "2"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
            </div>
          </div>

          {/* Weight */}
          <div>
            <p className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaWeight /> Weight
            </p>
            <div className="flex gap-4 mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="1"
                  checked={weightType === "1"}
                  onChange={(e) => setWeightType(e.target.value)}
                />
                lbs
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="2"
                  checked={weightType === "2"}
                  onChange={(e) => setWeightType(e.target.value)}
                />
                kg
              </label>
            </div>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>

          {/* Height */}
          <div>
            <p className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaRulerVertical /> Height
            </p>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Feet"
                className="w-1/2 border border-gray-300 rounded-lg p-2"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
              />
              <input
                type="number"
                placeholder="Inches"
                className="w-1/2 border border-gray-300 rounded-lg p-2"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <p className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaClock /> Age
            </p>
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        {/* Calculate BMR Button */}
        <button
          onClick={() => {
            calculateBMR();
            setShowWork(true);
          }}
          className="w-full mt-10 bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
        >
          🔍 Calculate BMR
        </button>

        {bmr && (
          <div className="bg-green-50 border border-green-300 rounded-xl p-6 mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-800">
              Your BMR: {bmr} kcal/day
            </h2>
            <p className="text-gray-600 mt-2 text-sm">{suggestion}</p>
          </div>
        )}

        {/* Activity level & calorie calculation */}
        {showWork && (
          <div className="mt-8">
            <label className="block text-lg font-semibold mb-2">
              Choose Your Activity Level:
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="">Select activity</option>
              <option value="1.2">Sedentary (little/no exercise)</option>
              <option value="1.375">Light (1–3 days/week)</option>
              <option value="1.55">Moderate (3–5 days/week)</option>
              <option value="1.725">Heavy (6–7 days/week)</option>
              <option value="1.9">
                Very Intense (physical job or athlete)
              </option>
            </select>
            <button
              onClick={calculateCalories}
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              🔥 Calculate Calorie Needs
            </button>

            {pal && (
              <div className="mt-6 bg-blue-50 border border-blue-300 rounded-xl p-6 text-center">
                <h2 className="text-2xl font-bold text-blue-800">
                  Daily Calorie Needs: {pal} kcal
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BMRCalculator;
