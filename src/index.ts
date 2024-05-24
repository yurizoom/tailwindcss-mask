import _ from "lodash";

const plugin = require("tailwindcss/plugin")

module.exports = plugin.withOptions(
    function () {
        return function ({addBase, matchUtilities, theme}: any) {
            addBase({
                ":root": {
                    "--zm-mask-start-opacity": "rgba(0, 0, 0, 1)",
                    "--zm-mask-end-opacity": "rgba(0, 0, 0, 0)",
                    "--zm-mask-gradient-start": "0%",
                    "--zm-mask-gradient-end": "100%",
                },
            });

            matchUtilities({
                'mask-image': (value: string) => ({
                    maskImage: value
                })
            }, {
                values: theme("maskImage"),
                type: ["any"],
                respectImportant: false,
            });

            matchUtilities({
                'mask': (value: string) => ({
                    'mask-size': value
                })
            }, {
                values: theme("maskSize"),
                type: ["any"],
                respectImportant: false,
            });

            matchUtilities({
                'mask': (value: string) => ({
                    'mask-repeat': value
                })
            }, {
                values: theme("maskRepeat"),
                type: ["any"],
                respectImportant: false,
            });

            matchUtilities({
                'mask': (value: string) => ({
                    'mask-position': value
                })
            }, {
                values: theme("maskPosition"),
                type: ["any"],
                respectImportant: false,
            });

            matchUtilities(
                {
                    "mask-image-start": (value: string) => ({
                        "--zm-mask-gradient-start": value,
                    }),

                    "mask-image-end": (value: string) => ({
                        "--zm-mask-gradient-end": value,
                    }),
                },
                {
                    values: theme("maskGradientSteps"),
                    type: "length",
                }
            )

            matchUtilities(
                {
                    "mask-image-start-opacity": (value: string) => {
                        return {
                            "--zm-mask-start-opacity": `rgba(0,0,0, ${value})`,
                        }
                    },

                    "mask-image-end-opacity": (value: string) => {
                        return {
                            "--zm-mask-end-opacity": `rgba(0,0,0, ${value})`,
                        }
                    },
                },
                {
                    values: theme("opacity"),
                }
            )
        }
    },
    function () {
        return {
            theme: {
                maskImage: {
                    none: 'none',
                    'gradient-to-t': 'linear-gradient(to top, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-tr': 'linear-gradient(to top right, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-r': 'linear-gradient(to right, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-br': 'linear-gradient(to bottom right, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-b': 'linear-gradient(to bottom, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-bl': 'linear-gradient(to bottom left, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-l': 'linear-gradient(to left, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                    'gradient-to-tl': 'linear-gradient(to top left, var(--zm-mask-start-opacity) var(--zm-mask-gradient-start), var(--zm-mask-end-opacity) var(--zm-mask-gradient-end)',
                },
                maskSize: {
                    auto: 'auto',
                    cover: 'cover',
                    contain: 'contain',
                },
                maskRepeat: {
                    repeat: 'repeat',
                    'no-repeat': 'no-repeat',
                    'repeat-x': 'repeat-x',
                    'repeat-y': 'repeat-y',
                },
                maskPosition: {
                    bottom: 'bottom',
                    center: 'center',
                    left: 'left',
                    'left-bottom': 'left bottom',
                    'left-top': 'left top',
                    right: 'right',
                    'right-bottom': 'right bottom',
                    'right-top': 'right top',
                    top: 'top',
                },
                maskGradientSteps: {
                    0: "0%",
                    5: "5%",
                    10: "10%",
                    15: "15%",
                    20: "20%",
                    25: "25%",
                    30: "30%",
                    40: "40%",
                    45: "45%",
                    50: "50%",
                    55: "55%",
                    60: "60%",
                    70: "70%",
                    75: "75%",
                    80: "80%",
                    85: "85%",
                    90: "90%",
                    95: "95%",
                    100: "100%",
                },
            }
        }
    }
);