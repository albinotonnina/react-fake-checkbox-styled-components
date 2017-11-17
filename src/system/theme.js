const theme = () => {
  const space_unit = 16
  const unit = 'px'

  return {
    space: {
      xs: `${space_unit / 4}${unit}`,
      sm: `${space_unit / 2}${unit}`,
      md: `${space_unit}${unit}`,
      lg: `${space_unit * 2}${unit}`,
      xl: `${space_unit * 4}${unit}`
    },

    fontSizes: {
      xs: '10px',
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '36px'
    },

    colors: {
      black: '#000000',
      neutralPrimary: '#333333',
      neutralSecondary: '#666666',
      neutralTertiary: '#a6a6a6',
      themePrimary: '#337df6'
    }
  }
}

export default theme
