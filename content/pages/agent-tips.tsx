import type { JSX } from "react"

export const getAgentTipsContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "에이전트 작업 Tip" : "Agent Work Tips",
  content: (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {isKorean
            ? "커스텀 에이전트를 효과적으로 설계하고 활용하기 위한 핵심 노하우를 공유합니다."
            : "We share key know-how for effectively designing and using custom agents."}
        </p>
      </div>

      {/* Agent Structure Overview */}
      <div className="p-6 rounded-2xl border border-border bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{isKorean ? "커스텀 에이전트 구조" : "Custom Agent Structure"}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-background/80 border border-border">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Agent Name</span>
            <p className="mt-1 text-sm text-muted-foreground">{isKorean ? "에이전트의 이름" : "Name of the agent"}</p>
          </div>
          <div className="p-4 rounded-xl bg-background/80 border border-border">
            <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">Agent Goal</span>
            <p className="mt-1 text-sm text-muted-foreground">{isKorean ? "에이전트의 목표" : "Goal of the agent"}</p>
          </div>
          <div className="p-4 rounded-xl bg-background/80 border border-border">
            <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide">Agent Focus</span>
            <p className="mt-1 text-sm text-muted-foreground">{isKorean ? "에이전트가 집중할 것" : "What the agent should focus on"}</p>
          </div>
          <div className="p-4 rounded-xl bg-background/80 border border-border">
            <span className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide">Agent Constraint</span>
            <p className="mt-1 text-sm text-muted-foreground">{isKorean ? "에이전트가 하지 말아야 할 것" : "What the agent should not do"}</p>
          </div>
        </div>
      </div>

      {/* Tip 1: Multi-Agent System */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white font-bold text-sm">1</div>
          <h2 className="text-xl font-semibold">{isKorean ? "멀티 에이전트 시스템으로 설계하라" : "Design with Multi-Agent System"}</h2>
        </div>
        <p className="text-muted-foreground pl-11">
          {isKorean 
            ? "하나의 에이전트로 모든 것을 해결하려 하지 마세요. 세부 과업 단위로 에이전트를 나누는 것이 효과적입니다." 
            : "Don't try to solve everything with a single agent. It's more effective to divide agents by specific tasks."}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
          {/* Bad Example */}
          <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <circle cx="12" cy="12" r="10"/>
                <path d="m15 9-6 6"/>
                <path d="m9 9 6 6"/>
              </svg>
              <span className="font-medium text-red-700 dark:text-red-400">{isKorean ? "안좋은 예" : "Bad Example"}</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {isKorean ? "뮤직비디오 에이전트" : "Music Video Agent"}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {isKorean ? "광고 영상 에이전트" : "Ad Video Agent"}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {isKorean ? "브랜드 캠페인 에이전트" : "Brand Campaign Agent"}
              </li>
            </ul>
            <p className="mt-3 text-xs text-red-600 dark:text-red-400">
              {isKorean ? "범위가 너무 넓어 통제가 어려움" : "Scope too broad, difficult to control"}
            </p>
          </div>

          {/* Good Example */}
          <div className="p-4 rounded-xl border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              <span className="font-medium text-green-700 dark:text-green-400">{isKorean ? "권장" : "Recommended"}</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {isKorean ? "화면 구도 에이전트" : "Composition Agent"}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {isKorean ? "조명 연출 에이전트" : "Lighting Agent"}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {isKorean ? "인물 포즈 제어 에이전트" : "Pose Control Agent"}
              </li>
            </ul>
            <p className="mt-3 text-xs text-green-600 dark:text-green-400">
              {isKorean ? "세부 과업 단위로 다루는 게 효과적" : "More effective to handle by specific tasks"}
            </p>
          </div>
        </div>
      </div>

      {/* Tip 2: Clear Work Logic */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white font-bold text-sm">2</div>
          <h2 className="text-xl font-semibold">{isKorean ? "명확한 작업 로직을 설계하라" : "Design Clear Work Logic"}</h2>
        </div>
        <p className="text-muted-foreground pl-11">
          {isKorean 
            ? "에이전트를 작업 프로세스를 담는 구조체라고 생각하세요." 
            : "Think of the agent as a structure that contains the work process."}
        </p>

        <div className="pl-11">
          <div className="p-5 rounded-xl border border-border bg-gradient-to-br from-violet-50/30 to-purple-50/30 dark:from-violet-950/20 dark:to-purple-950/20">
            <h4 className="font-medium mb-4 text-violet-700 dark:text-violet-400">{isKorean ? "예시 구조" : "Example Structure"}</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">1</div>
                <span className="text-sm">{isKorean ? "기획을 먼저 진행" : "Plan first"}</span>
              </div>
              <div className="w-px h-4 bg-violet-300 dark:bg-violet-700 ml-3" />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">2</div>
                <span className="text-sm">{isKorean ? "기획이 완료되면 텍스트 프롬프트로 만들기" : "Convert to text prompt when planning is complete"}</span>
              </div>
              <div className="w-px h-4 bg-violet-300 dark:bg-violet-700 ml-3" />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">3</div>
                <span className="text-sm">{isKorean ? "이미지로 만들기" : "Create as image"}</span>
              </div>
              <div className="w-px h-4 bg-violet-300 dark:bg-violet-700 ml-3" />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">4</div>
                <span className="text-sm">{isKorean ? "이미지를 비디오로 만들기" : "Convert image to video"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="p-5 rounded-2xl border-2 border-amber-200 dark:border-amber-800/50 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-950/30 dark:to-yellow-950/30">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
              <path d="M12 2v8"/>
              <path d="m4.93 10.93 1.41 1.41"/>
              <path d="M2 18h2"/>
              <path d="M20 18h2"/>
              <path d="m19.07 10.93-1.41 1.41"/>
              <path d="M22 22H2"/>
              <path d="m8 22 4-10 4 10"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Pro Tip!</h3>
            <p className="text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
              {isKorean 
                ? "젠프레소에서 에이전트에게 작업을 시키면서 작업 흐름을 파악한 후, \"방금 전에 한 작업을 로직으로 설명해줘\"라고 요청하세요. 에이전트의 답변을 참고해서 새 에이전트를 설정할 수 있습니다." 
                : "After having the agent perform tasks in GenPresso, ask \"Explain the work I just did as logic.\" You can use the agent's response as a reference to set up a new agent."}
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
})
