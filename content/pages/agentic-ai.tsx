import type { JSX } from "react"

export const getAgenticAIContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "에이전트와 작업하기" : "Working with Agents",
  content: (
    <div className="space-y-16">
      <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">{isKorean ? "Agentic AI란?" : "What is Agentic AI?"}</h2>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isKorean
              ? "단순한 정보 제공이나 명령어 응답을 넘어, 사용자가 부여한 목표를 달성하기 위해 스스로 계획을 수립하고, 판단하며, 도구를 활용해 자율적으로 작업을 수행하는 지능형 인공지능입니다."
              : "An intelligent AI that goes beyond simple information provision or command responses, autonomously establishing plans, making judgments, and utilizing tools to achieve user-assigned goals."}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isKorean
              ? "정교한 추론과 반복적인 계획을 사용해 복잡한 다단계 문제를 자율적으로 해결합니다."
              : "It autonomously solves complex multi-step problems using sophisticated reasoning and iterative planning."}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6">
          {isKorean ? "젠프레소에서 에이전트와 협업하는 방식" : "How to Collaborate with Agents in GenPresso"}
        </h2>
          
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          {/* @ts-ignore */}
          <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC-mhwZIN8Xh4jpBu21k5QlP7fGSeQxqi.webm"} type="video/webm" />
            {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
          </video>
        </div>

        <div className="space-y-6">
          <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {isKorean ? "캔버스 작업에 맞는 전문 에이전트 설정하세요" : "Setup Professional Agent for Canvas Work"}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {isKorean
                    ? "에이전트 설정창에서 작업 목적에 맞는 에이전트 템플릿을 선택하거나, 필요에 따라 커스텀 에이전트를 생성합니다."
                    : "Select an agent template that matches your work purpose in the agent setup window, or create a custom agent as needed."}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {isKorean ? "채팅으로 기획부터 생성까지 요청하세요" : "Request Work from Planning to Generation via Chat"}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {isKorean
                    ? "채팅을 통해 기획, 프롬프트 작성, 생성, 수정 등 전체 작업 과정에 대한 요청을 에이전트에게 전달하세요. 에이전트는 캔버스에 입력된 정보와 작업 히스토리를 참고해 협업합니다."
                    : "Request the entire work process—planning, prompt writing, generation, and editing—through chat. The agent collaborates by referencing information entered on the canvas and work history."}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {isKorean ? "노드를 선택하고 의도를 명확히 전달하세요" : "Select Node and Communicate Intent Clearly"}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {isKorean
                    ? "특정 텍스트 노드나 이미지 노드를 선택한 상태에서 요청하세요. 해당 노드를 기준으로 생성·수정 작업이 계속 진행됩니다."
                    : "Request while a specific text or image node is selected. Generation and editing work will continue based on that node."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})
