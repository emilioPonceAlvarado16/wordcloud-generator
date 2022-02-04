import { React, useState, useEffect, createRef } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { saveSvgAsPng } from 'save-svg-as-png';
import Textdata from '../textdata/Textdata';
// import getFrequencies from "../../functions/getFrequencies"
// import Data from "../../data/Data"
export default function App() {
  const wordcloudRef = createRef();
  const data = ["the", "a", "to", "if", "is", "in", "it", "of", "and", "or", "an", "as", "i", "me", "my", "we", "our", "ours", "you", "your", "yours", "he", "she", "him", "his", "her", "hers", "its", "they", "them",
    "their", "what", "which", "who", "whom", "this", "that", "am", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "but", "at", "by", "with", "from", "here", "when", "where", "how",
    "all", "any", "both", "each", "few", "more", "some", "such", "no", "nor", "too", "very", "can", "will", "just"];
  //  function feq(value){ getFrequencies(value)};

  const initialVal = `What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  
  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  `


  const [textdata, setTextdata] = useState(initialVal);

  const [wordcloud, setworcloud] = useState({});

  useEffect(() => {
    const wl = {
      size: [60, 70],
      options: {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontSizes: [1000, 1000],
        fontFamily: 'courier new',
      },

      started: false,
      words: [
        
      ]
    };

    return () => {
      setworcloud({ started: true, ...wordcloud })
    };
  },[] );




  const update = (e) => {

    const new_value = e.target.value;
    setTextdata(new_value);
    // const wd = () => getFrequencies(new_value);
    console.log();
    // setworcloud({ started:true,...worcloud });

  }
  const getFrequencies = (text = '') => {
    var list = text.split(" ");
    if (text.trim(" ") == "") return;
    var result = [];
    var word_list = [];
    var index = -1;
    for (var i = 0; i < list.length; i++) {
      var word = ""
      word = list[i].toLocaleLowerCase();
      if (!data.includes(word)) {
        if (!word_list.includes(list[i])) {
          word_list.push(list[i]);
          result.push({ text: list[i], value: 1 })
        }
        else {
          index = result.findIndex((obj) => {
            return obj.text == list[i];
          });
          result[index].value = result[index].value + 1;

        }
      }
    }
    return result;

  }

  const processData = () => {

    // var wd="";

    const wd = getFrequencies(textdata);
    //  setTimeout(console.log())

    console.log(wd);
    setworcloud({ ...wordcloud, started: true, words: wd });

  };
  const handleSave = () => {
    const svgElement = wordcloudRef.current.querySelector('svg');
    saveSvgAsPng(svgElement, 'wordcloud.png');
  };

  return (
    <>
      <header id="page-header" >
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container text-center">
            <h2>Free Wordcloud Generator</h2>
            <p className="lead" >Convert text into a wordcloud image in just a few clicks.</p>
            {wordcloud.words ? 
           ( <button className="btn social-icons btn-info" style={{marginRight:"1%"}}onClick={handleSave} ><i className="fa fa-download" ariaHidden="true"> Download Image</i></button>)

              
           :(            <button className="btn social-icons btn-info"style={{marginRight:"1%"}} onClick={handleSave} disabled ><i className="fa fa-download" ariaHidden="true"> Download Image</i></button>)
           }
            <button className="btn btn-success"style={{marginRight:"1%"}} onClick={processData}><i className="fa fa-play" ariaHidden="true"></i> Run</button>

          </div>
        </div>
      </header>
      <div className="row  justify-content-center  mt-5  " style={{marginBottom:"5%"}} >

        <Textdata textdata={textdata} update={update}></Textdata>


        <div name="text1" type="text"

          style={{ border: '1px solid #333', width: '100%', height: 'calc( 40em + 23.5vh )', border: '1px solid #333', overflow: 'auto' }}

          className="bg-dark col-5 col-sm-5 col-md-5 col-lg-5  " >
          <div style={{ width: "28%", height: "30%" }} className=" container d-flex justify-content-center">
            {wordcloud.started &&
              <span ref={wordcloudRef}>
                <ReactWordcloud
                  words={wordcloud.words}

                  options={wordcloud.options} /></span>}


          </div>





        </div>
      </div>
      

    </>
  )
}
