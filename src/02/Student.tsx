
interface Props {
    name: string
    age: string
    phnoe_number: string
   
}

export default function Student(props: Props){

    return(
        <div>
            Nom : <strong>{props.name}</strong><br />
            age : <strong>{props.age}</strong><br />
            Telephone : <strong>{props.phnoe_number}</strong>
        </div>
    )

}