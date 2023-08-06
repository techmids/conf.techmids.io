import path from 'path';

import { header } from "./header.mjs";
import { get_valid_output_name } from './command-line.mjs';
import { restore_their_config, rollback, copy_config } from './tidyup.mjs';
import { get_paths, move_past_dir_aside, 
    move_past_dir_back, move_export_into_past } from './paths.mjs';
import { export_site, assure_output_dir, write_our_config } from './make-changes.mjs';

async function remove_temporary_export(paths) {
    console.log(`Removing temporary export directory ${paths.temp_export_dir}`);
    await fs.rm(paths.temp_export_dir, {recursive: true});
}

async function main() {
    const paths = await get_paths();
    try {
        header();
        const output_name = get_valid_output_name();
        await copy_config(paths);
        await write_our_config(paths, output_name);
        await move_past_dir_aside(paths);
        await assure_output_dir(paths);
        await export_site(paths);
        await move_past_dir_back(paths);
        await move_export_into_past(paths, output_name);
        await restore_their_config(paths);
    } catch(e) {
        console.error("There was an error, sorry.");
        await rollback(e, paths);
        console.error("I shall now abort. The error in the script was this:");
        console.log(e);
    }
}

main();
