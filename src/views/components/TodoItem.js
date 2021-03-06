import React from 'react';

class TodoItem extends React.Component {
    static defaultProps = {
        item: {},
        onRemove: () => { },
        onUpdate: () => { },
    }

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.check = this.check.bind(this);

        this.input = React.createRef();
    }

    update() {
        const { item } = this.props;
        item.description = this.input.current.value;
        this.props.onUpdate(item);
    }

    remove() {
        this.props.onRemove(this.props.item.id);
    }

    check() {
        const { item } = this.props;
        item.isChecked = !item.isChecked;
        this.props.onUpdate(item);
    }

    render() {
        const { props } = this,
            item = props.item;
        return (
            <li className="todo-list-item">
                <input className="tw-check" type="checkbox" checked={item.isChecked} onChange={this.check} />
                <input className="tw-input"
                    ref={this.input}
                    disabled={item.isChecked}
                    type="text"
                    defaultValue={item.description}
                    onBlur={this.update}
                />
                <button className="tw-btn" onClick={this.remove}>X</button>
            </li>
        )
    }
}

export default TodoItem;