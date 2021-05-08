---
categories: News
date: 2020-05-14T23:39:01+09:00
title: Deno 1.0 출시
url: /deno-v1-released/
description: JS와 TS를 위한 안전한 런타임.
featuredImage: ./01.png
---

<div style="width:256px; height:256px;">
  <img src="01.png" />
</div>

Node.js를 제작했었던, Ryan Dahl이 새롭게 만든 JS/TS 런타임인 [Deno](https://deno.land/)의 1.0 버전의 출시가 되었다는 소식입니다. [[공식 블로그 포스트]](https://deno.land/v1)

<iframe width="560" height="315" src="https://www.youtube.com/embed/M3BM9TB-8yA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Deno는 Node.js와는 꽤 많은 차이점이 있습니다. 애초에 태생 자체가 Node.js에서 아쉬웠던 것들을 보완하고자 만들어졌기 때문이고요.

아무래도 오랫동안 Node.js와 그 생태계가 성숙했기 때문에 Deno의 점유율이 앞서는 것은 어려울 것 같지만, Deno는 꽤 매력적인 설계를 갖고 있습니다. 웹과 호환되는 (ECMAScript 식) 모듈 시스템, 포맷터나 번들러의 통합, 빌트-인 타입스크립트, 런타임과 분리된 표준 라이브러리 등이요. 로고도 더 귀엽습니다.

1.0 버전이 출시되면서 API나 런타임의 안정성을 어느 정도 기대할 수 있겠습니다. 예전에 Deno를 한번 사용해 보았을 때는 CLI 명령어에 버그가 있어 제대로 작동을 하지 않았던 경험이 있거든요. [그리고 그 버그는 제가 고쳤습니다](https://github.com/denoland/deno/pull/3906) (생색).
