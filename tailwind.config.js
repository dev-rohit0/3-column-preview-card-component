module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '940px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'darkCyan': 'hsl(184, 100%, 22%)',
        'brightOrange': 'hsl(31, 77%, 52%)',
        'veryDarkCyan': 'hsl(179, 100%, 13%)',
        'transparentWhite': 'hsla(0, 0%, 100%, 0.75)',
        'veryLightGray': 'hsl(0, 0%, 95%)'
      },
      fontFamily: {
        'bigShoulders':['Big Shoulders Display', 'cursive'],
        'lexend':['Lexend Deca', 'sans-serif']
      },
    },
  },
  plugins: [],
}