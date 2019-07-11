import React, { Component } from "react";
import Image from "./components/image/image";
import Wrapper from "./components/images-container";
import Navbar from "./components/navbar/navbar";
import images from "./images.json";

class App extends Component {

  state = {
    images: images,
    score: 0,
    maxScore: 0,
    totalScore: 0,
    clickCounter: []
  };

  randomizeImages = id => {
    console.log("image clicked: ", id)
    let clickCounter = this.state.clickCounter;

    if (!clickCounter.includes(id)) {
      clickCounter.push(id);
      if (this.state.score >= this.state.totalScore) {
        this.setState({maxScore: this.state.score + 1});
      }
      if (clickCounter.length === 8) {
        this.setState({clickCounter: []});
      }

      this.setState({
        score: clickCounter.length,
        totalScore: this.state.maxScore
      });

      let i = images.length,
      j, 
      temp;
      while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = images[j];
        images[j] = images[i];
        images[i] = temp;
      }

    } else {
      this.setState({
        clickCounter: [],
        score: 0,
        totalScore: this.state.maxScore,
      });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar>
        score = {this.state.score}
        maxScore = {this.state.maxScore}
      </Navbar>
      <Wrapper>
        {this.state.images.map(image => (
          <Image
            randomizeImages={this.randomizeImages}
            id={image.id}
            image={image.image}
            />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

