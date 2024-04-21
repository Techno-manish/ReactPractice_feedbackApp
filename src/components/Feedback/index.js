// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onChange = () => this.setState({isClicked: false})

  render() {
    const {resources} = this.props

    const emojiData = resources.emojis

    const heartImageUrl = resources.loveEmojiUrl

    const {isClicked} = this.state

    return (
      <div className="bgContainer">
        {isClicked ? (
          <div className="card">
            <h1 className="para1">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojiContainer">
              {emojiData.map(each => (
                <li className="list" key={each.id}>
                  <img
                    className="image"
                    src={each.imageUrl}
                    alt={each.name}
                    onClick={this.onChange}
                  />
                  <p className="text">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card">
            <img className="image" src={heartImageUrl} alt="love emoji" />
            <h1 className="para1">Thank You!</h1>
            <p>We will use your feedback to improve our customer support</p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
