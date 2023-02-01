import ProjTile from '../components/projTile'
import CanvasBotImg from '../canvasBot.png'
import ReclassImg from '../projectReclass.png'
import FlashCardImg from '../flashcard.png'
import TicTacImg from '../tictactoe.png'


let Projects = () => {
    let canvasBot = {
        src: CanvasBotImg,
        title:"Canvas Bot",
        desc:"A Canvas integration for your discord server",
        link: "https://github.com/barrotbake/Canvas-Bot"
    }
    let reclass = {
        src: ReclassImg,
        title:"Project Reclasss",
        desc:"Project Reclass is a multi-disciplinary nonprofit organization that teaches technical skills to incarcerated veterans.",
        link: "https://github.com/barrotbake/toynet-react"
    }

    let flashcard = {
        src: FlashCardImg,
        title:"Flashcard App",
        desc:"An ios app for making flashcards.",
        link: "https://github.com/barrotbake/Flash-Card-App"
    }

    let tictac = {
        src: TicTacImg,
        title:"Tic Tac Toe Website",
        desc:"An open-source tic tac toe game created in JS.",
        link: "https://github.com/barrotbake/tictactoe"
    }

    return (
        <div id="work" className="flex flex-col">
            <h1 className='text-4xl font-bold mb-8'>Projects</h1>
            <div className='flex flex-row space-x-20'>
            <ProjTile src={canvasBot.src} title={canvasBot.title} desc={canvasBot.desc}
            link={canvasBot.link}/>   
            <ProjTile src={reclass.src} title={reclass.title} desc={reclass.desc} link={reclass.link}/>
            </div>

            <div className='flex flex-row space-x-20'>
            <ProjTile src={flashcard.src} title={flashcard.title} desc={flashcard.desc} link={flashcard.link}/>   

            <ProjTile src={tictac.src} title={tictac.title} desc={tictac.desc} link={tictac.link}/>
            </div>
        </div>
    )
}

export default Projects;