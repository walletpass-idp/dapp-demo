const tokens = {
  "spacing.1": {
    "value": "4px",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "8px",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "12px",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "16px",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "32px",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "64px",
    "variable": "var(--spacing-6)"
  },
  "fonts.body": {
    "value": "Inter, sans-serif",
    "variable": "var(--fonts-body)"
  },
  "colors.primary1": {
    "value": "#fffcfd",
    "variable": "var(--colors-primary1)"
  },
  "colors.primary2": {
    "value": "#fef7f9",
    "variable": "var(--colors-primary2)"
  },
  "colors.primary3": {
    "value": "#ffe9f0",
    "variable": "var(--colors-primary3)"
  },
  "colors.primary4": {
    "value": "#fedce7",
    "variable": "var(--colors-primary4)"
  },
  "colors.primary5": {
    "value": "#facedd",
    "variable": "var(--colors-primary5)"
  },
  "colors.primary6": {
    "value": "#f3bed1",
    "variable": "var(--colors-primary6)"
  },
  "colors.primary7": {
    "value": "#eaacc3",
    "variable": "var(--colors-primary7)"
  },
  "colors.primary8": {
    "value": "#e093b2",
    "variable": "var(--colors-primary8)"
  },
  "colors.primary9": {
    "value": "#e93d82",
    "variable": "var(--colors-primary9)"
  },
  "colors.primary10": {
    "value": "#df3478",
    "variable": "var(--colors-primary10)"
  },
  "colors.primary11": {
    "value": "#cb1d63",
    "variable": "var(--colors-primary11)"
  },
  "colors.primary12": {
    "value": "#621639",
    "variable": "var(--colors-primary12)"
  },
  "colors.gray1": {
    "value": "#fcfcfd",
    "variable": "var(--colors-gray1)"
  },
  "colors.gray2": {
    "value": "#f9f9fb",
    "variable": "var(--colors-gray2)"
  },
  "colors.gray3": {
    "value": "#f0f0f3",
    "variable": "var(--colors-gray3)"
  },
  "colors.gray4": {
    "value": "#e8e8ec",
    "variable": "var(--colors-gray4)"
  },
  "colors.gray5": {
    "value": "#e0e1e6",
    "variable": "var(--colors-gray5)"
  },
  "colors.gray6": {
    "value": "#d9d9e0",
    "variable": "var(--colors-gray6)"
  },
  "colors.gray7": {
    "value": "#cdced6",
    "variable": "var(--colors-gray7)"
  },
  "colors.gray8": {
    "value": "#b9bbc6",
    "variable": "var(--colors-gray8)"
  },
  "colors.gray9": {
    "value": "#8b8d98",
    "variable": "var(--colors-gray9)"
  },
  "colors.gray10": {
    "value": "#80838d",
    "variable": "var(--colors-gray10)"
  },
  "colors.gray11": {
    "value": "#60646c",
    "variable": "var(--colors-gray11)"
  },
  "colors.gray12": {
    "value": "#1c2024",
    "variable": "var(--colors-gray12)"
  },
  "colors.blackA10": {
    "value": "rgba(0, 0, 0, 0.8)",
    "variable": "var(--colors-black-a10)"
  },
  "colors.blue12": {
    "value": "#113264",
    "variable": "var(--colors-blue12)"
  },
  "colors.red2": {
    "value": "#fff7f7",
    "variable": "var(--colors-red2)"
  },
  "colors.red5": {
    "value": "#ffcdce",
    "variable": "var(--colors-red5)"
  },
  "colors.red6": {
    "value": "#fdbdbe",
    "variable": "var(--colors-red6)"
  },
  "colors.red10": {
    "value": "#dc3e42",
    "variable": "var(--colors-red10)"
  },
  "colors.red11": {
    "value": "#ce2c31",
    "variable": "var(--colors-red11)"
  },
  "colors.green10": {
    "value": "#2b9a66",
    "variable": "var(--colors-green10)"
  },
  "colors.green11": {
    "value": "#218358",
    "variable": "var(--colors-green11)"
  },
  "colors.yellow9": {
    "value": "#ffe629",
    "variable": "var(--colors-yellow9)"
  },
  "colors.yellow10": {
    "value": "#ffdc00",
    "variable": "var(--colors-yellow10)"
  },
  "colors.yellow11": {
    "value": "#9e6c00",
    "variable": "var(--colors-yellow11)"
  },
  "colors.yellow12": {
    "value": "#473b1f",
    "variable": "var(--colors-yellow12)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "breakpoints.sm": {
    "value": "600px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "900px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1200px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1400px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.bp300": {
    "value": "300px",
    "variable": "var(--breakpoints-bp300)"
  },
  "breakpoints.bp400": {
    "value": "400px",
    "variable": "var(--breakpoints-bp400)"
  },
  "breakpoints.bp500": {
    "value": "500px",
    "variable": "var(--breakpoints-bp500)"
  },
  "breakpoints.bp600": {
    "value": "600px",
    "variable": "var(--breakpoints-bp600)"
  },
  "breakpoints.bp700": {
    "value": "700px",
    "variable": "var(--breakpoints-bp700)"
  },
  "breakpoints.bp800": {
    "value": "800px",
    "variable": "var(--breakpoints-bp800)"
  },
  "breakpoints.bp900": {
    "value": "900px",
    "variable": "var(--breakpoints-bp900)"
  },
  "breakpoints.bp1000": {
    "value": "1000px",
    "variable": "var(--breakpoints-bp1000)"
  },
  "breakpoints.bp1100": {
    "value": "1100px",
    "variable": "var(--breakpoints-bp1100)"
  },
  "breakpoints.bp1200": {
    "value": "1200px",
    "variable": "var(--breakpoints-bp1200)"
  },
  "breakpoints.bp1300": {
    "value": "1300px",
    "variable": "var(--breakpoints-bp1300)"
  },
  "breakpoints.bp1400": {
    "value": "1400px",
    "variable": "var(--breakpoints-bp1400)"
  },
  "breakpoints.bp1500": {
    "value": "1500px",
    "variable": "var(--breakpoints-bp1500)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "600px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "900px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1200px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1400px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-bp300": {
    "value": "300px",
    "variable": "var(--sizes-breakpoint-bp300)"
  },
  "sizes.breakpoint-bp400": {
    "value": "400px",
    "variable": "var(--sizes-breakpoint-bp400)"
  },
  "sizes.breakpoint-bp500": {
    "value": "500px",
    "variable": "var(--sizes-breakpoint-bp500)"
  },
  "sizes.breakpoint-bp600": {
    "value": "600px",
    "variable": "var(--sizes-breakpoint-bp600)"
  },
  "sizes.breakpoint-bp700": {
    "value": "700px",
    "variable": "var(--sizes-breakpoint-bp700)"
  },
  "sizes.breakpoint-bp800": {
    "value": "800px",
    "variable": "var(--sizes-breakpoint-bp800)"
  },
  "sizes.breakpoint-bp900": {
    "value": "900px",
    "variable": "var(--sizes-breakpoint-bp900)"
  },
  "sizes.breakpoint-bp1000": {
    "value": "1000px",
    "variable": "var(--sizes-breakpoint-bp1000)"
  },
  "sizes.breakpoint-bp1100": {
    "value": "1100px",
    "variable": "var(--sizes-breakpoint-bp1100)"
  },
  "sizes.breakpoint-bp1200": {
    "value": "1200px",
    "variable": "var(--sizes-breakpoint-bp1200)"
  },
  "sizes.breakpoint-bp1300": {
    "value": "1300px",
    "variable": "var(--sizes-breakpoint-bp1300)"
  },
  "sizes.breakpoint-bp1400": {
    "value": "1400px",
    "variable": "var(--sizes-breakpoint-bp1400)"
  },
  "sizes.breakpoint-bp1500": {
    "value": "1500px",
    "variable": "var(--sizes-breakpoint-bp1500)"
  },
  "colors.neutralBg": {
    "value": "var(--colors-neutral-bg)",
    "variable": "var(--colors-neutral-bg)"
  },
  "colors.neutralText": {
    "value": "var(--colors-neutral-text)",
    "variable": "var(--colors-neutral-text)"
  },
  "colors.success": {
    "value": "var(--colors-success)",
    "variable": "var(--colors-success)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar