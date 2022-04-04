# JSON Resume Theme Standard Resume Extended

> This theme builds upon and extends on the work [EmaSuriano](https://github.com/EmaSuriano/jsonresume-theme-standard-resume) has done.   
> JSON Resume theme based on [Standard Resume](https://standardresume.co/r/jeffleu) style.

## Modifications

Below you can find the list of modifications:

- changed date-helper for dateformat npm package, (I had issues with date translation)
- added a group-by, to group all positions under a company (name)
- corrected template to align to [jsonresume schema](https://github.com/jsonresume/resume-schema)
    - website --> url
    - company --> name
    - companies do not have an array of positions, each position is unique
    - replaced sample jsonresume with jsonresume schema sample
- moved contact to the top
- added a skills section
- added profiles section
- added languages section
- added volunteer section
- altered href css

## How to use

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

```bash
# Download official resume CLI
> npm install -g resume-cli

# Download Theme
> npm install -g jsonresume-theme-standard-resume-extended

# Display your resume with the theme
> resume serve -t standard-resume-extended
Preview: http://localhost:4000
Press ctrl-c to stop
```

## Development

EmaSuriano provided two scripts inside the `package.json`:

- `yarn start`: Generate `html` and `pdf` and host file on [http://localhost:3000/](http://localhost:3000/).
- `yarn html`: Generate `html` file and store it inside `/dev`.
- `yarn pdf`: Generate `pdf` file and store it inside `/dev`.

## License

Available under [the MIT license](http://mths.be/mit).
