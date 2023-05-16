import { Link } from "react-router-dom";
import { useTodosQ } from "../hooks/useTodosQ";

const TodoList = () => {
    const todosQuery = useTodosQ();

    if (todosQuery.isLoading) {
        return <div>Loading...</div>;
    }

    if (todosQuery.error) {
        return <div>Error: {todosQuery.error.message}</div>;
    }




    return (
        <div>
            <Link to={'/login'} >login</Link>
            <h2>Todos</h2>
            {todosQuery.data.data?.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoList