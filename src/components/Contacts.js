const Contacts = (props) =>{
    return (
    <div>
    <h3>Name: {props.name}</h3>
    <p>Age: {props.age}</p>
    <p>School: {props.school}</p>
    <p>Graduation Year: {props.graduationYear}</p>
    </div>
    )
}

export default Contacts;