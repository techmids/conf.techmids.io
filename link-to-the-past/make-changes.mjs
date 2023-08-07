import * as fs from 'node:fs/promises';
import { R_OK, W_OK } from 'node:fs';
import { spawn } from 'child_process';

export async function write_our_config(paths, output_name) {
    /* A custom next.config.js file
       There's no provision for passing a separate file, so
       we overwrite the main one (and put it back later).
       Image optimisation requires a server, so it won't work
       in a pure static HTML export, and thus we disable it.
       */
    const ourConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: 'export',
  distDir: '${paths.temp_export_dir_short}',
  basePath: '/past/${output_name}',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
    `;
    await fs.writeFile(paths.next_config_js, ourConfig);
    console.log("Written our custom link-to-the-past config");
}

export async function assure_output_dir(paths) {
    console.log(`Confirming that we can write to the output directory ${paths.temp_export_dir}`);
    let output_exists;
    try {
        output_exists = await fs.access(paths.temp_export_dir, R_OK | W_OK);
    } catch(e) {
        if (e.code == "ENOENT") {
            // the output directory doesn't exist; this is fine
        } else {
            throw new Error(
                `We cannot write to ${paths.temp_export_dir}. ` +
                "This is not supposed to happen, and is a bug in this script.");
        }
    }
    if (output_exists) {
        console.log("Removing output directory");
        await fs.rm(paths.temp_export_dir, {recursive: true});
    }
}

export function export_site(paths) {
    return new Promise((resolve, reject) => {
        console.log(`Exporting the website as static to ${paths.temp_export_dir}`);
        const proc = spawn("next", ["build"]);
        proc.stdout.on("data", data => { console.log(data.toString().trimEnd()); })
        proc.stderr.on("data", data => { console.error(data.toString().trimEnd()); })
        proc.on("close", code => {
            if (code === 0) { resolve(); }
            reject();
        })
        proc.on("error", err => { reject(err); })
    })
}
