/**
 * Fluxo waitlist -> Google Sheet
 *
 * Paste this whole file into Extensions > Apps Script (replace the default code),
 * then Deploy > New deployment > Web app. See docs/google-sheet-setup.md.
 *
 * The website posts these form fields: name, email, phone, company, fleetSize, website.
 * `website` is a hidden honeypot field. Real people never fill it, bots do.
 */
const SHEET_NAME = 'Waitlist';
const HEADERS = ['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Fleet size'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const p = (e && e.parameter) || {};

    // Honeypot: silently accept and drop bot submissions.
    if (p.website) return reply({ ok: true });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date(),
      clean(p.name),
      clean(p.email),
      // Leading ' makes Sheets store the number as text (keeps 0803... and +234...).
      "'" + String(p.phone || '').trim().slice(0, 40),
      clean(p.company),
      clean(p.fleetSize),
    ]);

    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Handy for checking the deployment from a browser: open the /exec URL.
function doGet() {
  return reply({ ok: true, service: 'Fluxo waitlist' });
}

function clean(value) {
  // Trim, cap length, and stop spreadsheet formula injection (=, +, -, @ at the start).
  let v = String(value || '').trim().slice(0, 300);
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
