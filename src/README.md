# Mergington High School Activities API

학생들이 방과 후 활동을 조회하고 신청할 수 있는 간단한 FastAPI 애플리케이션입니다.

## 기능

- 등록 가능한 방과 후 활동 목록 조회
- 원하는 활동에 학생 이메일로 신청

## 시작하기

1. 의존성을 설치합니다.

   ```bash
   pip install fastapi uvicorn
   ```

2. 애플리케이션을 실행합니다.

   ```bash
   python app.py
   ```

3. 브라우저에서 다음 주소를 엽니다.

   - API 문서: http://localhost:8000/docs
   - 대체 API 문서: http://localhost:8000/redoc

## API 엔드포인트

| Method | Endpoint                                                          | 설명 |
| ------ | ----------------------------------------------------------------- | ---- |
| GET    | `/activities`                                                     | 모든 활동의 세부 정보와 현재 참가자 수를 조회합니다. |
| POST   | `/activities/{activity_name}/signup?email=student@mergington.edu` | 특정 활동에 학생을 신청합니다. |

## 데이터 모델

이 애플리케이션은 의미 있는 식별자를 사용하는 간단한 데이터 모델로 구성되어 있습니다.

1. **Activities**: 활동 이름을 식별자로 사용합니다.

   - Description
   - Schedule
   - Maximum number of participants allowed
   - List of student emails who are signed up

2. **Students**: 이메일을 식별자로 사용합니다.

   - Name
   - Grade level

모든 데이터는 메모리에 저장됩니다. 서버를 다시 시작하면 데이터가 초기 상태로 돌아갑니다.
