import React, { Component } from 'react'

export default class Bai3 extends Component {
    render() {
            let time=new Date()
           
        
           
        return (
            <div>
                <p> Bây Giờ Là {time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
