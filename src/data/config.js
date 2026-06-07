// ╔══════════════════════════════════════════════════════════╗
// ║         CONFIGURATION — EDIT ALL YOUR CONTENT HERE       ║
// ╚══════════════════════════════════════════════════════════╝

export const PASSCODE = '0225';

// ── MUSIC TRACKS ──
// Add your MP3 file paths inside /public/music/
// e.g. src: '/music/romantic.mp3'
export const TRACKS = {
  lock:    { name: 'A Secret Melody ♪',  src: '' },
  main:    { name: 'Birthday Magic ♪',   src: '' },
  wishes:  { name: 'Love in the Air ♪',  src: '' },
  gallery: { name: 'Our Song ♪',         src: '' },
  letter:  { name: 'Tender Moment ♪',    src: '' },
};

// ── GALLERY ITEMS ──
// Add your photos inside /public/photos/
// type: 'image' | 'video'
// src: '/photos/us1.jpg'  or leave '' for placeholder
export const GALLERY_ITEMS = [
  { type: 'image', src: '', label: 'Our first photo together 💕' },
  { type: 'image', src: '', label: 'This smile 😍' },
  { type: 'image', src: '', label: 'You being you 🌸' },
  { type: 'image', src: '', label: 'My favourite day 💖' },
  { type: 'image', src: '', label: 'Us 🥰' },
  { type: 'image', src: '', label: 'Forever 💫' },
  { type: 'video', src: '', label: 'A special memory 🎥' },
  { type: 'image', src: '', label: 'Beautiful you ✨' },
  { type: 'image', src: '', label: 'Together 💑' },
];

// ── WISH PAGES ──
export const WISHES = [
  {
    icon: '🌹',
    title: 'Happy Birthday, Samikshya',
    body: `Today the whole universe pauses to celebrate you — the one who makes every ordinary moment feel like <em>magic</em>. You are not just a birthday girl; you are my favourite person in the world. And I hope today feels as wonderful as you make every day feel for me.`,
  },
  {
    icon: '🌙',
    title: 'To My Riss Ko Pookie',
    body: `There is something about you that I cannot explain — the way you light up a room without even trying, the way you laugh at your own jokes before finishing them, the way you make me feel completely <em>at home</em>. Thank you for being exactly, beautifully, wonderfully you.`,
  },
  {
    icon: '💌',
    title: 'My Wish For You',
    body: `I wish you a year full of moments that take your breath away. I wish you mornings that feel gentle, nights that feel safe, and days so full of joy that your heart feels like it might burst. I wish you <em>all the love you so freely give to everyone else</em>, returned to you a thousandfold.`,
  },
  {
    icon: '✨',
    title: 'Miss Sewenteeka',
    body: `You are stubborn and sweet, chaotic and careful, funny and kind and so, so real. You carry the world gently in your hands and you don't even realise how <em>remarkable</em> that is. I see you. Every version of you. And every version is my favourite.`,
  },
  {
    icon: '💖',
    title: 'Always There For You',
    body: `Whatever this year brings — the good days, the hard days, the days you don't want to get out of bed — I want you to remember: <em>I am here</em>. In your bad and good times, in every season. You will never have to walk alone. Happy Birthday, my love. 💕`,
  },
];

// ── SURPRISE POPUPS ──
export const POPUPS = [
  {
    title: 'A Secret 🤫',
    msg: "Kaniska thinks about you literally all the time. Like… ALL the time. It's actually a little ridiculous. But also very sweet. 💕",
  },
  {
    title: 'True Story! 📖',
    msg: "Did you know that your smile is Kaniska's favourite thing in the entire universe? Yes, even more than food. That's love. 🍜❤️",
  },
  {
    title: 'Confession Time 💌',
    msg: 'You are the best thing that has ever happened to him. And he will spend every day trying to be worthy of that. Happy Birthday, beautiful. 🌹',
  },
];

// ── LOVE BUTTON RESPONSES ──
export const LOVE_RESPONSES = [
  "Of course you do! 😂💕 Kaniska knew it!",
  "Took you long enough to admit it! 😜❤️",
  "He knew it all along! Now go read his letter 💌",
  "That's the best thing that happened today! 🎉💖",
  "He loves you MORE. Argue with the wall! 😤💕",
];

// ── WRONG PASSWORD MESSAGES ──
export const WRONG_MSGS = [
  "Nope! Try again, silly 😝",
  "That's not it… think harder! 💭",
  "Wrong! (Don't cheat 😤)",
  "Hmm… are you sure you know me? 😏",
  "Almost! (Not really 😂)",
];