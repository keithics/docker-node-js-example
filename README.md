# ExpressTS with Docker
This is an example of Express in Typescript and Docker
MongoDB debug is true by default, to turn it off, set DEBUG_MONGO=false in .env or your system's environment file 
## API
https://app.swaggerhub.com/apis/keithics/rdc/6bc3035a-2877-4a97-8d69-64fcbb6b3dc7#/


## Installation

Simply run
```bash
$ npm install 
```

or via Yarn.
```bash
$ yarn 
```


# Running in development
```bash
$ npm run dev
```

Type `rs` inside the terminal to manually restart the app.

more information [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

# Linting

```bash
$ npm run lint
```

# Automated Tests

```bash
$ npm run test
```

# Code Documentation
Please check the documentation folder

To update the documentation, just run
```bash
$ npm run doc
```

# Docker

```bash
$ docker-compose up
```

# TODO
~~1. Tests~~

~~2. Generate documentation~~
   
~~3. Open API~~


# License

MIT License

Copyright (c) 2021 Keith Levi Lumanog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



[https://github.com/microsoft/TypeScript-Node-Starter]: https://github.com/microsoft/TypeScript-Node-Starter
