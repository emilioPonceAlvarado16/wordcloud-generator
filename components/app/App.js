import { React, useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import Textdata from '../textdata/Textdata';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../modal/Modal';

import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
} from "react-share";


export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const quote="Look!, I found this amazing wordcloud generator for free!!, use it, you are gonna love it!.";
  const hashtag="#FreeWordCloudOnline";
  const data = ["the", "de", "la", "que", "el", "se", "y", "un", "quien", "tiene", "cual", "al", "qué", "en", "a", "to", "if", "is", "in", "it", "of", "and", "or", "an", "as", "i", "me", "my", "we", "our", "ours", "you", "your", "yours", "he", "she", "him", "his", "her", "hers", "its", "they", "them",
    "their", "what", "which", "who", "whom", "this", "that", "am", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "but", "at", "by", "with", "from", "here", "when", "where", "how",
    "all", "any", "both", "each", "few", "more", "some", "such", "no", "nor", "too", "very", "can", "will", "just"];

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
      size: [900, 920],
      options: {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontSizes: [10, 20],
        fontFamily: 'courier new',
      },

      started: false,
      words: [

      ]
    };

    return () => {
      setworcloud({ started: true, ...wordcloud })
    };
  }, []);




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

  const show = () => {
    setModalShow(true);
  }
  const processData = () => {

    // var wd="";
    if (!textdata) {
      return;
    }

    const wd = getFrequencies(textdata);
    //  setTimeout(console.log())

    console.log(wd);
    setworcloud({ ...wordcloud, started: true, words: wd });
    show();

  };
  const share_url = "https://freewordcloud.netlify.app/"


  return (
    <>
      <header id="col-12 page-header" >
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container text-center">
            <h2>Free Wordcloud Generator</h2>
            <p className="lead" >Convert text into a wordcloud image in just a few clicks.</p>

            <Button className="btn btn-success" style={{ marginRight: "1%" }} onClick={processData}><i className="fa fa-play" aria-hidden="true"></i> Run</Button>
            <br /> <br />

            <FacebookShareButton url={share_url} quote={quote} hashtag={hashtag}>
              <FacebookIcon size={32} round={true} >


              </FacebookIcon>

            </FacebookShareButton>

            <FacebookMessengerShareButton url={share_url} quote={quote} hashtag={hashtag}>
              <FacebookMessengerIcon size={30} round={true}>

              </FacebookMessengerIcon>

            </FacebookMessengerShareButton>

            <TwitterShareButton url={share_url} quote={quote} hashtag={hashtag}>
              <TwitterIcon size={32} round={true} />


            </TwitterShareButton>

   




            {wordcloud.started &&


              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}

              >

                {wordcloud.started && <ReactWordcloud
                  words={wordcloud.words}
                  options={wordcloud.options} />}
              </MyVerticallyCenteredModal>

            }
          </div>
        </div>
      </header>
      <div className="row col-12 justify-content-center  mt-5  " style={{ width: '100%', height: 'calc( 40em + 23.5vh )', overflow: 'auto', marginBottom: "5%", paddingLeft: "8%" }} >

        <Textdata textdata={textdata} update={update}></Textdata>










      </div>


    </>
  )
}
