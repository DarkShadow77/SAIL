const Lizzy = (props) => {
    return ( <>
        <h1>My name is {props.name}</h1>
        <input type="text" onChange={props.change}/>
    </> );
}
 
export default Lizzy;