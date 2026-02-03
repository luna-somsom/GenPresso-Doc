import type { JSX } from "react"

export const getFormatTypesContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "출력 형식" : "Format Types",
  content: (
    <div className="space-y-8">
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {isKorean
            ? "다양한 출력 형식에 대한 자세한 가이드를 준비하고 있습니다."
            : "We're preparing detailed guides for various output formats."}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-16 px-6 border border-dashed border-purple-300 dark:border-purple-700 rounded-2xl bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-950/20 dark:to-violet-950/20">
        <img 
          src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A1%E1%87%81%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB-4pOcLYtF41nFkgZd4ygPXl4vI4meRj.png"}
          alt="Coming soon"
          className="w-32 h-32 mb-6 object-contain"
        />
        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
          {isKorean ? "준비 중입니다" : "Coming Soon"}
        </h3>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isKorean 
            ? "출력 형식에 대한 자세한 가이드는 곧 제공될 예정입니다." 
            : "Detailed guides for output formats will be available soon."}
        </p>
      </div>
    </div>
  ),
})
