import {
  ADD_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETED_TODO,
  MARK_COMPLETED_TODO,
  MARK_INCOMPLETE_TODO,
  REMOVE_TODO,
  SEARCH_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }, // Corrected to 'payload'
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }, // Corrected to 'payload'
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }, // Corrected to 'payload'
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED_TODO,
  payload: { id }, // Corrected to 'payload'
});

export const markInCompleted = (id) => ({
  type: MARK_INCOMPLETE_TODO,
  payload: { id }, // Corrected to 'payload'
});

export const filterTodo = (filter) => ({
  type: FILTER_TODO,
  payload: { filter }, // Corrected to 'payload'
});

export const updateSearchTodo = (search) => ({
  type: SEARCH_TODO,
  payload: { search }, // Corrected to 'payload'
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED_TODO,
});
