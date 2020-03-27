import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ImageCards extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {spans: 0, isOpen: false};
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>
    {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/ 10);
        this.setState({spans: spans})
    };

    enlargeImage = () =>
    {
        this.setState({isOpen: true});
    };

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    onClick={this.enlargeImage}

                />


                {this.state.isOpen && (
                    <Lightbox
                        mainSrc={urls.regular}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
            </div>
        );
    }
}

export default ImageCards;
