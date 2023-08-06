_    _ _  _ _  _  ___ ____  ___ _  _ ____  ___  ____ ____ ___ 
|    | |\ | |_/    |  |  |   |  |__| |___  |__] |__| [__   |  
|___ | | \| | \_   |  |__|   |  |  | |___  |    |  | ___]  |  

# Building "past" versions of the conf.techmids.io.website


The conf.techmids.io website ought to have all the previous versions of the website available for browsing, so people can see what went on and who spoke at each previous event.

That's what this is for.

Every time there's a new TechMids conference, the website changes to be about that particular conference. This means that the previous conference website disappears. That's a shame, because it's useful to have that previous website around somewhere, so people can still reference it: to see who spoke and what they spoke about and to see details of the previous conference. It's also a small bit of extra advertising: TechMids looks better if the previous events are accessible because it shows that the conference has happened multiple times, which demonstrates consistency and staying power.

So, that's what this extra script does.

The idea here is that, when a TechMids event has happened, this script is run to "archive" the current state of the website; it will then be available at conf.techmids.io/past/2023-06/ or similar. The script is run once to archive the current version of the website; after this, the site can then safely be changed to reference and describe the _next_ upcoming event. The script doesn't need to be run every time or on every build; it's a specific action, taken on the day that the website starts being updated for a new event.

To run the script, do:

`npm run link-to-the-past 2023-06`

The date specified there is in `YYYY-MM` format, and is the date that the event on the website actually happened. (In particular, it is not the date that you're running it now.)

An example may make things clearer. Let's say there was a TechMids conf in June 2023. The website is all about this event, showing the speakers, sponsors, and details. The event has happened, and it's now July 2023, and you're in charge of updating the website to start talking about the _next_ TechMids conf in October 2023. So, before you do that updating, you run `npm run link-to-the-past 2023-06`. This will archive a static copy of the website as it currently looks in `/past/2023-06`, and that static copy will remain untouched forever. You can now update the website to describe the October event, and the July 2023 event's site will remain forever, frozen in carbonite, for people to reference.

## Technical details

Here we describe what the script actually _does_. You don't need this information to run the script, although you will do if you want to fiddle with it.

Essentially, the script's goal is to create a completely static version of the website as it currently exists, and put it in the `public/past` folder. It does this by:

1. moving `public/past` out of the way, so that the static version of this website does not itself include all the other past versions
2. editing `next.config.js` to describe how static versions of the site should be made
3. running `next build` to create a static version of the site according to the `next.config.js` changes, in a temporary directory
4. putting `public/past` back where it came from
5. undoing its changes to `next.config.js`
6. moving the newly-created static dump into `public/past` under the specified name, which should look like a date

Most of the script is concerned with reporting on what it's doing, and coping with errors by undoing its invasive changes.
