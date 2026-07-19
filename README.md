# Mood Changer

A small front-end project that changes the page's **mood** when you click a button.
Clicking a mood button (e.g. *Happy* or *Calm*) updates the page's background color,
text color, a display message, and the mood name shown at the top of the page.

This project practices core front-end concepts:

- **DOM** — the Document Object Model
- **Event listeners** — responding to clicks
- **Objects** — storing mood data
- **Event delegation** — handling many buttons with a single listener

---

## Project Structure

| File | Purpose |
| --- | --- |
| `moodswitcher.html` | The web page: heading, mood buttons, and a message area |
| `mood.js` | The logic: mood data, functions, and event listeners |
| `styles.css` | The provided stylesheet (linked to the HTML) |

Every file begins with a comment containing my name and the current date.

---

## How It's Built

The code follows the order **DATA → FUNCTIONS → ACTIONS**:

1. **DATA** — mood information is stored in an object (each mood has its own
   background color, text color, and message).
2. **FUNCTIONS** — functions read from the data object and apply the changes to the page.
3. **ACTIONS** — the buttons are connected using event listeners (via event delegation).

Each section in `mood.js` is labeled with `//` comments.

---

## How to Run

No build step or server is required — it runs directly in the browser.

1. Download or clone this repository.
   ```bash
   git clone https://github.com/<your-username>/mood-changer.git
   cd mood-changer
   ```
2. Make sure `moodswitcher.html`, `mood.js`, and the CSS file are in the same folder.
3. Open **`moodswitcher.html`** in a web browser (double-click it, or drag it into the browser).
4. Open **Developer Tools** (`F12`) and check the **Console** tab for any errors while testing.

---

## How to Use

1. Open the page — it loads in a default/neutral mood.
2. Click any mood button (for example **Happy**, **Calm**, **Sad**, or **Energetic**).
3. Watch the page respond.

---

## Expected Results

When a mood button is clicked, **all** of the following update at once to match that mood:

- ✅ The **background color** of the page changes.
- ✅ The **text color** changes.
- ✅ A **display message** appears describing the mood.
- ✅ The **mood name** shown at the top of the page updates.

Example:

| Button clicked | Background | Text | Message (example) |
| --- | --- | --- | --- |
| Happy | Bright yellow | Dark | "You're feeling happy! 😄" |
| Calm | Soft blue | Dark | "Nice and calm. 🌊" |
| Sad | Gray | Light | "Feeling a little blue. 😔" |
| Energetic | Orange/red | Dark | "Full of energy! ⚡" |

The page should update instantly on each click with **no errors** in the browser console.

---
