import React, { Component } from 'react'

export default class DailyNews extends Component {
    render() {
        let {title,description,imageurl,newsurl,author,date,source} = this.props;
        return (
            <div>
                <div className="card my-3 " style={{width: "18rem"}}>
                <span className="badge bg-danger" style={{fontSize:'18px'}}>{source}</span>
                    <img src={!imageurl?"https://media.bleacherreport.com/image/upload/x_118,y_86,w_4851,h_3230,c_crop/v1639949796/i0bllorptqmktpmr3tss.jpg":imageurl} height="150" className="card-img-top" alt="not Available"/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title?title.slice(0,40):""}...</h5>
                    <p className ="card-text">{description?description.slice(0,45):""}...</p>
                    <p className="card-text"><small className="text-muted">By  <b>{!author?'Unknown':author}</b> on  <b>{new Date(date).toUTCString()}</b></small></p>
                    <a href={newsurl} className ="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
