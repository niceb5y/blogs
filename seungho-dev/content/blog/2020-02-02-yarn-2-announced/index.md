---
categories: News
date: 2020-02-02T23:34:19+09:00
title: Yarn 2 발표
url: /yarn-2-announced/
description: 완전히 새로운 노드 패키지 매니저
featuredImage: ./01.png
---

## TL;DR

Yarn 2가 [발표](https://dev.to/arcanis/introducing-yarn-2-4eh1)되었습니다.

기존의 Yarn과 호환성이 *없*습니다.

## 설치

아직 정식 출시는 아니고, 다음과 같이 설치하실 수 있습니다. 아직까지는 npm을 통한 설치법만 제공되고 있습니다.

```bash
npm install -g yarn@berry
```

한 프로젝트에만 설치를 원하신다면 다음과 같이 설치할 수 있습니다.

```bash
yarn policies set-version berry
```

## node_modules의 문제

![Heaviest object in the universe: node_modules](01.png)

`node_modules`는 이런 저런 문제가 많습니다.
엄청난 파일 수를 자랑하고, 그에 따라 많은 용량을 차지하며, 많은 양의 I/O 부하를 일으키기도 합니다.
Node.js의 창시자인 Ryan Dahl 또한 현재의 node.js 모듈 구조에 대해 [아쉬움](https://www.youtube.com/watch?v=M3BM9TB-8yA)을 표현하기도 했죠.

그래서 그가 개발한 새로운 JavaScript 런타임인 [deno](https://Deno.land)는 URL을 이용한 모듈을 사용합니다.

어쨌든, `node_modules`의 큰 문제중 하나는 Node.js는 패키지가 어디있는지 모른다는 것입니다.
Node.js는 [특정 알고리즘](https://nodejs.org/api/modules.html#modules_all_together)에 따라 매번 패키지를 찾습니다.

매번 `stat`과 `readdir` 시스템콜을 날려야 한다니, 매우 끔찍한 일입니다.

그래서 Yarn 2에서는 기본적으로 `node_modules`대신 다음 방법을 사용합니다.

## Plug'n'Play

Yarn 2에서는 기본적으로 `node_modules`대신 .pnp.js라는 파일을 생성합니다.

패키지를 담은 폴더 대신 .pnp.js 파일에 `패키지 이름` + `패키지 버전` + `패키지의 실제 위치`를 담은 맵과, `패키지 이름` + `패키지 버전` + `패키지의 종속성`을 담은 맵을 저장합니다.

.pnp.js를 사용하는 것을 통해 다음의 이점이 있다고 합니다.

- 단일 텍스트 파일만 생성하므로 설치가 거의 순식간에 이루어짐
- I/O 작업의 감소로 설치가 안정적이 됨
- 완벽한 종속성 트리의 최적화 및 예측가능한 패키지 인스턴스화
- 저장소에 .pnp.js를 커밋하여 처음 yarn install을 실행 할 필요가 없음
- 프로그램 시작 속도 감소

## 호환성

아무래도 기존 모듈의 구조를 변경하다 보니 실행이 매끄럽지 않습니다. 당장 Gatsby로 운영되는 이 블로그에도 적용해보려 했지만, 에러가 발생하더군요. 안정적으로 작동하려면 아무래도 꽤 시간이 필요할 것 같습니다.

호환성에 대해서 더 알아보려면 [여기](https://next.yarnpkg.com/features/pnp#caveats-and-work-in-progress)를 참고하세요.

## 참고

- [Introducing Yarn 2](https://dev.to/arcanis/introducing-yarn-2-4eh1)
- [Yarn 2 Migration Guide](https://next.yarnpkg.com/advanced/migration)
