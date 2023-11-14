import { Link } from 'react-router-dom';

const notFound = () => {
    return ( 
        <div className="not-found">
            <div className="up">

            </div>
            <div className="down">
                <div className="butt">
                    Desolé, cette page n'as pu être trouver
                </div>
                <div className="butt">
                    Veuillez aller dans les autres pages via la barre de navigation
                </div>
            </div>
        </div>
     );
}
 
export default notFound;