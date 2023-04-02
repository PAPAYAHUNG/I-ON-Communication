import ElementInput from './ElementInput/index';

export const config = {
  p: [
    {
      type: 'Margin Padding',
      concept: [
        { margin: ['Top', 'Bottom', 'Left', 'Right'] },
        { padding: ['Top', 'Bottom', 'Left', 'Right'] },
      ],
    },
    {
      type: 'Text',
      concept: [{ text: ['fontsize', 'fontweight', 'color'] }],
    },
    {
      type: 'Border',
      concept: ['width', 'radius', 'color'],
    },
    {
      type: 'Background',
      concept: ['Background Color', 'Image'],
    },
  ],
  button: [
    {
      type: 'Margin Padding',
      concept: [
        { margin: ['Top', 'Bottom', 'Left', 'Right'] },
        { padding: ['Top', 'Bottom', 'Left', 'Right'] },
      ],
    },
    {
      type: 'Text',
      concept: [{ text: ['fontsize', 'fontweight', 'color'] }],
    },
    {
      type: 'Border',
      concept: ['width', 'radius', 'color'],
    },
    {
      type: 'Background',
      concept: ['Background Color', 'Image'],
    },
  ],
};

const typeConfig = {
  input: ElementInput,
};
