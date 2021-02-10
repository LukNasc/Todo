import React from 'react';
import { Todo } from '../../interfaces/todo';

import TodoItem from './TodoItem';

interface Props {
    items: Todo[],
    onRemove: (index: number) => void,
    onUpdate: (item: Todo) => void
}

const TodoList: React.FC<Props> = ({ items, onRemove, onUpdate }) => {

    const update = (item: Todo) => {
        onUpdate(item);
    }

    const remove = (id: number) => {
        onRemove(id);
    }
    return (

        items.length === 0
            ? <div>Não há itens na lista</div> :
            (
                <ul className="todo-list">
                    {
                        items.map(item => <TodoItem
                            key={item.id}
                            item={item}
                            onUpdate={update}
                            onRemove={remove}
                        />)
                    }
                </ul>
            )
    )
}

export default TodoList;