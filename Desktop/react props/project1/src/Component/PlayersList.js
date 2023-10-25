import Player from "./Player";


function PlayerList ({info}){
    console.log(info);
    return(
        <div>
            {info.map((element,index)=> {
                return <Player singlePlayer = {element} key={index} />
            })}
         
        </div>
    )
        
    }

export default PlayerList