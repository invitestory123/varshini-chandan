/**
 * wedding-data.js — Customer-facing editable data layer for marigold-bhavan
 * Edit this file to update couple names, wedding dates, event details, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Varshini",
    groom: "Chandan",
  },

  wedding: {
    eventTitle: "Wedding Reception of Varshini & Chandan",
    eventSubtitle: "Join us for the wedding reception of",
    dateLabel: "06.12.26",
    dayLine: "Sunday, 6th December 2026",
    timeLine: "12:00 PM onwards",
    calendarNote: "Save the date",
    // start and end are ISO local time strings (drives countdown and calendar invites)
    start: "2026-12-06T12:00:00",
    end: "2026-12-06T16:00:00",
    timeZoneOffset: "+05:30",
  },

  invitation: {
    note: "Smt. Dr. Jyothi & Sri Dr. Nagarajaiah request the honor of your presence with family and friends on the auspicious occasion of the wedding reception of their younger daughter Chi.Sou. Varshini T.N. with Chi.Ry. Chandan R. (S/o Smt. Anitha R. & Sri Rajashekar S.).",
    closing: "Awaiting your gracious presence",
  },

  venue: {
    name: "Amara, Nandi Link Grounds",
    address: "Nayandahalli, Near NICE Road, Mysore Road, Bengaluru - 560039",
    city: "Bengaluru",
    query: "Nandi Link Grounds, Pantarapalya, Nayanda Halli, Bengaluru, Karnataka 560026",
    lat: 12.9411,
    lng: 77.5309,
    // Custom map links (leave empty to generate automatically from venue query)
    mapSearchUrl: "https://maps.app.goo.gl/rVuPxenaq8NvG18C9?g_st=iw",
    directionsUrl: "https://maps.app.goo.gl/rVuPxenaq8NvG18C9?g_st=iw",
  },

  images: {
    // Replace image files in editable/assets/ or point to new URLs/paths
    couple: "./editable/assets/couple.png",
    footerBg: "./editable/assets/footer-bg.jpg",
    map: "./editable/assets/map.jpg",
  },
};
