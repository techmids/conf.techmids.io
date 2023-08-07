import { fileURLToPath } from 'url';
import * as fs from 'node:fs/promises';
import { R_OK, W_OK } from 'node:fs';
import path from 'path';

export async function get_paths() {
    const __filename = fileURLToPath(import.meta.url);
    const script_folder = path.dirname(__filename);
    const root_folder = path.dirname(script_folder);
    const next_config_js = path.resolve(path.join(script_folder, "..", "next.config.js"));
    try {
        const ncj_exists = await fs.access(next_config_js, R_OK | W_OK);
    } catch(e) {
        throw new Error(
            `Expected to find the next config in ${next_config_js}, but we didn't.\n` +
            "This isn't supposed to happen, and is a bug in this script.\n" + 
            `(The actual error we got was this: ${e})`);
    }
    const public_dir = path.resolve(path.join(script_folder, "..", "public"));
    try {
        const public_dir_exists = await fs.access(public_dir, R_OK | W_OK);
    } catch(e) {
        throw new Error(
            `Expected to find the public resources dir in ${public_dir}, but we didn't.\n` +
            "This isn't supposed to happen, and is a bug in this script.");
    }
    const public_past_dir = path.join(public_dir, "past");
    await fs.mkdir(public_past_dir, {recursive: true});

    const temp_export_dir = path.join(script_folder, "export");
    // the short version of the temp export dir is used in the next.config.js file
    // because you can't provide a full path; nextjs assumes the folder supplied is
    // inside the project root, so it ends up creating a home/you/blah/whatever/link-to-the-past/export
    // folder, irritatingly. So we make the short version here.
    const temp_export_dir_short = path.relative(root_folder, temp_export_dir);
    const temp_past_location = path.join(script_folder, "temp_past");

    return {
        next_config_js,
        next_config_js_backup: path.join(script_folder, "next.config.js.bak"),
        script_folder,
        public_past_dir,
        temp_export_dir,
        temp_export_dir_short,
        temp_past_location
    }
}

export async function move_past_dir_aside(paths) {
    // put the real past dir from public temporarily out of the way
    // this ensures that when we generate the static version of
    // the website as it looks today, it doesn't have all the other
    // past versions in it!
    // this also avoids recursive issues where we're generating a static
    // version of the website while also writing into it, which causes
    // infinite nested /public/past/date/past/date/past/date/... problems
    console.log(`Moving the 'past' folder out of the way, from ${paths.public_past_dir} to ${paths.temp_past_location}`);
    await fs.rename(paths.public_past_dir, paths.temp_past_location);
}
export async function move_past_dir_back(paths) {
    console.log(`Moving the 'past' folder back, from ${paths.temp_past_location} back to ${paths.public_past_dir}`);
    await fs.rename(paths.temp_past_location, paths.public_past_dir);
}
export async function move_export_into_past(paths, output_name) {
    const output_dir = path.join(paths.public_past_dir, output_name);
    console.log(`Moving the newly exported static website to ${output_dir}`);
    await fs.rename(paths.temp_export_dir, output_dir);
}
