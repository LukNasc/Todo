import React,{useState} from 'react';

interface Props{
    onAdd: (description:string)=>void
}

const NewTodoItem: React.FC<Props> = ({onAdd})=>{

    const [description,setDescription] = useState<string>('')

    const handleChange = (event:any) => {
        const { target } = event,
            { name, value } = target;
 

        setDescription(value)
    }

    const add = (event:any) => {
        event.preventDefault();        
        if (description) {
            setDescription('')
            onAdd(description);
        }
    }

  
        return (
            <form onSubmit={add}>
                <input
                    className="tw-input"
                    type="text"
                    placeholder="Novo item"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />

                <button>Adicionar</button>
            </form>
        )
}

export default NewTodoItem;