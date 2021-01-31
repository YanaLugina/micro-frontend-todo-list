import TodoApp from '../TooApp';
import PropTypes from 'prop-types';

const App = ({ data, handleMouseLeave }) => {
    const initialHandleMouseLeave = (items) => {
        console.log('initialHandleMouseLeave', items)
    };

    const todoData = [
        { label: 'one', id: 1, done: false, important: true },
        { label: 'two', id: 2, done: false, important: false },
        { label: 'three', id: 3, done: true, important: true },
    ];

    return (
        <>
            <TodoApp todoData={data || todoData} handleMouseLeave={handleMouseLeave || initialHandleMouseLeave} />
        </>
    );
};

App.propTypes = {
    todoData: PropTypes.array,
    handleMouseLeave: PropTypes.func
};

export default App;
