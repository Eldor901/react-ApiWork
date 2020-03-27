import React, {Component} from "react";
import SearchBar from "./SearchBar";
import axios from  "axios";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {images: []};
    }

    onSearchSubmit = async(term) =>
    {
       const respone = await unsplash.get('search/photos', {
            params: {query: term, per_page: 30},
        });

       this.setState( {images: respone.data.results});

    };

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length}
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;
