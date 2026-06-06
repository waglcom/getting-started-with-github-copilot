## Step 5: Using GitHub Copilot within a pull request

축하합니다. 이 실습의 코딩 작업은 끝났습니다. 이제 작업을 병합하며 pull request에서 사용할 수 있는 Copilot 기능을 살펴봅니다.

이번 단계에서는 제한적으로 제공되는 두 가지 기능을 다룹니다. 사용할 수 없다면 선택 단계를 건너뛰어도 됩니다.

### 📖 이론: pull request에서 사용하는 GitHub Copilot

#### Copilot pull request summaries

보통은 커밋 메시지와 메모를 다시 읽고 pull request 설명을 직접 작성합니다. 변경이 많거나 커밋 메시지가 들쭉날쭉하면 시간이 걸릴 수 있습니다.

Copilot은 pull request의 변경 사항을 참고해 중요한 내용을 요약하고, 관련 참조까지 포함할 수 있습니다.

#### Copilot code review

작업을 병합하기 전에 한 번 더 검토하는 것은 항상 도움이 됩니다. Copilot에게 1차 리뷰를 요청하면 흔한 실수나 간단한 수정 지점을 빠르게 찾을 수 있습니다.

단, Copilot 리뷰는 보조 수단입니다. 최종 판단은 사용자가 책임 있게 확인해야 합니다.

> [!NOTE]
> 이 기능들은 유료 **GitHub Copilot** 플랜에서만 사용할 수 있습니다. 자세한 내용은 [docs](https://docs.github.com/en/copilot/get-started/plans)를 참고하세요.

### :keyboard: 활동: Copilot으로 PR 요약과 리뷰 사용하기

**Copilot pull request summaries**와 **Copilot code review**는 제한적으로 제공됩니다. 접근 권한이 없다면 선택 단계를 건너뛰세요.

1. 웹 브라우저에서 새 탭을 열고 내 실습 저장소로 이동합니다.

1. 새 pull request 생성을 제안하는 **notification banner**가 보이면 클릭합니다. 보이지 않으면 상단의 **Pull Requests** 탭에서 **create a new pull request**를 선택합니다.

1. 아래 값을 사용해 pull request를 만듭니다.

   - **base:** `main`
   - **compare:** `accelerate-with-copilot`
   - **title:** `Improve student activity registration system`

1. 선택 단계입니다. PR 설명 툴바에서 **Copilot** 아이콘을 클릭한 뒤 **Summary** 작업을 선택합니다. 잠시 후 Copilot이 변경 내용을 바탕으로 설명을 추가합니다.

   <img alt="Copilot summarize button" width="450px" src="../images/copilot-summarize-button.png">

1. 선택 단계입니다. 오른쪽 정보 패널 위쪽의 **Reviewers** 섹션을 찾습니다. **Copilot icon** 옆의 **Request** 버튼을 클릭합니다. Copilot이 pull request에 리뷰 댓글을 남길 때까지 기다립니다.

   <img alt="Copilot review button" width="300px" src="../images/copilot-review-button.png">

   > [!TIP]
   > Copilot 리뷰가 요청되었다는 로그 항목이 표시되는지 확인하세요.

1. 페이지 아래쪽에서 **Merge pull request** 버튼을 누릅니다.

1. Mona가 작업을 확인하고 최종 리뷰를 남길 때까지 기다립니다.
