import Image from "next/image"
import html2canvas from "html2canvas";

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

                backgroundImage: 'url("http://localhost:3000/card-template.png")',
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
                    fontSize: talkTitle?.length > 60 ? 28 : 40,
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    color: 'white',
                    marginTop: 170,
                    padding: '0 0 0 100px',
                    lineHeight: 1.4,
                    fontWeight: 700,
                }} >
                    {talkTitle}
                </div>
                <div style={{
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
                    <span>20TH OCTOBER 2023</span>
                </div>
            </div>
            <div style={{ display: 'flex', marginRight: 50, flexDirection: 'column', width: 350, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Image
                    className="transition h-72 rounded-full mb-8 border-8 w-72 duration-300 group-hover:scale-110 object-cover"
                    src={speaker.image}
                    alt=""
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
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
