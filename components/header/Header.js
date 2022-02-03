import React from 'react'
export default function Header() {
    return (
        <header id="page-header">
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container text-center"> 
            <h2>Free Wordcloud generator</h2>
            <p className="lead">Convert text into a wordcloud image in just a few clicks.</p>
            <button className="btn social-icons" href="#"><i className="fa fa-upload" aria-hidden="true"> Upload File</i></button> <button className="btn social-icons" href="#"><i className="fa fa-download" aria-hidden="true"> Download Image</i></button> <button className="btn btn-success" href="#"><i className="fa fa-play" aria-hidden="true"></i> Run</button>
          </div>
        </div>
      </header>
    )
}
