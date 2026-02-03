import type { JSX } from "react"

export const nodeResultContentKo: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      생성 결과물(아웃풋 노드)은 이미지, 비디오, 3D 형태의 생성 결과를 담는 노드입니다.
    </p>

    <div className="space-y-3">
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">각 아웃풋 노드는 반복 & 재생성이 가능합니다.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">노드의 '+' 버튼을 눌러 다음 생성 작업으로 이어서 진행할 수 있습니다.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">생성에 사용된 프롬프트, 모델 정보 등 메타데이터를 노드 하단에서 확인할 수 있습니다.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">모든 생성 결과물은 갤러리에 자동 저장되어 이후에도 다시 활용할 수 있습니다.</p>
      </div>
    </div>

      <div className="w-full rounded-lg border border-border overflow-hidden">
        <img 
          src="/images/output-node-example.png"
          alt="아웃풋 노드 예시"
          className="w-full h-auto"
        />
      </div>

    <div className="space-y-4 pt-6 border-t border-border">
      <h3 className="text-xl font-semibold">결과물 여러 비율로 재생성</h3>
      <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
        {/* @ts-ignore */}
        <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
          <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/multi2_%E1%84%87%E1%85%B5%E1%84%8B%E1%85%B2%E1%86%AF-m14jMZKi1uO5EsGE1r8X8NsV4kLDBj.webm"} type="video/webm" />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
      </div>
      <div className="space-y-3 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r p-4">
        <p className="text-muted-foreground leading-relaxed">동일한 콘텐츠를 다양한 화면 비율로 재생성할 수 있습니다.</p>
        <p className="text-muted-foreground leading-relaxed">플랫폼과 활용 목적에 맞춰 결과물을 유연하게 활용할 수 있습니다.</p>
      </div>
    </div>
  </div>
)

export const nodeResultContentEn: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      Generated results (output nodes) are nodes that contain generation results in image, video, or 3D format.
    </p>

    <div className="space-y-3">
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">Each output node allows repetition & regeneration.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">You can proceed to the next generation work by pressing the '+' button on the node.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">You can check metadata such as prompts and model information used for generation at the bottom of the node.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
        <p className="text-muted-foreground leading-relaxed">All generated results are automatically saved to the gallery and can be reused later.</p>
      </div>
    </div>

      <div className="w-full rounded-lg border border-border overflow-hidden">
        <img 
          src="/images/output-node-example.png"
          alt="Output Node Example"
          className="w-full h-auto"
        />
      </div>

    <div className="space-y-4 pt-6 border-t border-border">
      <h3 className="text-xl font-semibold">Regenerate Results in Multiple Aspect Ratios</h3>
      <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
        {/* @ts-ignore */}
        <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
          <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/multi2_%E1%84%87%E1%85%B5%E1%84%8B%E1%85%B2%E1%86%AF-m14jMZKi1uO5EsGE1r8X8NsV4kLDBj.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="space-y-3 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r p-4">
        <p className="text-muted-foreground leading-relaxed">You can regenerate the same content in various screen aspect ratios.</p>
        <p className="text-muted-foreground leading-relaxed">Flexibly utilize results according to your platform and intended use.</p>
      </div>
    </div>
  </div>
)
