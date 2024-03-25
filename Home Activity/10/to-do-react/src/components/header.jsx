function Header(props) {
    return (
        <>
            <h1>To Do Web App</h1>
            <div>
                <input type="text" value={props.value} onChange={props.onChange}/>
                <button onClick={props.click}>Add Task</button>
            </div>
        </>
    );
}

export default Header;