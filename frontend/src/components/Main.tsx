import { useEffect, useState } from "react";
import SearchBar from "./main-components/SearchBar";
import Sort from "./main-components/Sort";
import { CardT } from "../types";
import Card from "./main-components/Card";

const Main = () => {

  const [cardDetails, setCardDetails] = useState<CardT[]>([]);


  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(res => {
        console.log(res)

        setCardDetails(res)
      })
      .catch(err => console.error(err))


  }, [])
  return (
    <main className="w-4/5">
      <div className="flex flex-col w-full gap-1">
        <SearchBar />
        <Sort />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {cardDetails.map((course, index) => <Card {...course} key={index} />)}

      </div>
    </main>
  );
}

export default Main;
