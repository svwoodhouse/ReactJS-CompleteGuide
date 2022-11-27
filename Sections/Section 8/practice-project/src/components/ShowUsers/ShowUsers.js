import Card from "../UI/Card"
const ShowUsers = (props) => {

    return (
        <div>
            <ul>
            {
                props.data.map((attribute) => (
                    <li key={attribute.id}>
                    <Card>
                        <div>{`${attribute.username} (${attribute.age} years old)`}</div>
                    </Card>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default ShowUsers