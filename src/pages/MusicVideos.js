// import React from "react";
// import { Container } from "reactstrap";
// import DisplayList from "../features/display/DisplayList";
// import SubHeader from "../components/SubHeader";
// import YouTube from "react-youtube";

// const MusicVideos = () => {
//     const videoIds = ["7IrQFeEJy58", "uLq_LNyTALg", "Lqa40ePUU40", "WdA4IdNJlEc", "HfYx9SrkdeE"]; // Replace with your actual YouTube video ID

//     const opts = {
//         height: "405",
//         width: "720",
//         playerVars: {
//             autoplay: 0,
//         },
//     };

//     const captions = ["Ecuador meets California in one mesmerizing video.", "Recorded at a packed gig, the energy was on fire—a freestyle fiesta!", "ue pasa? Seriously, what's happening in the world today? 🌎", "Going insane during the show as the mesmerizer becomes the mesmerized in an unexpected twist!", "Experience a burst of color, creativity, harmony, and lyrics in this lively video!"];

//     return (
//         <Container>
//             <SubHeader current="MusicVids" />

//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                 {videoIds.map((videoId, index) => (
//                     <div key={index} style={{ marginBottom: "20px" }}>
//                         <YouTube videoId={videoId} opts={opts} />
//                         <p>{captions[index]}</p>
//                     </div>
//                 ))}
//             </div>


//         </Container>
//     );
// };

// export default MusicVideos;

import React from "react";
import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import YouTube from "react-youtube";

const MusicVideos = () => {
    const videoIds = ["7IrQFeEJy58", "uLq_LNyTALg", "Lqa40ePUU40", "WdA4IdNJlEc", "HfYx9SrkdeE"];

    const opts = {
        height: "405",
        width: "720",
        playerVars: {
            autoplay: 0,
        },
    };

    const captions = ["Ecuador meets California in one mesmerizing video.", "Recorded at a packed gig, the energy was on fire—a freestyle fiesta!", "¿Qué pasa? Seriously, what's happening in the world today? ", "Going insane during the show as the mesmerizer becomes the mesmerized in an unexpected twist!", "Experience a burst of color, creativity, harmony, and lyrics in this lively video!"];

    return (
        <Container>
            <SubHeader current="MusicVids" />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {videoIds.map((videoId, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <YouTube videoId={videoId} opts={opts} style={{ marginRight: "20px" }} />
                        <p style={{ fontFamily: "inherit" }}>{captions[index]}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default MusicVideos;
