import ElementInput from './ElementInput/index';

export const config = {
  p: [
    {
      name: 'Text',
      includesion: ['Content', 'Font size', 'Font weight', 'Color'],
    },
    { name: 'Margin', includesion: ['Top', 'Bottom', 'Left', 'Right'] },
    { name: 'Padding', includesion: ['Top', 'Bottom', 'Left', 'Right'] },
    { name: 'Background', includesion: ['Color'] },
  ],
  button: [
    {
      name: 'Text',
      includesion: ['Content', 'Font size', 'Font weight', 'Color'],
    },
    { name: 'Margin', includesion: ['Top', 'Bottom', 'Left', 'Right'] },
    { name: 'Padding', includesion: ['Top', 'Bottom', 'Left', 'Right'] },
    { name: 'Background', includesion: ['Color'] },
  ],
};

const typeConfig = {
  input: ElementInput,
};
