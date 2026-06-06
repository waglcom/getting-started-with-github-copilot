## Step 2: Getting work done with Copilot

이전 단계에서는 Copilot으로 프로젝트에 빠르게 익숙해졌습니다. 이제 실제 코드를 개선해 보겠습니다.

**웹사이트에 버그가 있습니다.**

현재 학생은 같은 활동에 두 번 이상 신청할 수 있습니다. Copilot과 함께 원인을 찾고, 깔끔하게 수정한 뒤, 예시 데이터도 늘려 보겠습니다.

### 📖 이론: Copilot이 작동하는 방식

Copilot은 전문적인 동료처럼 생각하면 이해하기 쉽습니다. 좋은 결과를 얻으려면 배경 정보인 **context**와 명확한 지시인 **prompt**를 제공해야 합니다. 또한 모델마다 강점이 조금씩 다를 수 있습니다.

- **Context는 어떻게 제공하나요?** Copilot은 주변 코드와 열린 탭을 자동으로 참고합니다. Chat에서는 파일이나 코드베이스를 명시적으로 지정할 수도 있습니다.
- **어떤 모델을 골라야 하나요?** 이 실습에서는 큰 차이가 나지 않습니다. 모델을 바꿔 비교해 보는 것도 Copilot을 익히는 좋은 방법입니다.
- **Prompt는 어떻게 작성하나요?** 구체적이고 명확하게 작성하세요. 결과가 부족하면 후속 프롬프트로 방향을 다시 알려줄 수 있습니다.

