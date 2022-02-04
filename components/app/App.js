import { React, useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
// import getFrequencies from "../../functions/getFrequencies"
// import Data from "../../data/Data"
export default function App() {
  const data=["the", "a", "to", "if", "is", "in","it", "of", "and", "or", "an", "as", "i", "me", "my","we", "our", "ours", "you", "your", "yours", "he", "she", "him", "his", "her", "hers", "its", "they", "them",
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
  
  
  const [state, setState] = useState(initialVal);
  const wl = {
    size: [400, 300],
    options: {
      rotations: 2,
      rotationAngles: [-90, 0],
      fontSizes: [1000, 1000],
      fontFamily: 'courier new',
    },
    
    started: false,
    words: [
      {
        text: 'told',
        value: 7,
      },
      {
        text: 'mistake',
        value: 1,
      },
      {
        text: 'thought',
        value: 2,
      },
      {
        text: 'bad',
        value: 4,
      },
    ]
  };
  const [worcloud, setworcloud] = useState(wl);


  


  const update = (e) => {

    const new_value = e.target.value;
    setState(new_value);
    // const wd = () => getFrequencies(new_value);
    // console.log(wd);
    // setworcloud({ ...worcloud });

  }
const getFrequencies = (text = '') => {
    var list = text.split(" ");
    var result = [];
    var word_list = [];
    var index=-1;
    for (var i = 0; i < list.length; i++) {
        if (!data.includes(list[i])) {
            if (!word_list.includes(list[i])) {
                word_list.push(list[i]);
                result.push({ text: list[i], value: 1 })
            }
            else {
                    index=result.findIndex((obj)=>{
                        return obj.text==list[i];
                    });
                    result[index].value=result[index].value+1;

            }
        }
    }
    return result;

}
  const processData = () => {

    // var wd="";
   
   const wd=getFrequencies(state);
  //  setTimeout(console.log())
   
    console.log(wd);
    setworcloud({ ...worcloud ,started:true ,words: wd});

  }

  return (
    <>
      <header id="page-header">
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container text-center">
            <h2>Free Wordcloud Generator</h2>
            <p className="lead">Convert text into a wordcloud image in just a few clicks.</p>
            <button className="btn social-icons" ><i className="fa fa-upload" aria-hidden="true"> Upload File .txt</i></button> <button className="btn social-icons" ><i className="fa fa-download" aria-hidden="true"> Download Image</i></button> <button className="btn btn-success" onClick={processData}><i className="fa fa-play" aria-hidden="true"></i> Run</button>
          </div>
        </div>
      </header>
      <div className="row  justify-content-center  mt-5  " >

        <textarea id="text1" name="text1" type="text"

          style={{ width: '100%', height: 'calc( 40em + 15vh )', fontSize: '18px' }}
          className="col-5 col-sm-5 col-md-5 col-lg-5  "
          placeholder={state}
          autoComplete="false"
          onChange={update}
        >
          {state}

        </textarea>


        <div id="text1" name="text1" type="text"

          style={{ border: '1px solid #333', width: '100%', height: 'calc( 40em + 15vh )',  border: '1px solid #333'}}

          className="bg-white col-5 col-sm-5 col-md-5 col-lg-5  " >

          {worcloud.started && <ReactWordcloud
            words={worcloud.words}
            size={worcloud.size}
            options={worcloud.options}
            
            
            
          />}
        </div>
      </div>

    </>
  )
}
