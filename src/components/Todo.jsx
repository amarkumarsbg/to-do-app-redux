import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../Redux/Action/action";
import FilterButton from "./FilterButton";
import { BsSearch } from "react-icons/bs";
import List from "./List";

const Todo = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const saveTodo = () => {
    if (todoText.trim() !== "") {
      handleAddTodo(todoText.trim());
      setTodoText("");
    }
  };

  const handleSearchTodo = (value) => {
    setSearchText(value);
    dispatch(updateSearchTodo(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-blue-700 uppercase">
        Todo List App
      </h2>

      {/* Input and Button */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter your task"
          className="flex-grow border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
          name="text"
          id="addTodo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 rounded hover:bg-blue-800 focus:outline-none"
          onClick={saveTodo}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* Filter and Search */}
      <div className="flex items-center justify-between flex-wrap mb-4">
        <FilterButton />
        <div className="flex items-center mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            name="search"
            onChange={(e) => handleSearchTodo(e.target.value)}
            id="searchTodo"
            className="flex-grow rounded border-b-2 p-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4"
          />
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => handleSearchTodo(searchText)}
          >
            <BsSearch />
          </button>
        </div>
      </div>

      {/* Todo List */}
      <List />
    </div>
  );
};

export default Todo;
