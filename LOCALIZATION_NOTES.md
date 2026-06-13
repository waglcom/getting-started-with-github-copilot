# Korean Localization Notes

## 목적

이 문서는 GitHub Skills 실습 저장소의 한국어 현지화 작업 내용을 나중에 검토할 수 있도록 남긴 기록입니다.

최우선 기준은 Mona 자동 검증 흐름을 유지하면서, 한국 사용자가 Step 1부터 Step 5까지 문서만 보고 실습을 완주할 수 있게 만드는 것입니다.

## 작업 범위

다음 파일의 본문 품질과 한국어 가독성을 개선했습니다.

- `.github/steps/1-step.md`
- `.github/steps/2-step.md`
- `.github/steps/3-step.md`
- `.github/steps/4-step.md`
- `.github/steps/5-step.md`
- `.github/steps/x-review.md`
- `README.md`
- `src/README.md`
- `src/app.py`
- `src/static/index.html`
- `src/static/app.js`
- `src/static/styles.css`

## 현지화 원칙

- 실습 자동 검증에 쓰이는 문자열과 구조는 보존했습니다.
- 영어 프롬프트는 원문을 유지했습니다.
- 영어 프롬프트 아래에 한국어 의미 설명을 추가했습니다.
- UI 라벨은 실제 화면 기준으로 유지하고, 필요한 곳에 한국어 설명을 보강했습니다.
- 긴 문장은 짧게 나누고, 단계별 행동은 한 번에 하나씩 수행하도록 정리했습니다.
- 선택 단계는 선택임을 명시했습니다.
- 막혔을 때 확인할 항목은 바로 실행 가능한 체크 포인트로 작성했습니다.

## 보존한 검증 의존 요소

다음 요소는 자동 검증 흐름을 깨지 않도록 그대로 유지했습니다.

- 브랜치명 문자열: `accelerate-with-copilot`
- `app.py` 내부 데이터 키: `description`
- 실습 프롬프트 키워드: `#codebase`
- Step 1, Step 2, Step 3, Step 4, Step 5 단계 참조
- `.github/workflows` 내부 로직, name, trigger, enable 체인
- `.github/steps` 파일명과 경로
- API 엔드포인트 경로와 파라미터 이름

## 주요 변경 요약

### Step 문서

- Step 1부터 Step 5까지 한국어로 자연스럽게 재작성했습니다.
- 각 단계에서 사용자가 무엇을 해야 하는지 명확히 보이도록 문장 구조를 단순화했습니다.
- Copilot 프롬프트는 원문을 유지하고, 바로 아래에 한국어 의미와 사용 이유를 추가했습니다.
- `Having trouble?` 영역을 한국어 체크리스트로 정리했습니다.
- Agent Mode, Plan Agent, Pull Request 단계에서 선택 작업과 완료 조건을 명확히 표시했습니다.

### README

- 저장소 시작 안내를 한국어로 정리했습니다.
- 실습 대상, 학습 내용, 예상 시간, 시작 방법을 초보자 기준으로 명확히 작성했습니다.

### 앱 파일

- `src/README.md`를 한국어로 정리했습니다.
- `src/static/index.html`의 사용자 화면 문구를 한국어로 바꿨습니다.
- `src/static/app.js`의 화면 메시지와 주석을 한국어 사용자에게 맞게 다듬었습니다.
- `src/static/styles.css`에 한국어 폰트 fallback을 추가했습니다.
- `src/app.py`는 기능 로직을 바꾸지 않고 문서 문자열과 주석만 정리했습니다.
- `README.md`의 실습 복사 링크가 원본 영어 템플릿이 아니라 이 한국어 템플릿 저장소를 사용하도록 수정했습니다.
- `README.md`의 실습 복사 링크가 새 저장소 기본 이름으로 `skills-getting-started-with-github-copilot`을 사용하도록 확인했습니다.
- Mona의 자동 검증 결과 설명 문구를 한국어로 정리했습니다.
- Mona의 진행 상태 댓글이 외부 영어 템플릿 대신 저장소 내부 한국어 템플릿을 사용하도록 정리했습니다.
- 실습 시작 시 `skills/exercise-toolkit`이 생성하는 영어 랜딩 README를 별도 `Localize landing page` job에서 한국어 랜딩 README로 다시 커밋하도록 정리했습니다.

## 검증 기록

작업 후 다음을 확인했습니다.

- `accelerate-with-copilot` 문자열 존재 확인
- `description` 키 존재 확인
- `#codebase` 문자열 존재 확인
- Step 1부터 Step 5까지 단계 참조 확인
- `.github/workflows` 변경 없음 확인
- `.github/steps` 파일명 변경 없음 확인
- `python -m py_compile src/app.py` 통과
- `git diff --check` 통과
- `README.md`의 `template_owner`가 `waglcom`인지 확인
- `README.md`의 새 저장소 기본 `name` 값이 `skills-getting-started-with-github-copilot`인지 확인
- Mona 진행 상태 템플릿 경로가 `.github/markdown-templates/step-feedback/`를 사용하는지 확인
- 새 실습 저장소의 랜딩 README가 한국어 문구와 실습 이슈 링크를 사용하도록 확인

## 의도적으로 하지 않은 작업

- 실습 복사 링크, Mona 상태 댓글 템플릿 경로, Mona 검증 결과 문구, 랜딩 README 재작성 단계를 제외한 `.github/workflows` 자동화 구조는 수정하지 않았습니다.
- `.github/steps` 파일명과 경로는 변경하지 않았습니다.
- API 엔드포인트, 파라미터 이름, 검증용 문자열은 변경하지 않았습니다.
- Step 2에서 학습용으로 남아 있어야 하는 초기 버그 흐름은 수정하지 않았습니다.
- 실습자가 Copilot으로 직접 구현해야 하는 기능을 미리 구현하지 않았습니다.

## 남은 리스크

- 실제 Codespace UI는 실행 검증하지 않았습니다.
- GitHub Copilot UI 라벨은 GitHub와 VS Code 업데이트에 따라 일부 표현이 바뀔 수 있습니다.
- 문서와 화면 문구는 한국어화했지만, 예시 데이터와 API 응답의 영어 문자열은 검증 안정성을 위해 유지했습니다.

## 최종 판정

Go.

현재 변경은 한국어 사용자 가독성을 개선하면서 Mona 자동 검증 흐름을 유지하는 방향으로 정리되었습니다.
