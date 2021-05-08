---
categories: News
date: 2021-04-03T22:56:47+09:00
title: Husky v5 라이선스의 문제
url: /problem-with-husky-v5-license/
description: 라이선스 문제가 있었는데요, 없었습니다.
featuredImage: ../../assets/image.png
---

[Husky](https://github.com/typicode/husky)는 Node 환경에서 git hook을 사용하는데 가장 널리 사용되는 프레임워크입니다.

그런데 이 Husky가 [v5로 업데이트](https://dev.to/typicode/what-s-new-in-husky-5-32g5)되면서 일정 기간 동안 [Parity Public License](https://paritylicense.com)로 라이선스가 적용된다는 발표가 있었습니다. 해당 라이선스가 적용된 저작물을 통해 어떤 저작물을 개발한 경우, 똑같이 해당 저작물을 공개하라는 의미입니다. 그리고 Husky 프로젝트의 스폰서에게는 early access를 제공하겠다고 발표를 했습니다. 결국 상업 프로젝트에서 husky v5를 사용하려면 프로젝트의 스폰서가 되던가, 해당 코드를 공개해야 합니다. 물론 대다수는 그냥 v4를 사용하겠지만요.

물론 오픈소스 프로젝트를 유지 보수하는 일은 공짜가 아니며, 많은 시간과 노력을 필요로 하는 일입니다. 다만 라이선스 변경이 있었음에도 불구하고 v5를 기본 값으로 제공했기 때문에, 실수로 새로 husky를 설정하거나 패키지를 업데이트하는 과정에서 본인도 모르는 라이선스 위반을 일으킬 수 있는 가능성이 있었죠.

그리고 며칠 전, [Husky v6가 출시](https://github.com/typicode/husky/releases/tag/v6.0.0)되었습니다. 다시 MIT 라이선스를 달고서 말이죠. 다행히 라이선스 문제가 해소되었지만, v4와 v6은 구조적으로 많은 차이가 있기 때문에, 마이그레이션을 진행할 필요가 있습니다. 다행히 조금 더 쉽게 마이그레이션 할 수 있도록 도구를 제공하니, [링크](https://github.com/typicode/husky-4-to-6)를 확인해보시면 되겠습니다.
개인적으로는 해당 도구를 사용한 뒤에도 직접 수정이 필요했던 부분이 있었습니다.

어쨌든 이렇게 husky의 라이선스 문제는 일단락되었습니다만, 앞으로도 패키지 종속성을 업데이트할 땐 조금 더 신중하게 진행해야겠다고 느꼈습니다.
