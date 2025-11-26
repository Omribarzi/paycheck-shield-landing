# Image Customization Guide

Your landing page now has **professional images** that make it way more sexy! Here's what was added and how to customize.

---

## 🖼️ Images Added

### 1. **Hero Background Image**
**Current:** Office/workplace scene (subtle, 15% opacity)
**Location in code:** Line 12 in `styles.css`

```css
background-image: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&fit=crop&q=80');
```

**How to change:**
- Go to [Unsplash](https://unsplash.com)
- Search: "warehouse worker", "restaurant kitchen", "retail worker", "construction"
- Find image you like
- Right-click → Copy image URL
- Replace the URL in the CSS

**Recommended searches:**
- "warehouse worker smartphone"
- "restaurant employee checking phone"
- "retail worker busy"

---

### 2. **Phone Mockup**
**Current:** Generic chart/data image
**Location:** Line 92 in `index.html`

```html
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=1200&fit=crop&q=80" alt="PayCheck Shield Calculator">
```

**Better option:** Create a REAL screenshot
1. Build a simple calculator mockup
2. Take screenshot on your phone
3. Upload to your site
4. Replace URL with: `images/calculator-mockup.png`

**Or use AI:**
- Use ChatGPT/Midjourney to generate: "Mobile app calculator interface showing paycheck breakdown, clean modern design, iPhone screenshot"

---

### 3. **Testimonial Avatar**
**Current:** Professional woman headshot
**Location:** Line 114 in `index.html`

```html
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80" alt="Maria R.">
```

**Better option:**
- Use AI to generate: "Professional portrait of a restaurant worker, diverse, authentic, headshot"
- Or use Unsplash: search "portrait diverse worker"
- Keep it authentic - avoid stock photo look

---

### 4. **Icons**
**Current:** Font Awesome icons (professional, clean)
**No images needed** - these are vector icons that load from CDN

Icons used:
- Clock (⏰ → `<i class="fas fa-clock"></i>`)
- Dollar (💰 → `<i class="fas fa-dollar-sign"></i>`)
- Question (❓ → `<i class="fas fa-question-circle"></i>`)
- Warning (😤 → `<i class="fas fa-exclamation-triangle"></i>`)

**Want different icons?**
Browse: [Font Awesome Icons](https://fontawesome.com/icons)

---

## 🎨 Quick Image Improvements

### Option 1: Use Better Free Images

**Unsplash (Best for this project):**
- [unsplash.com](https://unsplash.com)
- Free, high quality, no attribution required
- Search terms: "worker", "paycheck", "hourly employee"

**Pexels:**
- [pexels.com](https://pexels.com)
- Also free, great quality

### Option 2: AI-Generated Images

**For hero background:**
- Prompt: "Wide angle photo of a warehouse worker checking their smartphone during break, natural lighting, professional photography"
- Tools: Midjourney, DALL-E, Stable Diffusion

**For mockup:**
- Prompt: "Clean mobile app interface showing paycheck calculator with hourly rate and overtime, modern UI design, iPhone screenshot"

### Option 3: Create Real Screenshots (Best!)

Once you build the calculator:
1. Take real screenshots on iPhone
2. Add to your site in `/images` folder
3. Replace mockup image with real one
4. Most authentic and builds trust

---

## 📁 Where to Put Images

### If using your own images:

1. Create `images` folder in your project:
```
paycheck-landing/
├── index.html
├── styles.css
├── script.js
├── success.html
├── README.md
└── images/
    ├── hero-bg.jpg
    ├── calculator-mockup.png
    └── avatar.jpg
```

2. Update HTML/CSS to use local images:

**In index.html:**
```html
<img src="images/calculator-mockup.png" alt="Calculator">
<img src="images/avatar.jpg" alt="Maria R.">
```

**In styles.css:**
```css
background-image: url('images/hero-bg.jpg');
```

3. Upload to GitHub with the images folder

---

## ⚡ Image Optimization (Important!)

**Before deploying, optimize images:**

### Online Tools (Free):
- [TinyPNG](https://tinypng.com) - Compress images
- [Squoosh](https://squoosh.app) - Google's image optimizer

### Best Practices:
- Hero background: **Max 200KB**, 1920x1080px
- Mockup: **Max 150KB**, 800x1600px
- Avatar: **Max 30KB**, 300x300px

**Why?** Faster load times = better conversion rates

---

## 🎯 Recommended Image Strategy

**For validation (right now):**
✅ Keep using Unsplash URLs (current setup)
✅ Fast, professional, good enough

**After validation (when building MVP):**
✅ Create real screenshots of your calculator
✅ Use AI for hero background if needed
✅ Keep avatar (or get testimonial from real beta user)

---

## 🔄 How to Update Images After Deploy

### If using Netlify + GitHub:

1. Edit the HTML/CSS files locally
2. Replace image URLs
3. Save files
4. Commit to GitHub:
```bash
git add .
git commit -m "Update images"
git push
```
5. Netlify auto-deploys in 30 seconds

---

## 💡 Pro Tips

1. **Hero image should be subtle**
   - Low opacity (10-20%)
   - Dark/muted tones
   - Don't distract from text

2. **Mockup should show value**
   - Clear, readable
   - Shows actual interface
   - Professional, not busy

3. **Avatar should be authentic**
   - Real person look
   - Diverse, relatable
   - Professional but approachable

4. **Test on mobile**
   - 60% of traffic is mobile
   - Images should load fast
   - Text should be readable over images

---

## 🆘 Quick Reference

| Image | Current URL | Where to Change |
|-------|-------------|-----------------|
| Hero BG | styles.css line 12 | Search for `background-image:` |
| Mockup | index.html line 92 | Search for `mockup-image` |
| Avatar | index.html line 114 | Search for `testimonial-avatar` |

---

## ✅ Current Setup is Good Enough

**Honest assessment:** The images I added are already professional and work well. You can:

- **Launch with current images** → Validate first
- **Customize later** → After getting signups
- **Add real screenshots** → When you build the calculator

Don't let perfect images delay your validation!

---

Need help finding specific images or customizing? Let me know!