> [!TIP]
> Copilot에는 [chat participants](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet?tool=vscode#chat-participants), [chat variables](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet?tool=vscode#chat-variables), [slash commands](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet?tool=vscode#slash-commands-1), [MCP tools](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)처럼 맥락과 기능을 보강하는 방법도 있습니다.

### :keyboard: 활동: Copilot으로 신청 버그 수정하기

1. **Copilot Chat** 패널을 **Ask mode**로 엽니다. 아래 영어 프롬프트를 그대로 입력합니다.

   의미는 “학생이 같은 활동에 두 번 신청할 수 있는 버그가 어디에서 생겼는지 찾아 달라”입니다. `#codebase`는 Copilot이 저장소 전체에서 관련 코드를 찾도록 돕는 키워드입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > #codebase Students are able to register twice for an activity.
   > Where could this bug be coming from?
   > ```

1. Copilot이 `src/app.py` 파일과 `signup_for_activity` 함수를 언급하는지 확인합니다.

1. `src/app.py` 파일을 엽니다.

   > [!TIP]
   > Chat 응답에 `src/app.py`가 표시되면 파일명을 클릭해 바로 열 수 있습니다.

1. 파일 아래쪽에서 `signup_for_activity` 함수를 찾습니다.

1. 학생을 추가하는 주석 줄을 찾습니다. 그 위에 중복 신청 여부를 확인하는 코드를 넣는 것이 자연스럽습니다.

1. 아래 주석을 입력하고 Enter를 누릅니다. 잠시 후 Copilot이 회색 임시 텍스트로 코드를 제안합니다.

   ```python
   # Validate student is not already signed up
   ```

   <img width="700" alt="Copilot shadow text suggestion in the editor" src="../images/shadow-text.gif" />

1. 제안이 적절하면 `Tab`을 눌러 Copilot 제안을 코드로 적용합니다.

<details>
<summary>예시 결과</summary><br/>

Copilot의 결과는 매번 조금 다를 수 있습니다. 제안이 적절하지 않거나 막히면 아래 예시처럼 진행할 수 있습니다.

```python
@app.post("/activities/{activity_name}/signup")
def signup_for_activity(activity_name: str, email: str):
   """Sign up a student for an activity"""
   # Validate activity exists
   if activity_name not in activities:
      raise HTTPException(status_code=404, detail="Activity not found")

   # Get the activity
   activity = activities[activity_name]

   # Validate student is not already signed up
   if email in activity["participants"]:
     raise HTTPException(status_code=400, detail="Student is already signed up")

   # Add student
   activity["participants"].append(email)
   return {"message": f"Signed up {email} for {activity_name}"}
```

</details>

### :keyboard: 활동: Copilot으로 샘플 데이터 만들기

새 프로젝트를 개발할 때는 테스트에 사용할 현실적인 가짜 데이터가 있으면 편합니다. Copilot은 이런 샘플 데이터를 만드는 데도 유용합니다. 이번에는 **Inline Chat**을 사용합니다.

**Inline Chat**과 **Copilot Chat** 패널은 비슷하지만 범위가 다릅니다. Copilot Chat은 여러 파일이나 탐색형 질문에 적합합니다. Inline Chat은 지금 보고 있는 줄이나 선택한 코드 블록을 빠르게 수정할 때 적합합니다.

1. `src/app.py` 파일 위쪽에서 `activities` 변수를 찾습니다.

1. `activities` 딕셔너리 전체를 마우스로 드래그해 선택합니다. 이렇게 하면 Copilot이 샘플 데이터의 기존 형식을 더 잘 이해할 수 있습니다.

   <img width="700" alt="Highlighted activities dictionary before opening inline chat" src="../images/activities-dict-highlighted.png" />

1. `Ctrl + I`(Windows) 또는 `Cmd + I`(Mac)를 눌러 Copilot Inline Chat을 엽니다.

   > [!TIP]
   > 선택한 코드 위에서 마우스 오른쪽 버튼을 누른 뒤 `Open Inline Chat`을 선택해도 됩니다.

1. 아래 영어 프롬프트를 그대로 입력하고 Enter 또는 오른쪽의 **Send** 버튼을 누릅니다.

   의미는 “스포츠 활동 2개, 예술 활동 2개, 지적 활동 2개를 추가해 달라”입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Add 2 more sports related activities, 2 more artistic
   > activities, and 2 more intellectual activities.
   > ```

1. Copilot이 코드를 수정하면 추가와 삭제가 다른 스타일로 표시됩니다. 변경 내용을 검토한 뒤 괜찮으면 **Keep** 버튼을 누릅니다.

<details>
<summary>예시 결과</summary><br/>

Copilot의 결과가 마음에 들지 않거나 진행이 어려우면 아래 예시를 참고할 수 있습니다.

```python
# In-memory activity database
activities = {
   "Chess Club": {
      "description": "Learn strategies and compete in chess tournaments",
      "schedule": "Fridays, 3:30 PM - 5:00 PM",
      "max_participants": 12,
      "participants": ["michael@mergington.edu", "daniel@mergington.edu"]
   },
   "Programming Class": {
      "description": "Learn programming fundamentals and build software projects",
      "schedule": "Tuesdays and Thursdays, 3:30 PM - 4:30 PM",
      "max_participants": 20,
      "participants": ["emma@mergington.edu", "sophia@mergington.edu"]
   },
   "Gym Class": {
      "description": "Physical education and sports activities",
      "schedule": "Mondays, Wednesdays, Fridays, 2:00 PM - 3:00 PM",
      "max_participants": 30,
      "participants": ["john@mergington.edu", "olivia@mergington.edu"]
   },
   "Basketball Team": {
      "description": "Competitive basketball training and games",
      "schedule": "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
      "max_participants": 15,
      "participants": []
   },
   "Swimming Club": {
      "description": "Swimming training and water sports",
      "schedule": "Mondays and Wednesdays, 3:30 PM - 5:00 PM",
      "max_participants": 20,
      "participants": []
   },
   "Art Studio": {
      "description": "Express creativity through painting and drawing",
      "schedule": "Wednesdays, 3:30 PM - 5:00 PM",
      "max_participants": 15,
      "participants": []
   },
   "Drama Club": {
      "description": "Theater arts and performance training",
      "schedule": "Tuesdays, 4:00 PM - 6:00 PM",
      "max_participants": 25,
      "participants": []
   },
   "Debate Team": {
      "description": "Learn public speaking and argumentation skills",
      "schedule": "Thursdays, 3:30 PM - 5:00 PM",
      "max_participants": 16,
      "participants": []
   },
   "Science Club": {
      "description": "Hands-on experiments and scientific exploration",
      "schedule": "Fridays, 3:30 PM - 5:00 PM",
      "max_participants": 20,
      "participants": []
   }
}
```

</details>

1. 웹사이트를 새로고침하고 새 활동이 보이는지 확인합니다.

### :keyboard: 활동: Copilot으로 작업 설명 만들기

버그를 수정하고 예시 활동도 늘렸습니다. 이제 변경 사항을 커밋하고 GitHub에 푸시합니다.

1. 왼쪽 사이드바에서 `Source Control` 탭을 선택합니다.

   > [!TIP]
   > Source Control 영역에서 파일을 열면 원본 대비 변경 내용이 표시됩니다.

1. `app.py` 파일을 찾습니다. `+` 아이콘을 눌러 변경 사항을 staging area에 추가합니다.

   ![image](../images/staging-changes-icon.png)

1. staged changes 목록 위의 **Message** 입력 상자를 찾습니다. 지금은 아무것도 입력하지 않습니다.

1. **Message** 입력 상자 오른쪽의 **Generate Commit Message** 버튼을 클릭합니다. 반짝이 아이콘으로 표시됩니다.

1. **Commit** 버튼을 누릅니다.

1. **Sync Changes** 버튼을 눌러 변경 사항을 GitHub에 푸시합니다.

1. Mona가 작업을 확인하고 다음 레슨을 안내할 때까지 기다립니다.

<details>
<summary>문제가 있나요?</summary><br/>

피드백이 오지 않으면 다음을 확인하세요.

- `src/app.py` 변경 사항을 `accelerate-with-copilot` 브랜치에 푸시했는지 확인합니다.

</details>
