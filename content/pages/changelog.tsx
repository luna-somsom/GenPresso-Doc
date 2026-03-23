import type { JSX } from "react"

export const getChangelogContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "최신 업데이트" : "Latest Updates",
  content: (
    <div className="space-y-8">
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {isKorean
            ? "최신 업데이트 및 개선 사항을 확인하실 수 있습니다."
            : "Check out the latest updates and improvements."}
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
            ? "최신 업데이트 정보는 곧 제공될 예정입니다." 
            : "Latest update information will be available soon."}
        </p>
      </div>
    </div>
  ),
})
