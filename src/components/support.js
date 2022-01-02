import React, {useState} from 'react'
// import Script from 'react-load-script'
import Donate from './donate'


export default () => {
    const [scriptLoaded, scriptLoad] = useState(false)
    /* Data pro reklamu Sklik */
    // const sklikData = {
    //     elm: 'sklikReklama_188136',
    //     zoneId: '188136',
    //     w: 480,
    //     h: 300
    // }
    // if (typeof window !== 'undefined') {
    //     window.sklikData = sklikData;
    // } else {
    //     global.sklikData = sklikData;
    // }
    return (
        <>
            <h3 className="center">Podpořte JerryLabs!</h3>
            <Donate />

            <p className="center">
            Nebo <span role="img" aria-label="darovat">🎁</span> platbou na účet 1126400055/3030<br />
            </p>
            {/* Reklama Sklik */}
            {/* <Script
                url="//c.imedia.cz/js/script.js"
                onCreate={() => scriptLoad(true)}
                onError={() => scriptLoad(false)}
                onLoad={() => scriptLoad(false)}
            />
            <div id="sklikReklama_188136" /> */}
            {!scriptLoaded && (
                <img src="/images/ad.jpg" alt="Zde může být vaše reklama" style={{maxWidth: '100%', margin: '1rem 0 2rem'}} />
            )}
        </>
    )
}
