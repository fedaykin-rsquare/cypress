# cypress

## 설치
```bash
$ npm i
```

## 설정
```bash
1. .env 파일 생성
2. 구글 이메일과 비밀번호를 형식에 맞추어서 입력
 - GOOGLE_EMAIL=아이디
 - GOOGLE_PASSWORD=비밀번호
```
### .env 예시
~~~
GOOGLE_EMAIL=fedaykin@rsquare.co.kr
GOOGLE_PASSWORD=1111
~~~

## 실행
```bash
$ npm run open
```

## 프로젝트 구조
```bash
cypress
 ├ e2e
 | ├ 1-getting-started
 | | └ todo.cy.js
 | ├ 2-advanced-examples
 | | ├ actions.cy.js
 | | ├ aliasing.cy.js
 | | ├ assertions.cy.js
 | | ├ connectors.cy.js
 | | ├ cookies.cy.js
 | | ├ cypress_api.cy.js
 | | ├ files.cy.js
 | | ├ location.cy.js
 | | ├ misc.cy.js
 | | ├ navigation.cy.js
 | | ├ network_requests.cy.js
 | | ├ querying.cy.js
 | | ├ spies_stubs_clocks.cy.js
 | | ├ storage.cy.js
 | | ├ traversal.cy.js
 | | ├ utilities.cy.js
 | | ├ viewport.cy.js
 | | ├ waiting.cy.js
 | | └ window.cy.js
 | └ spec.cy.js
 └ support
 | ├ commands.js
 | └ e2e.js
 ├ .env
 ├ .gitignore
 ├ README.md
 ├ cypress.config.js
 ├ package-lock.json
 └ package.json
 ```