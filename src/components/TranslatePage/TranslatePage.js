import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { fetchJSON } from "../helpers/helpers";

function TranslatePage(props){
    let [text, setText] = useState("");
    let [translatedText, setTranslatedText] = useState("");
    let [language, setLanguage] = useState("yoda");
    let languages = [{label:"Yoda", value: "yoda"},{label:"Pirate", value:"pirate"},{label:"Shakespeare",value:"shakespeare"}];
    const apiURI = "https://api.funtranslations.com/translate/";

  function onChange(e) {
    setText(e.target.value);
  }
  function onChangeLanguage(e) {
    console.log(e)
    setLanguage(e.target.value);
  }

  async function OnSubmit(e) {
    e.preventDefault();
    var uri =
        apiURI +  language + ".json?text=" + text;
    var response = await fetchJSON(uri);
    var newText = response.contents.translated;
    setTranslatedText(newText);
  }
    return (
      <div>
        <br />
        <div class="container" id="Page-title">
          <h1>Enter the text to be translated</h1>
        </div>
        <br />
        <form onSubmit={OnSubmit}>
          <input
            type="text"
            onChange={onChange}
            className="form-inline"
            id="textInput"
            placeholder="Enter the initial text"
          />
          <br />
          <br />
          <label for="cars">Choose a language:</label>
          <br /><br />
          <select name="langauges" id="languages" onChange={onChangeLanguage}>
            {languages.map((language)=> (
              <option value={language.value}>{language.label}</option>
            ))}
          </select>
          <br />
          <br />
          <Button type="submit" variant="outline-success" size="lg">
            Translate!
          </Button>
        </form>
        <br/>
        <div class="container div-text">{translatedText}</div>
        
      </div>
    );

}
export default TranslatePage;