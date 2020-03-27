import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.state = {term: ""};

    }
    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onSubmitHandler(event)
    {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({term: ""});
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmitHandler} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input value={this.state.term} type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
