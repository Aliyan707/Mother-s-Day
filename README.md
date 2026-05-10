# Mother's Day Premium Landing Page

An ultra-premium, cinematic Mother's Day landing page built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Premium UI/UX**: Apple-inspired luxury design with glassmorphism
- ✨ **Advanced Animations**: Smooth Framer Motion animations throughout
- 💝 **Emotional Storytelling**: Beautiful Urdu poetry and heartfelt messages
- 📸 **Interactive Gallery**: Drag & drop image upload with preview
- 🎯 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🌟 **Special Effects**: Floating hearts, sparkles, cursor glow, and more

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Hero section
│   ├── UrduPoetry.tsx      # Urdu poetry section
│   ├── UploadGallery.tsx   # Image upload gallery
│   ├── Timeline.tsx        # Mother's love timeline
│   ├── AppreciationCards.tsx # Appreciation cards
│   ├── WishesWall.tsx      # Interactive wishes wall
│   ├── Footer.tsx          # Footer
│   ├── FloatingHearts.tsx  # Floating hearts effect
│   ├── Sparkles.tsx        # Sparkles effect
│   └── LoadingScreen.tsx   # Loading animation
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets

```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- Rose Pink: `#ff4d8d`
- Lavender: `#c084fc`
- Rose Gold: `#f4c2c2`

### Fonts
The project uses:
- Poppins (sans-serif)
- Playfair Display (serif)
- Noto Nastaliq Urdu (Urdu text)

### Content
Edit the component files to customize:
- Poetry in `UrduPoetry.tsx`
- Timeline milestones in `Timeline.tsx`
- Appreciation messages in `AppreciationCards.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this for your Mother's Day celebrations!

---

Made with ❤️ for all the amazing mothers in the world
