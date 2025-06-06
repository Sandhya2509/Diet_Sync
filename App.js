// src/App.js
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const defaultMeals = {
  Monday: {
    meals: {
      Breakfast: { name: "Oatmeal with Fruits", ingredients: ["Oats", "Milk", "Banana", "Honey"] },
      Lunch: { name: "Paneer Curry & Rice", ingredients: ["Paneer", "Tomato", "Spices", "Rice"] },
      Dinner: { name: "Vegetable Soup", ingredients: ["Carrot", "Peas", "Beans", "Salt"] },
    },
    nutrition: { Fat: 40, Protein: 25, Carbs: 35 },
  },
  Tuesday: {
    meals: {
      Breakfast: { name: "Smoothie Bowl", ingredients: ["Banana", "Berries", "Yogurt", "Chia"] },
      Lunch: { name: "Chicken Wrap", ingredients: ["Chicken", "Lettuce", "Tortilla"] },
      Dinner: { name: "Pasta", ingredients: ["Pasta", "Tomato Sauce", "Cheese"] },
    },
    nutrition: { Fat: 30, Protein: 30, Carbs: 40 },
  },
  Wednesday: {
    meals: {
      Breakfast: { name: "Toast and Eggs", ingredients: ["Bread", "Eggs", "Butter"] },
      Lunch: { name: "Grilled Fish & Veggies", ingredients: ["Fish", "Broccoli", "Olive Oil"] },
      Dinner: { name: "Rice & Lentils", ingredients: ["Rice", "Lentils", "Spices"] },
    },
    nutrition: { Fat: 25, Protein: 40, Carbs: 35 },
  },
  Thursday: {
    meals: {
      Breakfast: { name: "Yogurt Parfait", ingredients: ["Yogurt", "Granola", "Strawberries"] },
      Lunch: { name: "Quinoa Salad", ingredients: ["Quinoa", "Cucumber", "Tomato", "Feta"] },
      Dinner: { name: "Stir Fry Noodles", ingredients: ["Noodles", "Vegetables", "Soy Sauce"] },
    },
    nutrition: { Fat: 28, Protein: 32, Carbs: 40 },
  },
  Friday: {
    meals: {
      Breakfast: { name: "Banana Pancakes", ingredients: ["Banana", "Egg", "Oats"] },
      Lunch: { name: "Turkey Sandwich", ingredients: ["Turkey", "Bread", "Lettuce", "Cheese"] },
      Dinner: { name: "Grilled Chicken", ingredients: ["Chicken Breast", "Spices", "Olive Oil"] },
    },
    nutrition: { Fat: 35, Protein: 35, Carbs: 30 },
  },
  Saturday: {
    meals: {
      Breakfast: { name: "Avocado Toast", ingredients: ["Bread", "Avocado", "Egg"] },
      Lunch: { name: "Veggie Burger", ingredients: ["Bun", "Lettuce", "Tomato", "Patty"] },
      Dinner: { name: "Sushi Rolls", ingredients: ["Rice", "Seaweed", "Fish", "Cucumber"] },
    },
    nutrition: { Fat: 30, Protein: 30, Carbs: 40 },
  },
  Sunday: {
    meals: {
      Breakfast: { name: "French Toast", ingredients: ["Bread", "Egg", "Milk", "Cinnamon"] },
      Lunch: { name: "Spinach Pasta", ingredients: ["Pasta", "Spinach", "Garlic", "Cream"] },
      Dinner: { name: "Pumpkin Soup", ingredients: ["Pumpkin", "Cream", "Spices"] },
    },
    nutrition: { Fat: 32, Protein: 28, Carbs: 40 },
  },
};

function App() {
  const [meals, setMeals] = useState(defaultMeals);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [showIngredients, setShowIngredients] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");

  const toggleIngredients = (type) =>
    setShowIngredients((prev) => ({ ...prev, [type]: !prev[type] }));

  const handleAddMeal = () => {
    const type = prompt("Enter meal type (e.g. Snack):");
    const name = prompt("Enter meal name:");
    const ingredients = prompt("Enter ingredients (comma-separated):");
    if (!type || !name || !ingredients) return;
    setMeals((prev) => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        meals: {
          ...prev[selectedDay].meals,
          [type]: { name, ingredients: ingredients.split(',').map(i => i.trim()) },
        },
      },
    }));
  };

  const handleSuggestion = () => {
    if (!input.trim()) return;
    setSuggestions((prev) => [...prev, input]);
    setInput("");
  };

  const nutrition = meals[selectedDay].nutrition;
  const data = {
    labels: ["Fat", "Protein", "Carbs"],
    datasets: [{ data: [nutrition.Fat, nutrition.Protein, nutrition.Carbs], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
  };

  return (
    <div className="container">
      <h1>Diet Sync Meal Planner</h1>
      <div className="day-tabs">
        {Object.keys(meals).map((day) => (
          <button key={day} className={selectedDay === day ? 'active' : ''} onClick={() => setSelectedDay(day)}>
            {day.slice(0,3)}
          </button>
        ))}
      </div>
      <div className="meal-container">
        {Object.entries(meals[selectedDay].meals).map(([type, meal]) => (
          <div className="meal-section" key={type}>
            <div className="meal-header">{type}: {meal.name}</div>
            <div className="meal" onClick={() => toggleIngredients(type)}>
              {showIngredients[type] ? 'Hide Ingredients' : 'Show Ingredients'}
            </div>
            {showIngredients[type] && <div className="ingredients">Ingredients: {meal.ingredients.join(', ')}</div>}
          </div>
        ))}
        <button className="add-meal-button" onClick={handleAddMeal}>+ Add Meal</button>
      </div>
      <div className="chart-container">
        <Pie data={data} />
      </div>
      <div className="chat-container">
        <h2>Suggestions / Preferences</h2>
        <div className="chat-box">
          {suggestions.map((msg, i) => <div key={i}>📝 {msg}</div>)}
        </div>
        <div className="chat-input">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your suggestion..." />
          <button onClick={handleSuggestion}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
