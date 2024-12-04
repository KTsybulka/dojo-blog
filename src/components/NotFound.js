import { Link } from 'react-router-dom';
const NotFound
 = () => {
    return ( 
        <div class="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back hto home </Link>

        </div>
     );
}
 
export default NotFound
;