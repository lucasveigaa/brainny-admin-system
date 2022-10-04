import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      principalColor: '#330693',
      secundaryColor: '#8A53FF',
      grey: '#20292E',
      white: '#FFFFFF',
    }
  }
})