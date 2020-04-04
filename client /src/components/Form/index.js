import React from "react";

function Form(props) {
    const [query, setQuery] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();

        if (props.onFormSubmit) {
            props.onFormSubmit(query);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <form className="col 12" onSubmit={handleFormSubmit}>
                    <h3>Search for a Book</h3>
                    <div className="row">
                        <div className="input-field col 12">
                            <Input
                            placeholder="Title"
                            id="firstName"
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col 12">
                            <button className="btn btn-lg btn-danger float-right">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;