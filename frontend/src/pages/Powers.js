import React from 'react';

const Powers = () => {
    return (
        <div className="container row">
        <form>
            <div className="mb-3 col-4">
                <label  class="form-label">Powers </label>
                <input type="text" class="form-control" placeholder="Enter Power" ></input>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>
    </div>
    );
};

export default Powers;