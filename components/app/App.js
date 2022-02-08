import { React, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../modal/Modal';
import Posi from '../../pages/posi';
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
  const quote = "I found this amazing wordcloud generator for free!!, use it, you are gonna love it!.";
  const hashtag = "#FreeWordCloudOnline";
  const data = ["the", "de", "la", "que", "el", "se", "y", "un", "quien", "tiene", "cual", "al", "qué", "en", "a", "to", "if", "is", "in", "it", "of", "and", "or", "an", "as", "i", "me", "my", "we", "our", "ours", "you", "your", "yours", "he", "she", "him", "his", "her", "hers", "its", "they", "them",
    "their", "what", "which", "who", "whom", "this", "that", "am", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "but", "at", "by", "with", "from", "here", "when", "where", "how",
    "all", "any", "both", "each", "few", "more", "some", "such", "no", "nor", "too", "very", "can", "will", "just"];

  const initialVal = `Tired of unintuitive word cloud generators? They claim to be free but they are not. Well, I present to you the Free Wordcloud converter, fast, simple and free, just the way you like it. `

  const words=[ {
    text: "told",
    value: 264
  },
  {
    text: "mistake",
    value: 11
  },
  {
    text: "thought",
    value: 16
  },
  {
    text: "bad",
    value: 17
  },
  {
    text: "correct",
    value: 10
  },
  {
    text: "day",
    value: 54
  },
  {
    text: "prescription",
    value: 12
  },
  {
    text: "time",
    value: 77
  },
  {
    text: "thing",
    value: 45
  },
  {
    text: "left",
    value: 19
  },
  {
    text: "pay",
    value: 13
  },
  {
    text: "people",
    value: 32
  },
  {
    text: "month",
    value: 22
  },
  {
    text: "again",
    value: 35
  },
  {
    text: "review",
    value: 24
  },
  {
    text: "call",
    value: 38
  },
  {
    text: "doctor",
    value: 70
  },
  {
    text: "asked",
    value: 26
  },
  {
    text: "finally",
    value: 14
  },
  {
    text: "insurance",
    value: 29
  },
  {
    text: "week",
    value: 41
  },
  {
    text: "called",
    value: 49
  },
  {
    text: "problem",
    value: 20
  },
  {
    text: "going",
    value: 59
  },
  {
    text: "help",
    value: 49
  },
  {
    text: "felt",
    value: 45
  },
  {
    text: "discomfort",
    value: 11
  },
  {
    text: "lower",
    value: 22
  },
  {
    text: "severe",
    value: 12
  },
  {
    text: "free",
    value: 38
  },
  {
    text: "better",
    value: 54
  },
  {
    text: "muscle",
    value: 14
  },
  {
    text: "neck",
    value: 41
  },
  {
    text: "root",
    value: 24
  },
  {
    text: "adjustment",
    value: 16
  },
  {
    text: "therapy",
    value: 29
  },
  {
    text: "injury",
    value: 20
  },
  {
    text: "excruciating",
    value: 10
  },
  {
    text: "chronic",
    value: 13
  },
  {
    text: "chiropractor",
    value: 35
  },
  {
    text: "treatment",
    value: 59
  },
  {
    text: "tooth",
    value: 32
  },
  {
    text: "chiropractic",
    value: 17
  },
  {
    text: "dr",
    value: 77
  },
  {
    text: "relief",
    value: 19
  },
  {
    text: "shoulder",
    value: 26
  },
  {
    text: "nurse",
    value: 17
  },
  {
    text: "room",
    value: 22
  },
  {
    text: "hour",
    value: 35
  },
  {
    text: "wait",
    value: 38
  },
  {
    text: "hospital",
    value: 11
  },
  {
    text: "eye",
    value: 13
  },
  {
    text: "test",
    value: 10
  },
  {
    text: "appointment",
    value: 49
  },
  {
    text: "medical",
    value: 19
  },
  {
    text: "question",
    value: 20
  },
  {
    text: "office",
    value: 64
  },
  {
    text: "care",
    value: 54
  },
  {
    text: "minute",
    value: 29
  },
  {
    text: "waiting",
    value: 16
  },
  {
    text: "patient",
    value: 59
  },
  {
    text: "health",
    value: 49
  },
  {
    text: "alternative",
    value: 24
  },
  {
    text: "holistic",
    value: 19
  },
  {
    text: "traditional",
    value: 20
  },
  {
    text: "symptom",
    value: 29
  },
  {
    text: "internal",
    value: 17
  },
  {
    text: "prescribed",
    value: 26
  },
  {
    text: "acupuncturist",
    value: 16
  },
  {
    text: "pain",
    value: 64
  },
  {
    text: "integrative",
    value: 10
  },
  {
    text: "herb",
    value: 13
  },
  {
    text: "sport",
    value: 22
  },
  {
    text: "physician",
    value: 41
  },
  {
    text: "herbal",
    value: 11
  },
  {
    text: "eastern",
    value: 12
  },
  {
    text: "chinese",
    value: 32
  },
  {
    text: "acupuncture",
    value: 45
  },
  {
    text: "prescribe",
    value: 14
  },
  {
    text: "medication",
    value: 38
  },
  {
    text: "western",
    value: 35
  },
  {
    text: "sure",
    value: 38
  },
  {
    text: "work",
    value: 64
  },
  {
    text: "smile",
    value: 17
  },
  {
    text: "teeth",
    value: 26
  },
  {
    text: "pair",
    value: 11
  },
  {
    text: "wanted",
    value: 20
  },
  {
    text: "frame",
    value: 13
  },
  {
    text: "lasik",
    value: 10
  },
  {
    text: "amazing",
    value: 41
  },
  {
    text: "fit",
    value: 14
  },
  {
    text: "happy",
    value: 22
  },
  {
    text: "feel",
    value: 49
  },
  {
    text: "glasse",
    value: 1
  },
  {
    text: "vision",
    value: 2
  },
  {
    text: "pressure",
    value: 16
  },
  {
    text: "find",
    value: 29
  },
  {
    text: "experience",
    value: 59
  },
  {
    text: "year",
    value: 70
  },
  {
    text: "massage",
    value: 35
  },
  {
    text: "best",
    value: 54
  },
  {
    text: "mouth",
    value: 20
  },
  {
    text: "staff",
    value: 64
  },
  {
    text: "gum",
    value: 10
  },
  {
    text: "chair",
    value: 12
  },
  {
    text: "ray",
    value: 22
  },
  {
    text: "dentistry",
    value: 11
  },
  {
    text: "canal",
    value: 13
  },
  {
    text: "procedure",
    value: 32
  },
  {
    text: "filling",
    value: 26
  },
  {
    text: "gentle",
    value: 19
  },
  {
    text: "cavity",
    value: 17
  },
  {
    text: "crown",
    value: 14
  },
  {
    text: "cleaning",
    value: 38
  },
  {
    text: "hygienist",
    value: 24
  },
  {
    text: "dental",
    value: 59
  },
  {
    text: "charge",
    value: 24
  },
  {
    text: "cost",
    value: 29
  },
  {
    text: "charged",
    value: 13
  },
  {
    text: "spent",
    value: 17
  },
  {
    text: "paying",
    value: 14
  },
  {
    text: "pocket",
    value: 12
  },
  {
    text: "dollar",
    value: 11
  },
  {
    text: "business",
    value: 32
  },
  {
    text: "refund",
    value: 10
  }];
  const [textdata, setTextdata] = useState(initialVal);

  const [wordcloud, setworcloud] = useState({});

  useEffect(() => {
    const wl = {
      size: [900, 920],
      options : {
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
        enableTooltip: true,
        deterministic: false,
        fontFamily: "impact",
        fontSizes: [5, 60],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 1,
        rotations: 3,
        rotationAngles: [0, 90],
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 1000
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
    // console.log();

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
  const deleteData = () => {
    setTextdata("");
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
            <Button className="btn btn-danger" style={{ marginRight: "1%" }} onClick={deleteData}><i className="fa fa-trash" aria-hidden="true"></i> Clear</Button>

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

                {wordcloud.started && <Posi wd={wordcloud.words}/>}
              </MyVerticallyCenteredModal>

            }
          </div>
        </div>
      </header>
      <div className="row col-12 justify-content-center  mt-5  " style={{ width: '100%', height: 'calc( 40em + 23.5vh )', overflow: 'auto', marginBottom: "5%", paddingLeft: "8%" }} >

        <textarea id="text1" name="text1" type="text"


          className="col-11 col-md-9 col-lg-9  "
          placeholder="Paste text here and then Run"
          autoComplete="false"
          onChange={update}
          value={textdata}
        >

        </textarea>









      </div>


    </>
  )
}
