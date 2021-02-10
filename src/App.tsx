import React, { useEffect, useState } from 'react'
import TodoList from './views/components/TodoList';
import { TodoServices } from './data/services/TodoServices'
import './App.css';
import NewTodoItem from './views/components/NewTodoItem';
import { Todo } from './interfaces/todo'

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  //Mount Component
  useEffect(() => {
    listTodos()
  }, [])

  const listTodos = async () => {
    const todoList = await TodoServices.list()
    setTodos(todoList || [])
  }

  //Unmount Component
  useEffect(() =>
    () => {
      // const todoList = await TodoServices.list();
      // this.setState({
      //   todoList
      // })
    }, [])

  const add = (description: string) => {
    TodoServices.create({ description, isChecked: false })
      .then(newItem => {
        const todoList: Todo[] = [...todos]

        todoList.push(newItem)
        setTodos(todoList)
      });
  }

  const remove = async (id: number) => {
    const todoList: Todo[] = [...todos]
    const index = todoList.findIndex(item => item.id === id)
    todoList.splice(index, 1)
    TodoServices.remove(id)
    setTodos(todoList)
  }

  const update = (item: Todo) => {
    const todoList = [...todos];
    const index = todoList.findIndex(i => i.id === item.id);
    todoList.splice(index, 1, item);
    TodoServices.update(item);
    setTodos(todoList)
  }

  const clear = () => {
    const todo: Todo[] = [],
      done: Todo[] = [],
      todoList: Todo[] = [...todos]

    todoList.forEach(item => {
      if (item.isChecked) {
        done.push(item);
      } else {
        todo.push(item);
      }
    });

    done.forEach(item => remove(item.id!));
    setTodos(todo);
  }

  return (
    <div className="App">
      <NewTodoItem onAdd={add} />
      <hr />
      <button className="tw-btn" onClick={clear}>Limpar</button>
      <hr />
      <TodoList items={todos} onRemove={remove} onUpdate={update} />
    </div>
  );
}

export default App;
