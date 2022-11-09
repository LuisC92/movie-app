import React, {useState} from "react";

const AddMovie = ({handleSubmit}) => {

    const [addMovie, setAddMovie] = useState({
        title:"",
        director:"",
        year:"",
        color:"",
        duration:""
    })

    const handleChange = (event) =>{
        const newName = event.target.name
        const newValue = event.target.value
        setAddMovie({...addMovie,[newName]: newValue})
    }

  return (
    <div>
      <h2>AddMovie</h2>
      <form onSubmit={(event)=>handleSubmit(event,addMovie)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" placeholder="title" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input type="text" name="director" placeholder="director" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="year">Year: </label>
          <input type="text" name="year" placeholder="year" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input type="text" name="color" placeholder="color" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="duration">Duration: </label>
          <input type="text" name="duration" placeholder="duration" onChange={handleChange} />
        </div>
        <br/>
        <button type="submit">Submit a new Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
