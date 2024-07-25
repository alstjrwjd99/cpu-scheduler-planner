# cpu-scheduler-planner
cpu-scheduler 알고리즘을 활용한 계획 프로그램

프로젝트 개요

이 프로젝트는 사용자가 할 일을 입력하고, 선택한 알고리즘에 따라 일정을 작성해주는 웹 애플리케이션입니다. 입력된 정보를 바탕으로 Gantt 차트를 통해 일정을 시각화합니다. 또한, 사용자가 선택한 알고리즘에 따라 일정을 최적화하는 기능을 제공합니다.

기능

1. 할 일 입력 폼
- 할 일 제목: 텍스트 입력
- 기간: 시작 날짜와 종료 날짜 선택
- 우선순위: 선택사항 (우선순위 기반 알고리즘에 필요)
- 기타 세부 사항: 선택사항
 
2. 알고리즘 선택
-	비선점형 스케줄링 알고리즘
-	FCFS (First Come, First Served): 먼저 들어온 애부터 처리
-	SJF (Shortest Job First): 짧은 일부터 처리
-	우선순위 (Priority Scheduling): 우선 순위 위주로 처리
-	선점형 스케줄링 알고리즘 (미래 계획)
-	라운드 로빈 (Round Robin)
-	SRF (Shortest Remaining Time First)
-	다단계 큐 (Multilevel Queue)

3. 일정 시각화
-	Chart.js: Gantt 차트 또는 커스텀 바 차트 구현
-	Styled Components: 스타일링 및 테마 설정

문제 상황

-	문제 상황 인지: 사용자들이 할 일과 기간을 효율적으로 관리할 수 있는 방법을 찾기 어려움.
-	해결하려고 하는 문제: 사용자들이 입력한 일정을 기반으로 효율적인 스케줄을 작성하고, 시각적으로 이해할 수 있는 도구 제공.
-	만들고 싶은 기능: 사용자가 입력한 데이터에 따라 자동으로 일정을 최적화하고 시각화해주는 기능.

해결 방안

-	기술적 접근:
-	비선점형 및 선점형 스케줄링 알고리즘을 구현하여 다양한 스케줄링 문제를 해결.
-	Chart.js를 이용하여 일정을 시각화하고, Three.js와 같은 추가 도구를 통해 3D 시각화 가능.
-	Styled Components와 React Spring을 통해 사용자 인터페이스를 세련되게 디자인하고, 애니메이션 효과를 추가.

기술 스택

- 프론트엔드: Next.js, TypeScript
- 상태 관리: Recoil
-	CSS: Tailwind CSS
-	차트 라이브러리: Chart.js
- 스토리북: UI 컴포넌트 개발 및 문서화
- CI/CD: Vercel
