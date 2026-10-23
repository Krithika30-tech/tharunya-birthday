# Birthday Scrapbook 🎂

A chaotic, funny, retro-scrapbook birthday website made with plain HTML, CSS, and JavaScript. No frameworks, build step, database, or paid hosting needed. Works on GitHub Pages.

## Files

- `index.html` — page content, memories, and the secret letter
- `style.css` — retro scrapbook look and mobile layout
- `script.js` — editable name, roast generator, quiz, confetti, and interactions
- `assets/` — put your photos here

## 1. Customize it

### Set their name
Open `script.js` and change:

```js
const friendName = "THARUNYA";
```

For example:

```js
const friendName = "Muffin";
```

The name updates in the main heading, letter, and page title.

### Personalize the roast and quiz
In `script.js`, edit the strings inside `roastLines` and `quizQuestions`. Quiz answer numbering starts at `0`, so `correct: 0` means the first answer is correct, `correct: 1` means the second, and so on.

### Your photos are already added 💗
The four photos you sent are in the `assets/` folder and are displayed in the Memory Wall:
- `assets/memory-1.jpeg` — rainy-day umbrella selfie
- `assets/memory-2.jpeg` — traditional outfits
- `assets/memory-3.jpeg` — college-uniform selfie
- `assets/memory-4.jpeg` — night selfie

To replace one later, keep the same filename and overwrite that image, or update its `src` in `index.html`.

### Edit the secret letter
In `index.html`, find `<div id="letterContent">` and edit the paragraphs. Keep the surrounding tags in place so the fold/unfold button still works.

## 2. Run locally

**Option A — easiest:** Double-click `index.html` to open it in your browser.

**Option B — local web server:** Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with `Ctrl+C`.

## 3. Publish for free on GitHub Pages

1. Sign in or create an account at [GitHub](https://github.com/).
2. Create a new **public** repository, e.g. `birthday-scrapbook`.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder (including your photos if you've added any) to the repository's root.
4. Open the repository's **Settings**.
5. Select **Pages** from the sidebar.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. Wait for GitHub Pages to finish deploying. The site URL will look like:
   `https://YOUR-USERNAME.github.io/birthday-scrapbook/`
9. Open the published URL on your phone and test all sections.

Updates: edit the files locally, then upload/commit the changed files to the same repository. GitHub Pages will publish the changes automatically after the deployment completes.

## Troubleshooting

- **Styles or JavaScript do not load:** make sure `style.css` and `script.js` are in the repository root and spelled exactly as referenced.
- **Photos are broken:** check the filename, capitalization, and path. GitHub Pages paths are case-sensitive.
- **Name did not change:** edit `friendName` in `script.js`, save, then reload the page.
- **Want it private?** GitHub Pages availability for private repositories depends on your GitHub plan and organization settings. A public repository is the simplest free route.

## Privacy note

A public GitHub Pages site is publicly accessible. Only add photos, names, or stories your friend would be comfortable sharing publicly. This site has no analytics, tracking, forms, or backend.


## Optional: Make it feel more personal
- Replace the sample jokes with your actual classroom/lunch-time inside jokes.
- Use photos you both are comfortable sharing; remember a public GitHub Pages site can be seen by anyone.
- The design uses Google Fonts when online, but it still works with fallback fonts if the fonts cannot load.


## Story-specific version
This version is personalized for Tharunya and includes the four uploaded photos. The copy is also personalized around the story shared: meeting on the 8th, class leader and new joinee, the quiet-to-chatterbox plot twist, lunch-time teasing, daily life updates, supporting each other, apologizing when wrong, and missing the old closeness while feeling grateful to still share college. Edit any of it to make it sound more like your own voice.
