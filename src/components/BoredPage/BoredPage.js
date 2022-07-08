import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { fetchJSON } from "../helpers/helpers";


function BoredPage() {
    let [activity, setActivity] = useState("");

    async function onClick(){
      const uri = "http://www.boredapi.com/api/activity/";
      let res = await fetchJSON(uri)
      setActivity(res.activity);
      console.log(activity)
    }

    return (
      <div>
        <h2>Bored?</h2>
        <h3>Click the button below to get a suggestion on how to spend your time</h3>
        <br/>
        <Button type="submit" variant="outline-success" size="lg" onClick={onClick}>
            Give me something to do!
          </Button>
          <br/>
          <br/>
        {activity !== "" &&
          <h2>
            Have you tried to {activity}?
          </h2>
        }
      </div>
    );
  }

export default BoredPage;