import { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const List = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchSearch = todo.text
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [todos, filter, search]);

  return (
    <ul>
      {filteredTodos.map((todo, i) => (
        <TodoItems key={i} todo={todo} index={i} />
      ))}
    </ul>
  );
};

export default List;
