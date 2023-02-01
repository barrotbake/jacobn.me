
let ProjTile = (props) => {
    let img = props.src
    return (
        <div>
            <a href={props.link}>
            <img className="max-w-md rounded-xl" src={img}/>
            <h1 className="text-3xl font-bold my-4">{props.title}</h1>
            </a>
            <p className="max-w-lg text-xl mb-12 mr-10">{props.desc}</p>
        </div>
        
        
    )
}

export default ProjTile;