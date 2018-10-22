import React, {Component} from 'react'
import HiddenMessage from './HiddenMessage'

class HiddenMessages extends Component {
constructor(props) {
super(props)
this.state = {
messages: [
  "Bring your robe and wizard hat",
  "It's going to be an all-afternoon $@# kicking session",
  "yeehaw"
],
showing: -1
}//close this.state
}//close constructor()

componentWillMount() {
 this.interval = setInterval(() => {
  let {showing, messages} = this.state
  showing = (++showing >= messages.length) ?
  -1 :
  showing
  this.setState({showing})
 }, 1000)
}
componentWillUnmount() {
clearInterval(this.interval)
}
render() {
  const {messages, showing} = this.state
return(
  <div className="hidden-messages">
    {messages.map((message, i) =>
      <HiddenMessage key={i}
                    hide={(i!==showing)}>
                    {message}
      </HiddenMessage>

    )}
  </div>
    )
  }//close render()
}//close <HiddenMessages/>

export default HiddenMessages
