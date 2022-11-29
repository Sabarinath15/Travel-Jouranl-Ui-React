import Tile from "./Tile";

//import data
import data from "../data";


const Main = () => {
    const Tiles = data.map(item => {
        return (
            <Tile key={item.id} detail={item} />
        );
    });
    return (
        <main>
            {Tiles}
        </main>
    );
}   

export default Main;