# Musinsa Coding Test

## 환경설정 🍃

### 1. 리액트 개발 환경 구축하기

보일러 플레이트를 사용할까 고민하다,

기존의 보일러 플레이트가 오래되어 잘 사용안하고 지난 프로젝트에

환경 설정을 팀원가 공유하며 향상된 설정의 좋은 사용감이 떠올라 다시 만들기로 결정

웹팩 나누기와, 린트 X airbnb, TS 까지 진행하기로 결정함

### 2. 웹팩 나눈이유

번들링한 결과 물의 목적이 개발용과 배포용이 다름

_개발_ -> 디버깅에 유리해야함, 데브 서버를 사용, 코드의 난독화 필요X, 어느정도 번들링 시간 걸려도 OK

_배포_ -> 최적화, 빠른 속도가 중요, 난독화를 할수록 안전, 번들링 결과물의 용량을 줄여야함

### 3. ESLint

기본 esLintRecommend 설정으로는 아쉬워서 airbnb로 설정했다,
개발 속도는 내려가지만 컨벤션은 확실히 좋은 느낌이다.
가독성을 위한 설정 (no-use-before-define) 등이나
개발 편의성을 해치는 (react/react-in-jsx-scope) 등 옵션은 해제하거나 warn으로 돌렸다.

## 프로젝트 구조 🦴

### 컴포넌트 개발 폴더 분리

이전부터 component 폴더만 사용 하였을 경우 책임감이 너무 크거나, 컴포넌트 분류,
폴더 depth 등 개발에 어려움을 겪는 상황이 많아서 나만의 기준을 새웠다.
다른 디자인 패턴 사용도 고려를 해봤지만, 참고로 충분하다 생각한다.

    Component -> 하나의 데이터 혹은 동작에 대한 책임을 진다. 주로 데이터 노출과 유저 입력을 담당한다.

    Template -> Component의 집합이다. 복합적인 데이터에 대해 사용이 가능하다. 데이터의 통신이 이뤄 질 수 있다.(고민인 부분 Suspense를 적용하여 로딩 컴포넌트를 적용하고 싶음)

    Page -> Template의 집합이다. 화면의 구조를 나타낸다. 데이터 통신이 일어 날 수 있지만 세세한 조정이 힘들다.

### export vs export default

매번 export default가 명시적으로 파일에서 무엇을 내보내는지 알기 쉽다고 고정적으로 배워서
아쉬운데로 썻는데 답답해서 알아보니 export default를 쓰지 말아야하는 이유도 있다.

1. 디버깅 불리
2. 클래스나 함수가 아니면 한줄이 더 필요.

에어 bnb 린트 권장도 있어서 우선 export default를 사용하는 방향으로 진행했지만  
위 사유 때문에 변동 가능하다 생각한다.

## 일차별 고민 📅

### 1일차 구현중

### 1. 고민 범용 컴포넌트의 재사용성

범용 컴포넌트 만들때 스타일 때문에 props가 길어지는게 싫어서 빠른 해결방안을 고민

1. styled() 로 감싸서 커스텀이 필요한 상황에서 사용
   -> 재사용과 키워드가 더떨어지는 느낌이라 생각해서 Pass

2. 자유 css 커스텀 속성 제공
   -> props가 줄어들긴함, 자유로움 단점으로 any 타입이라 코드의 에러 상황 발생 가능성 농후

any 타입을 해결한다면 좋은 해결책이 될 수 있을것 같다. 제네릭 타입으로 any타입 대신 들어오는 값을 css 값으로 할당 가능한 방법을 모색하다 마음이 급해서 미뤘다.

### 2일차 구현중 고민

### 1. 검색창 토글 상태 관리

상태 관리 라이브러리를 안쓰고 진행하는것이 상태 관련 고민이 더 보일거라 판단했고 이에 대한 고민을 많이 해봤으므로
리액트에서 제공하는 context Api를 이용하여 범용적인 상태를 관리하기로 했다.

검색창 팝업 같은 경우 어제 만들어둔 useBoolean 을 사용하여 상태를 관리하기로 결정했다.
문제는 외부 창을 클릭 하였을때 토글이 꺼지는 기능을 구현 하는점인데

_고민사항_

