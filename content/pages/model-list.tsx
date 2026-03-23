import type { JSX } from "react"

export const getModelListContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "지원 AI 모델" : "Supported AI Models",
  content: (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {isKorean 
            ? "GenPresso에서 지원하는 AI 모델 목록입니다. 각 카테고리별로 최신 생성 모델을 제공합니다." 
            : "List of AI models supported by GenPresso. We provide the latest generation models for each category."}
        </p>
      </div>

      <div className="space-y-10">
        {/* Image Generation */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">{isKorean ? "이미지 생성" : "Image Generation"}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {["NANOBANANA Pro", "NANOBANANA", "SEEDREAM 4.5", "Flux2 Flex", "Flux2 Pro", "z-image", "kling o1"].map((model, i) => (
              <div key={i} className="group relative p-4 rounded-xl border border-border bg-card hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500" />
                  <span className="font-medium text-sm">{model}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Generation */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="m22 8-6 4 6 4V8Z"/>
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">{isKorean ? "비디오 생성" : "Video Generation"}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {["VEO 3.1", "SORA 2", "Kling o1", "hailuo 2.3"].map((model, i) => (
              <div key={i} className="group relative p-4 rounded-xl border border-border bg-card hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <span className="font-medium text-sm">{model}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Generation */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.18.05l9.95-6.12a2 2 0 0 0 .94-1.7V7.06a2 2 0 0 0-.88-1.66Z"/>
                <path d="m10 2 8 5-8 5"/>
                <path d="M18 12 10 7"/>
                <path d="m2 8 8 5v9"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold">3D {isKorean ? "생성" : "Generation"}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {["mesh 3D"].map((model, i) => (
              <div key={i} className="group relative p-4 rounded-xl border border-border bg-card hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                  <span className="font-medium text-sm">{model}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          {isKorean 
            ? "모델 목록은 지속적으로 업데이트됩니다. 새로운 모델이 추가되면 자동으로 반영됩니다." 
            : "The model list is continuously updated. New models will be automatically reflected when added."}
        </p>
      </div>
    </div>
  ),
})
