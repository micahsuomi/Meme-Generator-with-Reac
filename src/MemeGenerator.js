import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({allMemeImages : memes})
                console.log(memes[0]);

            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name] : value
         })
    }

    handleSubmit(event) {
        event.preventDefault();
        //get a random integer (index in the array)
        const randomNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randomMeme = this.state.allMemeImages[randomNum].url;
        this.setState({
            randomImage: randomMeme
        })
    }

    render() {
        return(
            
            <div>
                 <form className="meme-form" onSubmit={this.handleSubmit}>

                <div className="inputs">

                    <input className="input-field"placeholder="write top text here"
                    name="topText"
                    value={this.state.topText}
                    onChange={this.handleChange} /> 

                    <input className="input-field"placeholder="write bottom text here"
                    name="bottomText"
                    value={this.state.bottomText}
                    onChange={this.handleChange} /> 

                    <button className="btn-generate-meme">Generate Meme</button>

                    </div>

                    <div className="meme">
                        <img className="meme-random-img"src={this.state.randomImage} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>


                 </form>
                

            </div>
           

        )
    }
}
export default MemeGenerator;