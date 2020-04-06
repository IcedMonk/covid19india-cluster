import manImg from '../../images/man.png'

export default {
  nodes: [
    // {
    //   id: 8,
    //   shape: 'circularImage',
    //   size: 50,
    //   label: 'European Union',
    //   image: 'https://euro.indiana.edu/images/photo-essay/MMEU-768x768.jpg',
    // },
    // {
    //   id: 2,
    //   shape: 'image',
    //   image: 'http://clipart-library.com/images/8cxKqXjKi.png',
    // },
    {
      id: 3,
      size: 30,
      shape: 'hexagon',
      color: '#A4E063',
      borderWidth: 0,
      label: '3rd'
    },
    {
      id: 4,
      size: 30,
      shape: 'hexagon',
      color: '#A4E063',
      borderWidth: 0,
      label: '4th'
    },
    {
      id: 5,
      size: 30,
      shape: 'hexagon',
      color: '#A4E063',
      borderWidth: 0,
      label: '5th'
    },
    {
      id: 6,
      size: 30,
      shape: 'hexagon',
      color: '#A4E063',
      borderWidth: 0,
      label: '6th'
    },
    {
      id: 7,
      size: 30,
      shape: 'hexagon',
      color: '#A4E063',
      borderWidth: 0,
      label: '7th'
    },
    {
      id: 1,
      size: 30,
      shape: 'image',
      image: manImg,
      borderWidth: 0,
      label: '8th'
    },
  ],
  edges: [
    { from: 1, to: 3,smooth: true,
        dashes: true, },
    { from: 1, to: 4,smooth: true,
        dashes: true, },
    { from: 1, to: 5,smooth: true,
        dashes: true, },
    { from: 3, to: 6 },
    {
      from: 3,
      to: 7,
    },
  ],
}
