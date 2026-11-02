# Customer Editing Guide — marigold-bhavan

This template is an elegant Indian engagement / wedding invitation with an interactive wax seal gate opener, countdown timer, venue details, and action bar.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/marigold-bhavan/editable/wedding-data.js)

### Couple names
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`.

### Wedding / Event Date & Times
Edit in `wedding` block in `editable/wedding-data.js`:
- `dateLabel`: short date (e.g. `"14.02.27"`)
- `dayLine`: formatted day string (e.g. `"Sunday, 14th February 2027"`)
- `timeLine`: formatted time string (e.g. `"7:00 PM onwards"`)
- `start` & `end`: ISO timestamp strings (`YYYY-MM-DDTHH:MM:SS`) driving both the countdown timer and Google/iCal downloads.
- `timeZoneOffset`: e.g. `"+05:30"`

### Invitation Copy & Closing
Edit `invitation.note` and `invitation.closing` in `editable/wedding-data.js`.

### Venue & Maps
Edit `venue` in `editable/wedding-data.js`:
- `venue.name`: display name of venue
- `venue.address`: full address string
- `venue.city`: city shown in seal opener and meta tags
- `venue.query`: search query used for automatic Google Maps directions/links
- `venue.mapSearchUrl` & `venue.directionsUrl`: optional custom URL overrides

### Images & Gallery
Replace files directly in `editable/assets/` or update paths in `wedding-data.js`:
- Hero / Couple portrait: `editable/assets/couple.png`
- Footer background: `editable/assets/footer-bg.jpg`
- Venue map graphic: `editable/assets/map.jpg`
- Photo Gallery: `gallery.items` in `editable/wedding-data.js` (`editable/assets/gallery-1.jpg` through `gallery-5.jpg`)

### Background Music
- Configured in `music` block in `editable/wedding-data.js` (`editable/assets/bg-music.mp3`).

---

## Special Sections & Features

- **Wax Seal Opener Gate**: Fullscreen intro that opens on tap or click with petal animations. Monogram badge and city derive automatically from `couple` and `venue.city`.
- **Countdown**: Real-time counter derived from `wedding.start` + `wedding.timeZoneOffset`.
- **Photo Gallery**: Responsive masonry grid with full-screen interactive lightbox viewer.
- **Background Music**: Autoplays on opening the wax seal with animated equalizer toggle button.
- **Calendar & Share Action Bar**: Fixed bottom bar allows guests to save `.ics` file, open Google Calendar, view directions, or share/copy invitation link.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless a customer specifically requests structural code changes.
3. Preserve existing styling, animations, and responsiveness.
4. Verify by opening the page locally or running `node --check editable/wedding-data.js`.
