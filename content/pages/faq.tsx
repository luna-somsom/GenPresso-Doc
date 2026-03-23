import type { JSX } from "react"

export const getFAQContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "자주 묻는 질문" : "Frequently Asked Questions",
  content: (
    <div className="space-y-8">
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {isKorean
            ? "젠프레소 사용 중 자주 묻는 질문들을 확인하실 수 있습니다. 궁금한 점이 있다면 문의하기를 통해 언제든지 연락주세요."
            : "Find answers to frequently asked questions about using GenPresso. If you have any questions, feel free to contact us anytime."}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-16 px-6 border border-dashed border-purple-300 dark:border-purple-700 rounded-2xl bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-950/20 dark:to-violet-950/20">
        <img 
          src={"/character.png"}
          alt="Coming soon"
          className="w-32 h-32 mb-6 object-contain"
        />
        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
          {isKorean ? "준비 중입니다" : "Coming Soon"}
        </h3>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isKorean 
            ? "더 많은 자주 묻는 질문들을 준비하고 있습니다." 
            : "We're preparing more frequently asked questions for you."}
        </p>
      </div>
    </div>
  ),
})
