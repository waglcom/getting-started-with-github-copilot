## Step 1: Hello Copilot

**"GitHub Copilot 시작하기"** 실습에 오신 것을 환영합니다.

이 실습에서는 Mergington High School 학생들이 방과 후 활동에 신청할 수 있는 웹사이트를 사용합니다. GitHub Copilot의 여러 기능을 사용해 프로젝트를 이해하고, 실행하고, 이후 단계에서 코드를 개선합니다.

<img width="600" alt="screenshot of Mergington High School WebApp" src="../images/mergington-high-school-webapp.png" />

### 📖 이론: GitHub Copilot 알아보기

<img width="150" align="right" alt="copilot logo" src="../images/copilot-logo.png" />

GitHub Copilot은 코드를 더 빠르고 적은 노력으로 작성하도록 돕는 AI 코딩 도우미입니다. 반복적인 작업을 줄여 문제 해결과 협업에 더 집중할 수 있게 해 줍니다.

Copilot이 개발자 생산성과 만족도에 미치는 영향은 GitHub 블로그의 [Research: quantifying GitHub Copilot’s impact on developer productivity and happiness](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)에서 더 자세히 볼 수 있습니다.

IDE에서 Copilot은 주로 다음 방식으로 사용합니다.

| Interaction Mode | 설명 | 적합한 상황 |
| ---------------- | ---- | ----------- |
| **Inline suggestions** | 입력 중인 코드 주변 맥락을 바탕으로 한 줄 또는 코드 블록을 제안합니다. | 현재 줄 완성, 짧은 코드 블록 생성 |
| **Inline Chat** | 현재 파일이나 선택한 코드에 초점을 맞춰 대화합니다. | 특정 코드 설명, 작은 수정, 디버깅 |
| **Ask Mode** | 코드베이스, 코딩, 기술 개념에 대한 질문에 답하도록 최적화되어 있습니다. | 프로젝트 이해, 아이디어 탐색, 질문 |
| **Agent Mode** | 대부분의 코딩 작업에 권장되는 기본 모드입니다. Copilot이 파일을 수정하고 도구를 사용하며 작업 완료까지 진행합니다. | 기능 구현, 버그 수정, 여러 파일 변경 |
| **Plan Agent** | 코드를 바꾸기 전에 계획을 만들고 질문을 통해 요구사항을 정리합니다. | 먼저 계획을 검토한 뒤 구현하고 싶을 때 |

Copilot은 `github.com`과 VS Code, JetBrains IDE, Xcode 같은 다양한 개발 환경에서 사용할 수 있습니다.

