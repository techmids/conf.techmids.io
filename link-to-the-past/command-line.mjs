function complain() {
    console.log(`Syntax: npm run link-to-the-past 2023-10
That is: you run this with a date, in YYYY-MM format.
That will take the current version of the website, and
create a /past/2023-10/ folder which is a static version
of the website, for later viewing.
The date should be the date of the conference, not the date today!`);
    process.exit(1);
}

export function get_valid_output_name() {
    // read the command line to get the output folder name
    // and complain if it's not right or not present
    if (process.argv.length < 3) {
        complain();
    }
    const dt = process.argv[2];
    if (!/20[0-9][0-9]-[01][0-9]/.test(dt)) {
        console.log(`Problem: "${dt}" does not look like a proper YYYY-MM date.\n`);
        complain();
    }
    return dt;
}
