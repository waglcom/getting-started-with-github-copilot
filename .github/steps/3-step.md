## Step 3: Engage Hyperdrive - Copilot Agent Mode

### 📖 이론: Copilot Agent Mode란?

Copilot [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)는 AI 지원 코딩의 다음 단계입니다. 사용자의 요청을 받아 여러 단계의 코딩 작업을 자율적으로 수행하는 동료 프로그래머처럼 동작합니다.

Agent Mode는 컴파일 오류, 린트 오류, 터미널 출력, 테스트 결과를 확인할 수 있습니다. 문제가 있으면 작업이 완료될 때까지 수정 루프를 반복할 수 있습니다.

#### Agent Mode 한눈에 보기

| 항목 | Agent Mode |
| ---- | ---------- |
| 자율성과 계획 | 큰 요청을 여러 작업으로 나누고 완료될 때까지 반복합니다. |
| 맥락 수집 | 현재 맥락을 사용하고, 필요하면 관련 파일을 추가로 찾습니다. |
| 도구 사용 | 필요한 도구를 자동으로 선택해 실행합니다. `#codebase` 같은 멘션으로 도구 사용을 직접 유도할 수도 있습니다. |
| 승인과 안전 장치 | 민감한 작업은 실행 전에 승인을 요구할 수 있습니다. |

#### Agent Mode Tools

Agent Mode는 요청을 처리하면서 특수 작업을 위해 도구를 사용합니다. 예시는 다음과 같습니다.

- 프롬프트를 해결하는 데 필요한 파일 찾기
- 웹페이지 내용 가져오기
- 테스트 또는 터미널 명령 실행

