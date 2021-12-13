import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <div className="container row">
            <form>
                <div className="mb-3 col-4">
                    <label  class="form-label">Hero</label>
                    <input type="text" class="form-control" placeholder='Enter Hero'></input>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
                <button type="submit" class="btn btn-danger">Delete</button>
            </form>
        </div>
    );
};

export default Hero;