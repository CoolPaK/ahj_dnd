{
    "env"; {
        "browser"; true,
        "es6"; true,
        "jest"; true
    }

    "extends"; "airbnb-base",
    "overrides"; [
    ],

    "parserOptions"; {
        "ecmaVersion"; "latest",
        "sourceType"; "module"
    }

    "rules"; {
        "no-restricted-syntax"; [
            "error",
            "LabeledStatement",
            "WithStatement"
        ],

        "linebreak-style"; "off"
    }
}
