import type { JSX } from "react"

export const getModelListContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "지원 AI 모델" : "Supported AI Models",
  content: (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {isKorean 
            ? "GenPresso에서 지원하는 AI 모델 목록입니다. 각 카테고리별로 최신 생성 모델을 제공합니다." 
            : "List of AI models supported by GenPresso. We provide the latest generation models for each category."}
        </p>
      </div>

      <div className="space-y-6">
        {/* Image Generation */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{isKorean ? "이미지 생성" : "Image Generation"}</h3>
                <p className="text-xs text-muted-foreground">Text to Image / Image to Image</p>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
              <span className="text-xs font-medium text-rose-600 dark:text-rose-400">8 models</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {["NANOBANANA Pro", "NANOBANANA 2", "NANOBANANA", "SEEDREAM 4.5", "Flux2 Flex", "Flux2 Pro", "z-image", "kling o1"].map((model, i) => (
                <div key={i} className="group px-3 py-2 rounded-lg border border-border bg-background hover:border-rose-500/50 hover:bg-rose-500/5 transition-all duration-200 cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:animate-pulse" />
                    <span className="text-sm font-mono font-medium">{model}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Generation */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m22 8-6 4 6 4V8Z"/>
                  <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{isKorean ? "비디오 생성" : "Video Generation"}</h3>
                <p className="text-xs text-muted-foreground">Text to Video / Image to Video</p>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">4 models</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {["VEO 3.1", "SORA 2", "Kling o1", "hailuo 2.3"].map((model, i) => (
                <div key={i} className="group px-3 py-2 rounded-lg border border-border bg-background hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-200 cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-pulse" />
                    <span className="text-sm font-mono font-medium">{model}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Generation */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.18.05l9.95-6.12a2 2 0 0 0 .94-1.7V7.06a2 2 0 0 0-.88-1.66Z"/>
                  <path d="m10 2 8 5-8 5"/>
                  <path d="M18 12 10 7"/>
                  <path d="m2 8 8 5v9"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">3D {isKorean ? "생성" : "Generation"}</h3>
                <p className="text-xs text-muted-foreground">Image to 3D / Text to 3D</p>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">1 model</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {["mesh 3D"].map((model, i) => (
                <div key={i} className="group px-3 py-2 rounded-lg border border-border bg-background hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-200 cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-pulse" />
                    <span className="text-sm font-mono font-medium">{model}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="flex items-center gap-3 p-4 rounded-lg border border-dashed border-border bg-muted/20">
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <path d="M12 8v4l3 3"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">
          {isKorean 
            ? "모델 목록은 지속적으로 업데이트됩니다. 새로운 모델이 추가되면 자동으로 반영됩니다." 
            : "The model list is continuously updated. New models will be automatically reflected when added."}
        </p>
      </div>
    </div>
  ),
})
