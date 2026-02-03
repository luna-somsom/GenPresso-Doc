import type { JSX } from "react"

export const nodeTextContentKo: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      텍스트 노드는 GenPresso에서 언어로 된 아이디어와 의도를 입력하는 기본 작업 단위입니다. 하나의 텍스트 노드에서 작성된 내용은 텍스트 to 이미지, 텍스트 to 비디오, 텍스트 to 3D 생성으로 확장될 수 있으며, 동일한 텍스트를 기준으로 서로 다른 미디어 결과를 실험하고 비교할 수 있습니다. 이를 통해 사용자는 하나의 생각을 다양한 형태의 결과물로 자연스럽게 전개할 수 있습니다.
    </p>

    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">텍스트 to 이미지</h3>
        <p className="text-muted-foreground leading-relaxed">텍스트 프롬프트를 입력하고 원하는 이미지 생성 모델을 선택해 이미지를 생성합니다.</p>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video key="text-t2i-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2i-3sOYmZ27IAIeSJSHLEgBUWAQxwxus4.webm"} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">텍스트 to 비디오</h3>
        <p className="text-muted-foreground leading-relaxed">텍스트 프롬프트를 기반으로 비디오 생성 모델을 선택해 영상 콘텐츠를 생성합니다.</p>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video key="text-t2v-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2v-OUv1zE4HRyLmZrz6ZTIpbd4O6Z4eCW.webm"} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">텍스트 to 3D</h3>
        <p className="text-muted-foreground leading-relaxed">텍스트 프롬프트를 입력한 뒤 원하는 3D 생성 모델을 선택해 3D 오브젝트를 생성합니다.</p>
      </div>
    </div>

    <div className="pt-8 border-t-2 border-border mt-12">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
          <h2 className="text-xl font-bold text-primary">텍스트 노드 활용 Tip</h2>
        </div>
        <ul className="space-y-4 text-muted-foreground leading-relaxed">
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">하나의 텍스트 노드를 서로 다른 생성 모델로 생성해 결과를 비교할 수 있습니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">씬 구성, 카메라 구도, 분위기 등 자주 쓰는 프롬프트를 재사용해 작업 효율을 높일 수 있습니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">긴 프롬프트를 여러 텍스트 노드로 나눠 역할별로 관리하면 수정과 실험이 쉬워집니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">기존 생성 결과에서 효과가 좋았던 문장을 텍스트 노드로 분리해 템플릿처럼 활용할 수 있습니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">에이전트에게 텍스트 노드를 기준으로 요청해 프롬프트 보완이나 확장 작업을 진행할 수 있습니다.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export const nodeTextContentEn: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      A text node is the basic unit of work for entering language-based ideas and intentions in GenPresso. Content written in a single text node can be expanded into text-to-image, text-to-video, and text-to-3D generation, allowing you to experiment and compare different media results based on the same text. This enables users to naturally develop a single thought into various forms of output.
    </p>

    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Text to Image</h3>
        <p className="text-muted-foreground leading-relaxed">Enter a text prompt and select an image generation model to create images.</p>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video key="text-t2i-video-en" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2i-3sOYmZ27IAIeSJSHLEgBUWAQxwxus4.webm"} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Text to Video</h3>
        <p className="text-muted-foreground leading-relaxed">Select a video generation model based on a text prompt to create video content.</p>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video key="text-t2v-video-en" className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2v-OUv1zE4HRyLmZrz6ZTIpbd4O6Z4eCW.webm"} type="video/webm" />
          </video>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Text to 3D</h3>
        <p className="text-muted-foreground leading-relaxed">Enter a text prompt and select a 3D generation model to create 3D objects.</p>
      </div>
    </div>

    <div className="pt-8 border-t-2 border-border mt-12">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
          <h2 className="text-xl font-bold text-primary">Text Node Usage Tip</h2>
        </div>
        <ul className="space-y-4 text-muted-foreground leading-relaxed">
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">You can generate one text node with different models and compare the results.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">Reuse frequently used prompts like scene composition, camera angles, and atmosphere to improve work efficiency.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">Dividing long prompts into multiple text nodes and managing them by role makes editing and experimentation easier.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">You can separate sentences that worked well in previous generation results into text nodes and use them like templates.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 font-bold text-primary text-lg">•</span>
            <span className="pt-1">You can request the agent based on text nodes to supplement or expand prompts.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
