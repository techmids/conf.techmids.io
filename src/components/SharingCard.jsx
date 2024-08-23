import html2canvas from "html2canvas";
import {EVENT} from "../../event";

const SharingCard = ({ talkTitle, speaker }) => {
    function takeScreenshot() {
        let div =
            document.getElementById('social-card');
        html2canvas(div).then(
            function (canvas) {
                document
                    .getElementById('output')
                    .appendChild(canvas);
            })
    }

    return (<>
        <div
            id="social-card"
            className="font-display"
            style={{

                backgroundImage: 'url("/card-template.png")',
                backgroundSize: 'cover',
                height: 630,
                width: 1200,
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
            }}
        >
            <div style={{
                width: 500,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{
                    width: 500,
                    display: 'flex',
                }}>
                    <div className="rounded" style={{
                        backgroundColor: "#23FFF3",
                        marginTop: '60px',
                        marginLeft: 93,
                        textAlign: "center",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        paddingTop: -8,
                        paddingBottom: 16,
                        width: 180,
                        color: "black",
                        fontWeight: 600,
                        fontSize: 18
                    }}>
                        <span>{`#TECHMIDS${EVENT.date.slice(-2)}`}</span>
                    </div>
                    <div className="rounded" style={{
                        backgroundColor: "#23FFF3",
                        marginTop: '60px',
                        marginLeft: 10,
                        textAlign: "center",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        paddingTop: -8,
                        paddingBottom: 16,
                        width: 180,
                        color: "black",
                        fontWeight: 600,
                        fontSize: 18
                    }}>
                        <span>{`#BTW${EVENT.date.slice(-2)}`}</span>
                    </div>
                </div>
                <div style={{
                    fontSize: talkTitle?.length > 60 ? 28 : 40,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    color: 'white',
                    marginTop: 170,
                    padding: '0 0 0 100px',
                    lineHeight: 1.4,
                    fontWeight: 700,
                }}>
                    {talkTitle}
                </div>
                <div className="rounded" style={{
                    backgroundColor: "#23FFF3",
                    marginTop: '30px',
                    marginLeft: 100,
                    textAlign: "center",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingTop: -8,
                    paddingBottom: 16,
                    width: 200,
                    color: "black",
                    fontWeight: 600,
                    fontSize: 18
                }}>
                    <span>{EVENT.date}</span>
                </div>
            </div>
            <div style={{
                display: 'flex',
                marginRight: 50,
                flexDirection: 'column',
                width: 350,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <div
                    className="transition h-72 rounded-full mb-8 border-8 w-72  object-cover"
                    style={{
                        backgroundImage: `url(/speakers/${speaker.speakerCardImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div style={{
                    fontSize: 40,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    color: 'white',

                    lineHeight: 1.4,
                    whiteSpace: 'pre-wrap',

                    fontWeight: 700,
                }} >
                    {speaker.name}
                </div>
                <div style={{
                    fontSize: 25,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    color: 'white',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-wrap',

                    fontWeight: 700,
                }} >
                    {speaker.jobTitle}
                </div>
            </div>
        </div>
            <button className="my-10 mx-10 border-2 px-2 b" onClick={() => takeScreenshot()}>
                Generate Screenshot
            </button>
            <div id="output" />
        </>

    )
}

export default SharingCard