> [!TIP]
> VS Code에는 기본 제공 도구가 많습니다. 더 전문적인 기능이 필요하면 **MCP tools**를 추가할 수도 있습니다.
>
> 자세한 내용은 [MCP servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)와 [GitHub MCP Server](https://github.com/github/github-mcp-server)를 참고하세요.

이제 **Agent Mode**를 사용해 봅니다.

### :keyboard: 활동: Copilot으로 새 기능 추가하기

현재 웹사이트는 활동 목록을 보여주지만, 각 활동에 신청한 학생 목록은 보여주지 않습니다.

Copilot에게 활동 카드 아래에 신청한 학생 목록을 표시하도록 요청합니다.

1. Copilot Chat 창 아래쪽의 드롭다운을 사용해 **Agent** mode로 전환합니다.

   <img width="350" alt="image" src="../images/agent-mode-dropdown.png" />

1. 웹페이지와 관련된 파일을 엽니다. 그런 다음 각 편집기 창이나 파일을 Chat 패널로 드래그해 Copilot에게 맥락으로 제공합니다.

   - `src/static/app.js`
   - `src/static/index.html`
   - `src/static/styles.css`

   > [!NOTE]
   > 파일을 맥락으로 추가하는 것은 선택 사항입니다. 생략해도 Agent Mode는 `#codebase` 같은 도구로 관련 파일을 찾을 수 있습니다. 다만 큰 코드베이스에서는 관련 파일을 직접 지정하면 결과가 더 안정적입니다.

   <img width="400" alt="image showing files added to context" src="../images/files-added-to-context.png" />

   > [!TIP]
   > **Add Context...** 버튼으로 GitHub issue나 터미널 결과 같은 다른 맥락도 추가할 수 있습니다.

1. 아래 영어 프롬프트를 그대로 입력합니다. Copilot이 변경 제안을 만들고 적용할 때까지 기다립니다.

   의미는 “활동 카드에 참가자 섹션을 추가하고, 이미 신청한 참가자를 글머리표 목록으로 예쁘게 표시해 달라”입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Hey Copilot, can you please edit the activity cards to add a participants section.
   > It will show what participants that are already signed up for that activity as a bulleted list.
   > Remember to make it pretty!
   > ```

1. Copilot이 작업을 마치면 변경 사항을 직접 검토합니다.

   **Keep** 버튼을 사용해 모든 변경을 적용하거나, 파일별로 확인하며 변경마다 적용 여부를 결정할 수 있습니다.

   <img width="900" alt="buttons to keep or discard changes" src="../images/review-changes-buttons.png" />

1. 변경을 적용하기 전에 웹사이트를 확인합니다. 활동 카드에 참가자 정보가 보이는지 확인하세요.

   앱을 다시 시작하거나 페이지를 새로고침해야 할 수 있습니다.

   <img width="350" alt="Activity card with participant info" src="../images/activity-card-with-participants.png" />

   > [!NOTE]
   > Copilot 결과는 매번 다를 수 있으므로 카드 모양이 예시 이미지와 완전히 같지 않아도 괜찮습니다.

<details>
<summary>문제가 있나요?</summary><br/>

웹사이트가 제대로 보이지 않으면 다음을 확인하세요.

- VS Code Debugger를 다시 시작해 최신 웹사이트가 제공되는지 확인합니다.
- URL을 잊었거나 창을 닫았다면 Step 1의 포트 `8000` 열기 안내를 다시 확인합니다.
- 브라우저에서 강력 새로고침을 하거나 비공개 창에서 열어 최신 파일을 받도록 합니다.

</details>

1. 결과가 괜찮으면 변경 패널에서 각 제안을 확인하고 **Keep**을 눌러 적용합니다.

   > [!TIP]
   > 변경을 바로 적용할 수도 있고, 직접 수정할 수도 있습니다. Chat에 추가 지시를 보내 더 다듬을 수도 있습니다.

### :keyboard: 활동: Agent Mode로 unregister 버튼 추가하기

이번에는 조금 더 열린 요청을 사용해 웹 애플리케이션에 기능을 추가합니다.

원하는 결과가 나오지 않으면 다른 모델을 사용하거나 후속 프롬프트로 더 구체적으로 지시하세요.

1. Copilot이 계속 **Agent** mode인지 확인합니다.

   <img width="250" alt="agent mode" src="../images/agent-mode-dropdown.png" />

1. **Tools** 아이콘을 클릭합니다. Agent Mode에서 사용할 수 있는 도구 목록을 살펴봅니다.

   <img width="250"  alt="tools icon" src="../images/tools-icon.png" />

1. 아래 영어 프롬프트를 그대로 입력합니다.

   의미는 “각 참가자 옆에 삭제 아이콘을 추가하고 글머리표는 숨기며, 아이콘을 누르면 해당 참가자가 활동에서 등록 취소되도록 해 달라”입니다. `#codebase`는 관련 파일을 더 안정적으로 찾기 위해 포함합니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > #codebase Please add a delete icon next to each participant and hide the bullet points.
   > When clicked, it will unregister that participant from the activity.
   > ```

   `#codebase` 도구는 Copilot이 현재 작업과 관련된 파일과 코드 조각을 찾도록 돕습니다.

   > [!NOTE]
   > 이 실습에서는 결과 재현성을 높이기 위해 `#codebase`를 명시적으로 사용합니다. 선택적으로 `#codebase` 없이도 시도해 보고 Agent Mode가 스스로 더 넓은 맥락을 수집하는지 관찰할 수 있습니다.

1. Copilot이 끝나면 코드 변경과 웹사이트 결과를 확인합니다. 결과가 마음에 들면 **Keep** 버튼을 누릅니다. 그렇지 않으면 Chat에 피드백을 보내 다시 다듬습니다.

   > [!NOTE]
   > 웹사이트에서 변경이 보이지 않으면 Debugger를 다시 시작해야 할 수 있습니다.

1. 등록 흐름에서 남은 버그를 수정하도록 Copilot에게 요청합니다.

   > [!TIP]
   > 직접 등록 흐름을 테스트해 보세요. 그러면 변경 전후 동작을 더 명확히 이해할 수 있습니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > I've noticed there seems to be a bug.
   > When a participant is registered, the page must be refreshed to see the change on the activity.
   > ```

   의미는 “참가자를 등록한 뒤 페이지를 새로고침해야만 활동 카드에 변경이 보이는 버그가 있다”입니다.

1. Copilot이 끝나면 웹사이트에서 등록 흐름을 다시 테스트합니다.

1. 결과가 괜찮으면 **Keep**을 누릅니다. 부족하면 Copilot에게 추가 피드백을 제공합니다.

1. 모든 변경 사항을 `accelerate-with-copilot` 브랜치에 **Commit**하고 **push**합니다.

1. Mona가 작업을 확인하고 다음 단계 안내를 남길 때까지 기다립니다.
