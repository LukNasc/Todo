import React, { useRef } from 'react';
import { Todo } from '../../interfaces/todo';

interface Props{
    item: Todo,
    onRemove: (index: number)=>void,
    onUpdate: (item:Todo)=>void
}

const TodoItem: React.FC<Props> = ({item,onRemove,onUpdate}) => {

    const input = useRef<HTMLInputElement>(null)

    const update = ()=> {
        item.description = input.current?.value;
        onUpdate(item);
    }

    const remove = () => {
        onRemove(item.id!);
    }

    const check = () =>{
        item.isChecked = !item.isChecked;
        onUpdate(item);
    }

    return (
    <li className="todo-list-item">
        <input className="tw-check" type="checkbox" checked={item.isChecked} onChange={check} />
        <input className="tw-input"
            ref={input}
            disabled={item.isChecked}
            type="text"
            defaultValue={item.description}
            onBlur={update}
        />
        <button className="tw-btn" onClick={remove}>X</button>
    </li>
    );
}

export default TodoItem;