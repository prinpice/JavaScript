## node.js

* javascript의 이점들을 가지고 javascript로 개발을 할 수 있도록 개발된 엔진

* react : node.js의 package중 하나

  ex) airbnb, netflex

* npm : node.js에서 제공하는 package manager

  ex) python의 pip와 같음

* lodash : javascript에서 없는 문법들을 사용할 수 있게 해주는 라이브러리

  ​		파이썬에서 사용하는 문법들을 javascript에서 사용할 수 있게 해줌

  ​		lodash : low dash(_)

  

* 버전 확인해보기

```git
$ node --version
bash: node: command not found
```

* 설치

1. google에 node.js 입력하여 다운로드 페이지에 들어간다.
2. 다운로드 탭에 들어간다.
3. Windows Installer(.msi) 64-bit를 클릭하여  다운받는다.
4. 기본 설정 그대로 바로 설치한다.



* 설치 후 확인

```git
$ node --version
v10.15.3

student@M70116 MINGW64 ~
$ npm --version
6.4.1
```



**vscode  사용**

* `package.json`
  * main : 기본으로 사용하는 js
  * scripts : 특정 단어를 입력했을 때 실행되는 스크립트를 작성한다.
  * `test` : `npm run test`했을 때 작성되어있는 스크립트가 실행된다.



* terminal창에서 버전이 맞는지 확인해본다.

  ```git
  student@M70116 MINGW64 ~/mygithub/JavaScript/nodejs/Day2
  $ npm --version
  6.4.1
  ```

* initiating하여 package를 생성한다.

  * 입력해야하는 내용은 `enter`를 눌러서 생략 가능하며 package.json파일에서 다시 입력할 수 있다.

  ```git
  student@M70116 MINGW64 ~/mygithub/JavaScript/nodejs/Day2
  $ npm init
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.
  
  See `npm help json` for definitive documentation on these fields
  and exactly what they do.
  
  Use `npm install <pkg>` afterwards to install a package and
  save it as a dependency in the package.json file.
  
  Press ^C at any time to quit.
  package name: (day2)
  version: (1.0.0)
  description:
  entry point: (index.js)
  test command:
  git repository:
  keywords:
  author:
  license: (ISC)
  About to write to C:\Users\student\mygithub\JavaScript\nodejs\Day2\package.json:
  
  {
    "name": "day2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
  }
  
  
  Is this OK? (yes)
  ```

* npm을 통해 lodash 라이브러리를 설치한다.

  ```git
  student@M70116 MINGW64 ~/mygithub/JavaScript/nodejs/Day2
  $ npm install lodash
  npm notice created a lockfile as package-lock.json. You should commit this file.
  npm WARN day2@1.0.0 No description
  npm WARN day2@1.0.0 No repository field.
  
  + lodash@4.17.11
  added 1 package from 2 contributors and audited 1 package in 0.894s
  found 0 vulnerabilities
  ```

  * 라이브러리 설치하면 `node_modules`폴더가 생성되며 package.json에 기록("dependencies")된다.

  * package.json에 설치한 module이 기록되며 기록된 module은 삭제하여도 `npm install`을 통해 다시 설치할 수 있다.

  * `npm install` : package.json에 기록되어있는 모든 module을 설치해준다.

    ```git
    student@M70116 MINGW64 ~/mygithub/JavaScript/nodejs/Day2
    $ npm install
    npm WARN day2@1.0.0 No description
    npm WARN day2@1.0.0 No repository field.
    
    added 1 package from 2 contributors and audited 1 package in 1.036s
    found 0 vulnerabilities
    ```

  * `node_modules`은 매우 무거운 파일이기 때문에 .gitignore에 넣거나 삭제하고 git에 올려야 한다.