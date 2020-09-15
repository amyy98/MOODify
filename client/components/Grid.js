import React, { Component } from "react";
import Row from './Row';

// Grid will contain state

const colors = ['#7bff00', '#e1ff00', '#ffcc00', '#00b7ff', '#cf001c'];
let counter = 0;

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {
                // id: "white"
            },
            // currentMood: 'white',
        }
        this.handleClick = this.handleClick.bind(this);
        this.generateValues = this.generateValues.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this)
    }

    componentDidMount() {
        console.log(`componentDidMount just fired!`)
        this.generateValues();
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate just fired!`)
    }

    getRandomColor() {
        // const diffColors = colors.filter(color => color !== this.state.currentMood);
        // const randomColorIndex = Math.floor(Math.random() * diffColors.length);
        if (counter === 5) {
            counter = 0
        }
        return colors[counter++];
      }

    generateValues() {
        const content = {};
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 6; c++) {
                //This sets each 
                content[`r${r}c${c}`] = `set today's mood`;
            }
        }
        this.setState({
            content,
            // currentMood: "white"
        })
    }

    handleClick() {
        const key = event.target.id;
        // console.log(key)
        this.setState({
            content: {
                 ...this.state.content,
                [key]: this.state.currentMood,
            },
            // currentMood: this.getRandomColor()
        });
        if (this.state.content !== '-') {
            this.setState({
                currentMood: this.getRandomColor()
            })
        }
      }

    render() {
        console.log('grid', this.state.currentMood)
        const boxes = [];
        for (let i = 0; i < 5; i++) {
            boxes.push(
                <Row
                    key={`r${i}`}
                    content={this.state.content}
                    handleClick={this.handleClick}
                    rowNum = {i}
                    // color={this.state.currentMood}
                />
            )
        }
        return (
            <div>
                {boxes}
            <button onClick={this.generateValues} className="reset">
                Reset Moods
            </button>
            </div>
            
        )
    }
}

export default Grid;