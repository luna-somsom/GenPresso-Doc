import type { JSX } from "react"

export const getChangelogContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "최신 업데이트" : "Latest Updates",
  content: (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="text-6xl">👨‍💻</div>
      <p className="text-muted-foreground text-center">
        {isKorean ? "준비 중입니다." : "Coming soon."}
      </p>
    </div>
  ),
})
