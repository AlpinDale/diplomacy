# Diplomacy

Work-In-Progress web app for the [Diplomacy](https://en.wikipedia.org/wiki/Diplomacy_(game)) board game.

## Development

Doing this on Linux, but it probably works on Windows too.

You will need to install `git` and `nodejs`

```sh
git clone https://github.com/AlpinDale/diplomacy.git
cd diplomacy

npm install

cd diplomacy-server
npm install
cd ..

# run both frontend and backend servers together
npm run dev:all

# OR run them in seperate terminals

# term 1:
npm run dev

# term 2:
npm run server
```

The frontend will launch at http://localhost:3000, backend at http://localhost:5000