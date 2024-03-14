

const Person = (props) => {
    return(
        <>
            <h1>Hii my name is {props.oruko}, and i am {Math.floor(Math.random() * 30) + 1} years old</h1>
            {/* <h1>{props.children}</h1> */}
        </>
    )
}; 

export default Person;