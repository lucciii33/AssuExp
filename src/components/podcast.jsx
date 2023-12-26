import { useState } from "react";
import "../styles/podcast.css";
import Card from "./card";
function Podcats() {
  
  return (
    <>
    <div className="flex flex-col items-center mt-5">
      <div className="flex flex-col items-center gap-4 md:flex-row">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row mt-4">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row mt-3">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
    </div>
    </>
  );
}

export default Podcats;
