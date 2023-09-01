
const SharingCard = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("http://localhost:3000/card-template.png")',
                backgroundSize: 'cover',
                height: 630,
                width: 1200,
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
            }}
        >
            <div style={{
                fontSize: 44,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                color: 'white',
                marginTop: 170,
                padding: '0 0 0 100px',
                lineHeight: 1.4,
                whiteSpace: 'pre-wrap',
                width: "40%",
                fontWeight: 700,
            }} className="w-10">
                Fantastic SDKs, and how to build them
            </div>
            <div style={{
                backgroundClip: "",
                backgroundColor: "#23FFF3",
                marginTop: '30px',
                marginLeft: 100,
                width: "22%",
                textAlign: "center",
                paddingTop: "6px",
                paddingBottom: "6px",
                color: "black",
                fontWeight: 600,
                fontSize: 18
            }} >20TH OCTOBER 2023</div>
        </div>
    )
}

export default SharingCard
