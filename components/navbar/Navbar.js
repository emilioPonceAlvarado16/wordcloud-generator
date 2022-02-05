import React from 'react'
import Link from "next/link"

export default function Navbar(props) {
  const { route } = props;

  const list = [

    { name: "Generator", url: "/" },
    { name: "Contact", url: "/contact" },
    { name: "Privacy", url: "/privacy" },
    { name: "Terms", url: "/terms" }


  ]
  return (
    <div>

      <nav className="navbar  navbar-expand-lg navbar-dark bg-primary "> <Link href="/home"><a className="navbar-brand" >WordCloud Generator</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {list.map((link, index) => {
              return (
                link.url == route ? (
                  <li className="nav-item active" key={index}>

                    <Link href={route}><a className="nav-link">{link.name}</a>
                    </Link>
                  </li>) :
                  (<li className="nav-item " key={index}>
                    <Link href={link.url}><a className="nav-link">{link.name}</a>
                    </Link>
                  </li>)

              );


            })}
          </ul>

        </div>
      </nav>

    </div>
  )
}
