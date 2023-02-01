import pfp from "../pfp.png"

let Main = () => {
    return (
        <div className="flex items-center pt-16">
            <div className="w-3/4">
                <h1 className="text-5xl font-bold max-w-2xl mb-6">A product designer and developer.</h1>
                <p className="text-2xl max-w-lg">I’m a student studying computer science at Cal State Fullerton. I’m passionate about inclusive design and front-end development.</p>
            </div>
            <img src={pfp} className="w-[26rem] ml-10"/>
        </div>
    )
}

export default Main;