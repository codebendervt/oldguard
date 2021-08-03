import Puzzle from 'assets/puzzle.svg'
import Rocket from 'assets/rocket.svg'
import './journal.module.css'

const JournalHeader = ({clicked}) => {



    return (


        <div className="w-full flex text-2xl py-4 text-accent font-default-sub-title">

            <div className="app-slot-header">
                <div onClick={() => clicked('galaxy')}  className="app-slot-container text-accent cursor-pointer">
                    <div className="icon-name-container ">
                        <Rocket />
                        <p className="text-sm mt-2">Galaxy</p>
                    </div>
                </div>
            </div>
  

            <div className="app-slot-header">
                <div  onClick={() => clicked('integrations')} className="app-slot-container text-accent cursor-pointer">
                    <div className="icon-name-container ">
                        <Puzzle />
                        <p className="text-sm mt-2">Integrations</p>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default JournalHeader;