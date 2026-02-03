import type { JSX } from "react"

export const getQuickStartContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "빠른 시작" : "Quick Start",
  content: (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{isKorean ? "젠프레소 시작하기" : "Getting Started with GenPresso"}</h3>
          <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg p-4 mb-6">
            <p className="text-base text-blue-900 dark:text-blue-200 leading-relaxed">
              {isKorean
                ? "어디서부터 시작할지 고민되나요? 캔버스에 접속하세요. 에이전트에게 \"지금 뭘 할 수 있어?\"라고 물어보세요."
                : "Not sure where to start? Access the canvas. Ask the agent, \"What can you do now?\""}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg bg-muted/20">
            <h4 className="font-semibold mb-2">{isKorean ? "1. 캔버스 진입하기" : "1. Enter Canvas"}</h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "젠프레소에 로그인한 후, 새 캔버스를 생성하거나 기존 캔버스를 열어 캔버스에 진입하세요."
                : "After logging into GenPresso, create a new canvas or open an existing canvas to enter the canvas."}
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg bg-muted/20">
            <h4 className="font-semibold mb-2">{isKorean ? "2. 에이전트 선택하기" : "2. Select an Agent"}</h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "원하는 작업에 맞는 AI 에이전트를 선택하세요. 이미지, 비디오, 3D 등 다양한 에이전트가 준비되어 있습니다."
                : "Select an AI agent that fits your needs. Various agents for image, video, 3D, and more are available."}
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg bg-muted/20">
            <h4 className="font-semibold mb-2">{isKorean ? "3. 에이전트에게 채팅으로 작업 요청하기" : "3. Request Tasks via Chat with Agent"}</h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "채팅 입력창에 요청사항을 입력하고, 에이전트가 당신의 창의적인 작업을 수행하도록 합니다. 명확한 요청사항을 작성할수록 더 나은 결과를 얻을 수 있습니다."
                : "Type your requests in the chat input field and let the agent execute your creative work. The clearer your request, the better results you will get."}
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg bg-muted/20">
            <h4 className="font-semibold mb-2">{isKorean ? "4. 결과물 확인 및 편집" : "4. Review and Edit Results"}</h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "생성된 결과물은 과정이 노드로 펼쳐지며, 수정은 브랜치처럼 이어서 진행할 수 있습니다. 여러 시도를 비교하며 원하는 결과로 다듬어보세요."
                : "Generated results are displayed as nodes showing the process, and edits can be made sequentially like branches. Compare multiple attempts and refine to your desired result."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 not-prose">
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border bg-black">
          {/* @ts-ignore */}
          <video key="quick-start-fast-start" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fast%20Start%20-rdtPIccgaSlQcmxuMiX2vpruzb1ybo.webm" type="video/webm" />
            {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
          </video>
        </div>
      </div>

      <div className="space-y-4 not-prose">
        <h3 className="text-xl font-semibold">{isKorean ? "튜토리얼 다시보기" : "Watch Tutorial Again"}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          {isKorean
            ? "캔버스의 우측 하단 ? 버튼에서 튜토리얼 재시작을 선택하면 다시 볼 수 있습니다."
            : "You can watch the tutorial again by selecting 'Restart Tutorial' from the (?) button in the bottom right corner of the canvas."}
        </p>
        <div className="w-full aspect-video overflow-hidden rounded-lg border border-border bg-black">
          {/* @ts-ignore */}
          <video key="quick-start-tutorial" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tutorial-l9iHjZtgOQqkmqawcOBGxhyuf8RlC8.webm" type="video/webm" />
            {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
          </video>
        </div>
      </div>
    </div>
  ),
})
