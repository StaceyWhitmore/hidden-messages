import React, {Component} from 'react'

class HiddenMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: (props.hide) ? props.hide : true
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({hidden: nextProps.hide})
  }

  render() {
    const {children} = this.props//children are the Props
    const {hidden} = this.state//State is hidden or !hidden
    return (
      <p>
        {(hidden) ?
          children.replace(/[a-zA-z0-9]/g, "x") :
        children
        }
      </p>
    )
  }//close render()

}//close <HiddenMessage/>

export default HiddenMessage
