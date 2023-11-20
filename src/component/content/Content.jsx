import React from 'react'
import './Content.css'

const Content = (props) => {
    return (
    <>
        <div className="col-md-4">
            <div className="card card-content">
                <img src={props.image} alt="" className="p-3" />
                <div className="card-body pt-0">
                    <div className="card-title mb-3 m">
                        <h3>{props.title}</h3>
                    </div>
                    <p className="card-text text-start m-1">
                        Platform: {props.platform}
                    </p>
                    <p className="card-text text-start m-1">
                        release date: {props.release_date}
                    </p>
                    <p className="card-text text-start m-1">Genres: {props.genre}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Content