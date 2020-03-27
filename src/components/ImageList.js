import React, {Component} from 'react';
import './imageList.css';
import ImageCards from "./ImageCards";

class ImageList extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        const imageList = this.props.images.map((image)=> {
            return <ImageCards  key={image.id} image={image} />
        });

        console.log(this.props.images);
        return (
            <div className="image_list">
                {
                    imageList
                }
            </div>
        );
    }
}

export default ImageList;
