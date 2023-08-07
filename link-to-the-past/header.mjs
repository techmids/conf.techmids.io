const link = ['CCCCCCCCCCCCCCCC', 'CCCCCCJJJJCCCCCC', 'CCCCCJAAFAJJCCCC', 
    'CCCCJAAFFFFAJCCC', 'CJCJJGAAFAGJAJJC', 'JLJEJJGGGGJJAJLJ', 
    'JLJEEEJJJJEEJJLJ', 'JDLJEEEEEEEEJLDJ', 'JDJEJJJJJJJJEJDJ', 
    'CJDJDNNDDNNDJDJC', 'CCJDDNJLLJNDDJCC', 'CCJJDLJLLJLDJJCC', 
    'CJIBJDLLLLDJBIJC', 'JOJBBJJDDJJBBJOJ', 'JOOJBIBJJBIBJOOJ', 
    'JHJJBBIIIIIBJJHJ', 'JHHJBBBIIBBBJHHJ', 'JHJBMMJMMJMMBJHJ', 
    'CJJJBBMMMMBBJJJC', 'CCJKJJBBBBJJKJCC', 'CCCJGKJJJJKGJCCC', 
    'CCCCJJJCCJJJCCCC', 'CCCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCCC'];
const cols = {'A': 64, 'B': 66, 'C': 231, 'D': 136, 'E': 169, 
    'F': 106, 'G': 172, 'H': 173, 'I': 78, 'J': 16, 'K': 124, 
    'L': 180, 'M': 185, 'N': 188, 'O': 94};

const lines = [
"_    _ _  _ _  _  ___ ____  ___ _  _ ____  ___  ____ ____ ___ ",
"|    | |\\ | |_/    |  |  |   |  |__| |___  |__] |__| [__   |  ",
"|___ | | \\| | \\_   |  |__|   |  |  | |___  |    |  | ___]  |  ",
"",
"The conf.techmids.io website ought to have all the previous",
"versions of the website available for browsing, so people",
"can see what went on and who spoke at each previous event.",
"",
"That's what this is for.",
"We shall now dump the current website into a folder, ready to",
"move it into the /past/ folder on the website!",
"               ...please hold on while we do the necessary..."
]

export function header() {
    const output = [];
    for (let i=0; i<link.length; i+=2) {
        const outline = [];
        for (let x=0; x<link[i].length; x++) {
            const top = cols[link[i][x]]; 
            const bottom = cols[link[i+1][x]];
            outline.push(`\x1b[38;5;${top};48;5;${bottom}m▀\x1b[0m`);
        }
        output.push(outline.join("") + " " + (lines[i/2] || ""));
    }
    console.log(output.join("\n"));
    console.log("");
}


