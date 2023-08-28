export default function PropReciever(props){

    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.rating}</h2>
            <h5>{props.detail}</h5>
        </div>
    )
}
