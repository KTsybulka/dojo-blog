const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New blog</h2>
            <form>
                <label>Blog title</label>
                <input 
                type="text"
                required />

                <lablel>Blog body</lablel>
                <textarea required></textarea>

                <label>Blog author:</label>
                <select>
                    <option value="mario"> mario</option>
                    <option value= "yoshi">yoshi</option>
                </select>
            </form>
        </div>
     );
}
 
export default Create;
