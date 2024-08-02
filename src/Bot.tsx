import {useState, useEffect} from 'react'

import bot from './assets/bot.png'

const Bot = () => {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        if (expanded) {
          (function () {
            window.VG_CONFIG = {
              ID: 'fdibii1wc17xwtk3',
              region: 'na',
              render: 'popup',
              stylesheets: [
                'https://storage.googleapis.com/voiceglow-cdn/vg_live_build/styles.css',
              ],
            };
            const VG_SCRIPT = document.createElement('script');
            VG_SCRIPT.src = 'https://storage.googleapis.com/voiceglow-cdn/vg_live_build/vg_bundle.js';
            document.body.appendChild(VG_SCRIPT);
          })();
        }
      }, [expanded]);
    
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
  return (
    <div
    className={`fixed bottom-5 right-5  text-white rounded-full p-4 shadow-lg cursor-pointer z-50 transition-transform transform ${
      expanded ? 'scale-100 w-[400px] bg-transparent h-full top-0 right-0 rounded-none' : 'hover:scale-105'
    }`}
    onClick={toggleExpanded}
  >
    {expanded ? (
      
        <div id="VG_OVERLAY_CONTAINER" className="w-fit h-fit"></div>
      
    ) : (
      <div className='h-11 w-11 rounded-full overflow-hidden'><img src={bot} className='w-full h-full object-cover' alt="" /></div>
    )}
  </div>
  )
}

export default Bot