1. 이벤트 버블링 현상과 이를 막는 event 객체의 stopPropagation 함수를 이용하기로 결정.
   원리는 상위 태그에 토글 노출 여부를 false로 하는 이벤트를 deglation하여 모든 화면에서의 클릭 이벤트를 허용하고 타겟인 인풋에서만 이벤트 전파를 막아 놨다.
   모달 같은경우 배경을 깔아서 쉽게 핸들링 가능하지만, 확장성을 생각했을때 위 방법이 이점이 많다고 판단하였다. 단점은 다른 팝업 토글에서도 전파를 막거나 하는 과정이 요함.

2. 외부가 클릭되었음을 알려면 외부에서 이벤트가 일어난 것이므로 상위에서 이를 관리한다 상위의 클릭 되었음이 하위로 전파 되므로 리렌더링이 크게 일어남
   -> 리팩토링 단계에서 최적화 진행으로 결정

### 2. 데이터 통신처리

fetch를 사용하여 상태를 관리할 경우 컴포넌트 안의 useEffect를 사용하여 로직을 처리하는 번거로운 점이 있다.
데이터 통신의 책임을 덜어내고자 useFetch라는 커스텀 훅을 구현하여 그안에서 컴포넌트 라이프 사이클을 공유하고 useEffect 안에서 로직을 처리했다.

_고민사항_

1. 현재 async 함수가 먹통인 현상이 있다. 원인 분석이 잘 안되어서 내일로 디버깅을 미룸.

2. 데이터를 받아오기전 처리가 되어있지않다 좀 더 섬세한 에러 처리 요함 (에러 바운더리를 적용할까?).

3. 데이터 통신 대기처리가 되어있지 않다. 서스펜스 처리가 필요.

### 3. 제품 카드 컴포넌트 처리

카드 컴포넌트 프롭스가 길어진것이 매우 아쉽다. 코드가 더러워지는것 같아서 이를 어떻게 처리할까 고민중이다.
props는 그냥 받고 분해 할당을 하는방법, 인자별로 묶어 사용하는 방법 등이 필요 할것같다.

제품 정보란의 할인율에 대한 처리, 단독상품에 대한 처리가 필요한다.

_고민사항_

1. 프롭스 줄이기에 대해 고민요망.

2. 제품 정보란의 할인율에 대한 처리, 단독상품에 대한 처리가 필요

3. 제품 이미지가 에러일때 의 처리 -> onError라는 속성을 사용해 보았다. 이벤트 객체가 Synthetic 이벤트라서 타입 관련 정보 살짝 읽느라 늦어짐
   처리한 방식은 에러일 경우 기본 이미지를 가져오는 방식으로 결정.

4. 제품명 2줄 처리 -> -webkit 값을 지정해주어 이를 해결해 보았다. 글자수 와 글자 크기로 값을 계산해서 2줄에서 더는 안나오게 하는 방법을 고민했지만
   이전에 textArea 관련 처리를 하다. 웹킷관련 유용한 속성들이 많다 느껴서 검색을 좀 하였다. 바빠서 그냥 배낄까 하다가 쓰는 부분만 이해하기로 결정했다.

```

display: -webkit-box 속성은 해당 영역을 box 형태로 관리되도록 설정
-webkit-line-clamp 속성은 영역 내의 컨텐츠의 최대 라인수를 결정.
-webkit-box-orient: vertical 속성은 영역 박스의 내의 정렬을 수직으로 설정.

```

5. 무한 스크롤 관련 가벼운 고민

```
 1. 스크롤이 화면의 끝에 도달함 감지할것

 2. 기존데이터 캐시하고 한체 기존 URL의 값을 변형하여 refetch 후 기존 값에 추가.

 3. 현재 데이터가 4까지인 관계로 4번보다 많을경우 이벤트 삭제 혹은 early return
```

이 과정중 훅을 하나 더 만들어서 사용할까 고민된다.

### 4. 코드 스멜 발생

컨텍스트와 Product 카드의 리팩토링이 시급하다 느낀다. 그리고 컴포넌트 설계를 데이터 나 역할 별로 나누면 타입 겹치는 부분이 많아서
중복 줄이기에 이점이 있다 생각하는데 이를 적용하지 못 하고 있다. 해결이 시도해 볼것
