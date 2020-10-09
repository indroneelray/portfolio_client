import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import {
  Tabs,
  mmText,
  mmImages,
  theosImages,
  theosText,
  zoroImages,
  zoroText,
  innovationItems,
} from "../constants";

const Innovations = () => {
  const [activeTab, setTab] = useState(Tabs.MissMistake);
  const [data, setData] = useState({ info: mmText, images: mmImages });
  const [reRender, setRerender] = useState(false)

  useEffect(() => {
    console.log(activeTab);
    console.log(data);
  }, []);

  const handleClick = (id) => {
    switch (id) {
      case Tabs.MissMistake:
        setData({ info: mmText, images: mmImages });
        setTab(id);
        setRerender(true)
        break;

      case Tabs.ZoroLoo:
        setData({ info: zoroText, images: zoroImages });
        setTab(id);
        setRerender(true)
        break;

      case Tabs.Theos:
        setData({ info: theosText, images: theosImages });
        setTab(id);
        setRerender(true)
        break;
      default:
        setData({ info: mmText, images: mmImages });
        setTab(Tabs.MissMistake);
    }
  };


  useEffect(()=>{
    if(reRender == true){
      setRerender(false)
    }
  }, [reRender])

  return (
    <div className="innovations container-fluid w-100 px-5 position-relative">
      <div className="w-80 mx-auto">
        <div className="w-100 container tab-details-container">
          {!reRender && (
            <Fade>
              <div className="d-flex align-items-center justify-content-center">
                {data.images.map((image) => (
                  <div key={image} className="image-container">
                    <img src={image} />
                  </div>
                ))}
              </div>
              <h2>{data.info.title}</h2>
              <p>{data.info.description}</p>
              <p>{data.info.patent}</p>
            </Fade>
          )}
        </div>
      </div>

      <div className="w-100 tabs-bg">
        <div className="tabs-container d-flex">
          {innovationItems.map((item) => {
            return (
              <button
                className={`innovation-tab ${
                  activeTab === item.id && "active"
                }`}
                onClick={() => handleClick(item.id)}
              >
                <img
                  className={item.title.replace(" ", "").toLowerCase()}
                  src={item.image}
                />
                &nbsp;
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Innovations;
