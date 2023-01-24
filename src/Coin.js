import React, { Component } from 'react'
class Coin extends Component{
constructor(props){
    super(props)
    this.state={
flip:0,
head:0,
tail:0,
currentState:"none"
    }

this.goflip=this.goflip.bind(this)
}

goflip(){
    
    this.setState({flip:this.state.flip+1})
    //Status=1 means Head, and status=0 means tail
    const status = Math.floor(Math.random()*2)
   
    if (status===1){
        this.setState({head:this.state.head+1,currentState:true})
  
    } else{ this.setState({tail:this.state.tail+1,currentState:false})}
    
   
}

    render(){
        return(<div style={{textAlign:"center"}}>
            <h1>Flip Coin</h1>
           {/* coin1.png is head and coin0.png is tail */}
            <img src={`coin${this.state.currentState*1}.png`} style={{display:this.state.currentState}} alt="coin" />
            <button onClick={this.goflip}>Flip Here</button>
            <h3>You fipped {this.state.flip} times, ({this.state.head}) head and ({this.state.tail}) tail</h3>
        </div>)
    }
}
export default Coin 