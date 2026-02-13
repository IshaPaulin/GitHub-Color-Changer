# GitHub Color Changer Extension

A simple Chrome extension that adds a button to GitHub pages to change the background color!

## What You'll Learn
- How extensions work
- How to inject code into webpages
- How to add custom UI elements to existing sites

## Files Explanation

1. **manifest.json** - The "brain" of the extension
   - Tells Chrome what your extension does
   - Sets permissions (we need access to github.com)
   - Points to your other files

2. **content.js** - The actual code that runs on GitHub
   - Creates the button
   - Adds click functionality
   - Changes background colors

3. **styles.css** - Makes the button look nice
   - Styling for our custom button

4. **icon.png** - The extension icon (you need to add this)

## How to Install

1. **Download/Save these files** to a folder on your computer

2. **Add an icon**: 
   - Find any small PNG image (128x128 pixels is ideal)
   - Save it as `icon.png` in the same folder
   - Or grab a free icon from flaticon.com or icons8.com

3. **Open Chrome and go to**: `chrome://extensions/`

4. **Enable Developer Mode**:
   - Look for a toggle switch in the top right
   - Turn it ON

5. **Load your extension**:
   - Click "Load unpacked" button
   - Select the folder containing these files
   - Your extension should appear in the list!

6. **Test it**:
   - Go to github.com
   - You should see a "🎨 Change BG Color" button in the header
   - Click it to change the background color!

## Troubleshooting

- **Button not appearing?** 
  - Check the browser console (F12) for errors
  - Make sure you're on a github.com page
  
- **Extension not loading?**
  - Make sure all files are in the same folder
  - Check that manifest.json has no typos

## Next Steps

Once you understand how this works, you can:
- Change what the button does
- Add more buttons
- Modify different parts of GitHub
- Build your pixel avatar creator!

## How This Relates to Your Avatar Idea

This extension shows you:
✓ How to add custom UI to GitHub (the button)
✓ How to run code on GitHub pages (content.js)
✓ How to get permissions (manifest.json)

For your pixel avatar creator, you'd:
1. Add a button on GitHub's settings/avatar page (like we did here)
2. Open a pixel art editor when clicked
3. Upload the created image to GitHub

Same concepts, just more complex!
