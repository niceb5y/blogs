---
categories: Awesome
date: 2020-02-03T01:47:33+09:00
title: JetBrains Mono - JetBrains의 새로운 고정폭 폰트
url: /jetbrains-mono-font/
description: JetBrains IDE의 새로운 기본 폰트
featuredImage: ../../assets/image.png
---

## JetBrains Mono

```js
console.log('JetBrains Mono')
```

JetBrains가 직접 폰트를 제작하여 출시하였습니다. 공식 사이트는 [여기](https://www.jetbrains.com/lp/mono/), 저장소는 [여기](https://github.com/JetBrains/JetBrainsMono).

JetBrains IDE의 최신 버전에 기본적으로 포함되니, JetBrain IDE만 사용하시는 분이라면 따로 다운로드 받으실 필요가 없습니다.

개인적으로는 마음에 들어서 여기저기 설정하여 사용하는 중입니다.

## 웹 폰트로 사용하기

[jsDelivr](https://www.jsdelivr.com)를 사용하면 대략 다음과 같이 사용할 수 있습니다.

```css
@font-face {
  font-family: 'JetBrains Mono';
  src: local('JetBrains Mono'),
    url('https://cdn.jsdelivr.net/gh/jetbrains/jetbrainsmono@1.0.2/web/woff2/JetBrainsMono-Regular.woff2')
      format('woff2'), url('https://cdn.jsdelivr.net/gh/jetbrains/jetbrainsmono@1.0.2/web/woff/JetBrainsMono-Regular.woff')
      format('woff'),
    url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/ttf/JetBrainsMono-Regular.ttf')
      format('truetype'), url('https://cdn.jsdelivr.net/gh/jetbrains/jetbrainsmono@1.0.2/web/eot/JetBrainsMono-Regular.eot')
      format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

code {
  -webkit-font-feature-settings: 'liga' on, 'calt' on;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'JetBrains Mono';
}
```

~~조만간 [Google Fonts](https://fonts.google.com)에 올라오지 않을까 싶기도 하고요.
이미 [이슈](https://github.com/google/fonts/issues/2308)는 올라왔으니.~~

## 2020-12-18 업데이트

Google Fonts에 추가되었습니다.
https://fonts.google.com/specimen/JetBrains+Mono
