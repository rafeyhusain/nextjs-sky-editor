import { useEffect } from 'react'
import '../../public/celestial.min.js'
import styles from "./SkyPreview.module.css";

const SkyPreview = () => {
  useEffect(() => {
    Celestial.display({
      location: false,
      projection: "airy",
      datapath: "./data/",
      planets: { show: false },
      interactive: false,
      controls: false,
      width: 350
    });
  }, [])

  return (
    <>
      <div id="celestial-map" className={styles.celestialMap}></div>
    </>
  );
};

export default SkyPreview;
