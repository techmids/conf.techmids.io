import * as fs from 'node:fs/promises';
import { move_past_dir_back } from './paths.mjs';

export async function restore_their_config(paths, only_if_older=false) {
    const ncj_stat = await fs.stat(paths.next_config_js);
    let ncj_bak_stat;
    try {
        ncj_bak_stat = await fs.stat(paths.next_config_js_backup);
    } catch(e) {
        ncj_bak_stat = {ctimeMs: 0}
    }
    if ((only_if_older && ncj_stat.mtimeMs < ncj_bak_stat.mtimeMs) || !only_if_older) {
        await fs.copyFile(paths.next_config_js_backup, paths.next_config_js);
        console.log("Restored the original next.config.js successfully");
    }
}

export async function rollback(script_err, paths) {
    console.log("I am attempting to restore things after the error.");
    try {
        await restore_their_config(paths, true);
        await move_past_dir_back(paths);
    } catch(e) {
        console.error("There was an error in the script:");
        console.error(script_err);
        console.error("In trying to recover from that error, there was ANOTHER error:");
        console.error(e);
        console.error("This is not great, and things may have been left in an inconsistent state.");
        console.error("All I can do is abort.");
        process.exit(2);
    }
}

export async function copy_config(paths) {
    console.log("Backing up the next.config.js before we fiddle with it...");
    await fs.copyFile(paths.next_config_js, paths.next_config_js_backup);
}

