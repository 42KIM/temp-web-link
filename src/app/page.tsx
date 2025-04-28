export default function Home() {
  return (
    <div className="container max-w-screen-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        NOTiU 고객 지원 안내
      </h1>

      <p className="mb-4">저희 NOTiU를 이용해 주셔서 감사합니다.</p>
      <p className="mb-6">
        앱 사용 중 문의사항이나 문제가 발생했을 경우, 아래 방법을 통해 도움을
        받으실 수 있습니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2 border-gray-200">
        지원 요청 방법
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">이메일 문의</h3>
        <p className="mb-2">
          가장 빠르고 효율적인 지원 방법은 이메일입니다. 문제를 자세히 설명하여
          아래 이메일 주소로 보내주시면 확인 후 답변 드리겠습니다.
        </p>
        <p className="text-lg font-semibold text-blue-800">
          지원 이메일 주소:{" "}
          <a
            href="mailto:your-support-email@example.com"
            className="text-blue-600 hover:underline"
          >
            bukubuku.dev@gmail.com
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2 border-gray-200">
        문의 시 포함하면 좋은 정보
      </h2>
      <p className="mb-4">
        더 빠르고 정확한 문제 해결을 위해, 문의 메일을 보내주실 때 아래 정보를
        함께 알려주시면 큰 도움이 됩니다.
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>사용 중인 앱 이름 및 버전: (예: NOTiU v1.2.3)</li>
        <li>
          사용 기기 종류 및 운영체제 버전: (예: iPhone 15 Pro, iOS 17.4 또는
          Galaxy S24, Android 14)
        </li>
        <li>
          겪고 있는 문제에 대한 자세한 설명: 어떤 상황에서, 어떤 행동을 했을 때
          문제가 발생하는지 구체적으로 작성해 주세요. 오류 메시지가 있다면 함께
          알려주세요.
        </li>
        <li>
          예상한 동작과 실제 동작: 원래 어떻게 작동해야 한다고 생각했는데,
          실제로는 어떻게 동작하는지 설명해 주세요.
        </li>
        <li>
          문제 상황의 스크린샷 또는 동영상: 가능하다면 문제 발생 화면을
          캡처하거나 짧은 동영상으로 찍어서 첨부해 주세요.
        </li>
        <li>
          (선택 사항) 사용자 식별 정보: 문제를 확인하기 위해 필요한 경우, 사용자
          계정을 식별할 수 있는 정보 (예: 사용자 이름 또는 고유 ID, 비밀번호 등
          민감 정보 제외)를 알려주실 수 있습니다.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2 border-gray-200">
        개인정보 및 약관
      </h2>
      <p className="mb-4">
        앱 이용과 관련된 개인정보처리방침 및 이용약관은 아래 링크에서 확인하실
        수 있습니다.
      </p>
      <ul className="list-none p-0 mb-6">
        <li className="mb-2">
          <a
            href="https://marsh-wave-ed6.notion.site/1dc1a561484480d19c4bef642e75247d"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            개인정보처리방침
          </a>
        </li>
      </ul>

      <footer className="mt-8 pt-4 border-t border-gray-300 text-center text-gray-500 text-sm">
        <p className="mb-1">
          &copy; 2025 Greenonion Corp. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          *(위에 `[개발사 또는 팀 이름]`과 연도를 맞게 수정하고, 선택 사항
          정보를 추가/삭제하세요.)*
        </p>
      </footer>
    </div>
  );
}