이번 실습에서는 미리 구성된 개발 환경인 [GitHub Codespace](https://github.com/features/codespaces)에서 VS Code를 사용합니다.

> [!TIP]
> 최신 기능은 [GitHub Copilot Features](https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features) 문서에서 확인할 수 있습니다.

### :keyboard: 활동: Copilot Chat으로 프로젝트 소개 받기

먼저 개발 환경을 열고 Copilot에게 프로젝트 구조를 물어봅니다. 그런 다음 웹사이트가 실행되는지 확인합니다.

1. 아래 버튼을 눌러 **Create Codespace** 페이지를 새 탭으로 엽니다. 기본 설정을 그대로 사용합니다.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

1. **Repository** 필드가 원본 저장소가 아니라 내 실습 저장소인지 확인합니다. 그런 다음 초록색 **Create Codespace** 버튼을 클릭합니다.

   - 올바른 저장소: `/{{full_repo_name}}`
   - 원본 저장소: `/waglcom/getting-started-with-github-copilot`

1. 브라우저에서 Visual Studio Code가 로드될 때까지 기다립니다.

1. 왼쪽 사이드바에서 Extensions 탭을 클릭합니다. `GitHub Copilot`과 `Python` 확장이 설치되어 있고 활성화되어 있는지 확인합니다.

   <img width="350" alt="copilot extension for VS Code" src="../images/copilot-extension-vscode.png" />

   <img width="350" alt="python extension for VS Code" src="../images/python-extension-vscode.png" />

1. VS Code 상단에서 **Toggle Chat icon**을 클릭해 Copilot Chat 패널을 엽니다.

   <img width="150" alt="image" src="../images/toggle-chat-icon.png" />

   > [!NOTE]
   > GitHub Copilot을 처음 사용하는 경우 계속하려면 사용 약관에 동의해야 합니다.

1. 첫 상호작용은 **Ask Mode**에서 진행합니다. Chat 패널이 Ask Mode인지 확인합니다.

   <img width="350" alt="screenshot showing Ask Mode selection in Copilot Chat" src="../images/ask-mode-selection.png" />

1. 아래 영어 프롬프트를 그대로 입력합니다.

   영어 프롬프트를 그대로 사용하는 이유는 실습 결과를 최대한 재현 가능하게 만들기 위해서입니다. 의미는 “이 프로젝트 구조와 실행 방법을 간단히 설명해 달라”입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Please briefly explain the structure of this project.
   > What should I do to run it?
   > ```

   > [!NOTE]
   > Copilot이 제안한 실행 방법을 반드시 따를 필요는 없습니다. 이 실습 환경은 이미 준비되어 있습니다.

1. 왼쪽 사이드바에서 `Run and Debug` 탭을 선택합니다. 그런 다음 **Start Debugging** 아이콘을 누릅니다.

   <img width="300" alt="image" src="../images/run-and-debug-tab.png" />

1. 웹페이지를 브라우저에서 열기 위해 URL과 포트를 찾습니다. 보이지 않으면 아래쪽 패널을 펼치고 **Ports** 탭을 선택합니다.

1. 목록에서 포트 `8000`과 연결된 링크를 찾습니다. 링크 위에 마우스를 올리고 **Open in browser** 아이콘을 선택합니다.

   ![image](../images/open-in-browser-icon.png)

### :keyboard: 활동: Copilot으로 터미널 명령 떠올리기

앱이 실행되는 것을 확인했습니다. 이제 커스터마이징 작업을 시작할 브랜치를 만들고 GitHub에 게시합니다.

1. VS Code 아래쪽 패널에서 **Terminal** 탭을 선택합니다. 오른쪽의 `+` 버튼을 눌러 새 터미널을 만듭니다.

   > [!NOTE]
   > 기존 디버그 세션은 웹 애플리케이션을 실행 중입니다. 새 터미널을 만들면 실행 중인 앱을 멈추지 않고 명령을 입력할 수 있습니다.

1. 새 터미널에서 `Ctrl + I`(Windows) 또는 `Cmd + I`(Mac)를 눌러 **Copilot's Terminal Inline Chat**을 엽니다.

1. 아래 영어 프롬프트를 그대로 입력합니다.

   의미는 “`accelerate-with-copilot`이라는 새 Git 브랜치를 만들고 게시하는 방법을 알려 달라”입니다. 브랜치명은 자동 검증에 사용되므로 정확히 유지해야 합니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Hey copilot, how can I create and publish a new Git branch called "accelerate-with-copilot"?
   > ```

   > [!TIP]
   > Copilot의 답이 원하는 내용과 다르면 이어서 더 구체적으로 요청할 수 있습니다. Copilot은 같은 대화의 이전 내용을 기억합니다.

1. Copilot이 제안한 터미널 명령을 삽입하려면 `Run` 버튼을 누릅니다.

1. 잠시 후 VS Code 왼쪽 아래 상태 표시줄을 확인합니다. 현재 브랜치가 `accelerate-with-copilot`이면 Step 1 완료입니다.

1. 브랜치가 GitHub에 푸시되면 Mona가 자동으로 확인을 시작합니다. 댓글에서 진행 상황과 다음 레슨 안내를 기다립니다.

<details>
<summary>문제가 있나요?</summary><br/>

피드백이 오지 않으면 다음을 확인하세요.

- 브랜치 이름이 정확히 `accelerate-with-copilot`인지 확인합니다. 앞뒤에 다른 문자가 붙으면 안 됩니다.
- 브랜치가 내 저장소에 게시되었는지 확인합니다.

</details>
