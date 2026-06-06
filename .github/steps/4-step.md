## Step 4: Plan your implementation with the Planning Agent

지난 단계에서는 Agent Mode로 빠르게 기능을 추가했습니다.

이번에는 한 번 속도를 늦춥니다. 먼저 테스트 접근 방식을 계획한 뒤 구현으로 넘깁니다. 이렇게 하면 요구사항이 더 분명해지고 결과를 검토하기 쉬워집니다.

### 📖 이론: Copilot Plan Agent란?

Copilot [Plan Agent](https://code.visualstudio.com/docs/copilot/agents/planning)는 코드를 변경하기 전에 해결 방안을 설계하도록 돕습니다.

바로 파일을 수정하지 않습니다. 대신 요청을 조사하고, 필요한 질문을 하고, 검토할 수 있는 구현 계획을 작성합니다.

#### Plan Agent 한눈에 보기

| 항목 | Plan Agent |
| ---- | ---------- |
| 목적 | 코딩을 시작하기 전에 구조화된 구현 계획을 만듭니다. |
| 맥락 수집 | 읽기 전용 조사로 요구사항과 제약을 이해합니다. |
| 협업 방식 | 확인 질문을 하고, 답변을 반영해 계획을 업데이트합니다. |
| 반복 | 구현 전에 계획을 여러 번 다듬을 수 있습니다. |
| 안전성 | 계획을 승인하고 **Agent Mode**로 넘기기 전에는 파일을 수정하지 않습니다. |
| 구현 전달 | **Start implementation** 버튼으로 승인된 계획을 **Agent Mode**에 넘겨 구현을 시작합니다. |

> [!TIP]
> 처음에는 높은 수준의 요청으로 시작하세요. 이후 프롬프트에서 제약 조건과 세부 요구사항을 추가하면 됩니다.

### ⌨️ 활동: 백엔드 테스트 계획 및 구현하기

현재 백엔드에는 테스트 커버리지가 없습니다. **Plan Agent**로 계획을 만들고, 질문에 답하고, 구현을 시작합니다.

1. **Copilot Chat** 패널을 열고 **Plan Agent**로 전환합니다.

   <img width="350" alt="image" src="../images/plan-mode-dropdown.png" />

1. 아래 영어 프롬프트를 그대로 입력합니다.

   의미는 “별도의 `tests` 디렉터리에 FastAPI 백엔드 테스트를 추가하고 싶다”입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > I want to add backend FastAPI tests in a separate tests directory.
   > ```

1. Copilot이 첫 계획을 만들 때까지 기다립니다. 질문이 나오면 아는 범위에서 답합니다.

   > [!NOTE]
   > 처음부터 완벽할 필요는 없습니다. 계획은 이후 프롬프트로 계속 다듬을 수 있습니다.

1. 필요하면 후속 프롬프트로 계획을 더 구체화합니다.

   예시는 다음과 같습니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Let's use the AAA (Arrange-Act-Assert) testing pattern to structure our tests
   > ```

   의미는 “테스트를 Arrange-Act-Assert 패턴으로 구성하자”입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Make sure we use `pytest` and add it to `requirements.txt` file
   > ```

   의미는 “`pytest`를 사용하고 `requirements.txt`에 추가하자”입니다.

1. 제안된 계획을 검토합니다. 괜찮으면 **Start implementation**을 클릭해 **Agent Mode**로 넘깁니다.

   <img width="350" alt="image" src="../images/plan-mode-start-implementation.png" />

   버튼을 누르면 **Plan**에서 **Agent Mode**로 전환됩니다. 이 시점부터 Copilot은 이전처럼 코드베이스를 수정할 수 있습니다.

1. Copilot이 계획을 구현하는 과정을 지켜봅니다. 명령 실행이나 가상 환경 생성 같은 도구 사용 권한을 요청하면, 내용을 확인한 뒤 승인합니다.

1. 변경 사항을 검토합니다. 테스트가 성공적으로 실행되는지 확인합니다.

   **목표: 다음 단계로 넘어가기 전에 모든 테스트가 통과해야 합니다.**

   > [!NOTE]
   > Agent Mode가 한 번에 완료할 수도 있고, 후속 지시가 필요할 수도 있습니다.

1. 모든 변경 사항을 `accelerate-with-copilot` 브랜치에 **Commit**하고 **push**합니다.

1. Mona가 작업을 확인하고 다음 단계를 안내할 때까지 기다립니다.

<details>
<summary>문제가 있나요?</summary><br/>

- 테스트가 실행되지 않았다면 Copilot에게 테스트를 실행해 달라고 요청합니다.
- `requirements.txt`에 `pytest`가 추가되었는지 확인합니다.
- `tests/` 디렉터리가 만들어졌는지 확인합니다.

</details>
