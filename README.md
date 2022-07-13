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

### 1일차 구현중 고민 범용 컴포넌트의 재사용성

범용 컴포넌트 만들때 스타일 때문에 props가 길어지는게 싫어서 빠른 해결방안을 고민

1. styled() 로 감싸서 커스텀이 필요한 상황에서 사용
   -> 재사용과 키워드가 더떨어지는 느낌이라 생각해서 Pass

2. 자유 css 커스텀 속성 제공
   -> props가 줄어들긴함, 자유로움 단점으로 any 타입이라 코드의 에러 상황 발생 가능성 농후

any 타입을 해결한다면 좋은 해결책이 될 수 있을것 같다. 제네릭 타입으로 any타입 대신 들어오는 값을 css 값으로 할당 가능한 방법을 모색하다 마음이 급해서 미뤘다.
