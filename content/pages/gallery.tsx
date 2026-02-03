import type { JSX } from "react"

export const getGalleryContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "갤러리" : "Gallery",
  content: (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
          {isKorean
            ? "젠프레소에서 생성된 모든 결과물을 한곳에 모아 관리할 수 있는 공간입니다. 이미지·비디오·3D 등 다양한 생성 결과를 유형별로 정리하고, 필요한 작업을 빠르게 찾고 다시 활용할 수 있도록 설계되었습니다."
            : "A space to manage all results generated in GenPresso in one place. Various generation results such as images, videos, and 3D are organized by type, allowing you to quickly find and reuse necessary work."}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{isKorean ? "주요 기능" : "Key Features"}</h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean ? "생성된 모든 결과물 자동 저장" : "Automatic saving of all generated results"}
            </p>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean ? "북마크를 통한 중요 결과물 관리" : "Manage important results through bookmarks"}
            </p>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean ? "결과물 다운로드 지원" : "Support for downloading results"}
            </p>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean ? "타입·모델·생성 시점 기준 필터링 및 검색" : "Filtering and search by type, model, and generation time"}
            </p>
          </li>
          <li className="flex gap-3">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">✓</div>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean ? "선택한 결과물을 캔버스로 다시 불러와 이어서 작업 가능" : "Reload selected results to canvas and continue working"}
            </p>
          </li>
        </ul>
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="text-xl font-semibold mb-6">{isKorean ? "갤러리 활용 방법" : "How to Use Gallery"}</h3>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{isKorean ? "1. 결과물을 다시 캔버스로 불러오기" : "1. Reload Results to Canvas"}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean
                ? "갤러리에서 원하는 결과물을 선택해 캔버스로 다시 불러올 수 있습니다. 이전에 생성한 이미지나 비디오를 활용해 새로운 작업을 이어갈 수 있으며, 캔버스 흐름 안에서 자연스럽게 연결하여 창작 과정을 확장할 수 있습니다."
                : "You can select desired results from the gallery and reload them to the canvas. You can use previously generated images or videos to continue new work, and naturally connect them within the canvas flow to expand your creative process."}
            </p>
            <div className="w-full aspect-video overflow-hidden rounded-lg border border-border bg-muted">
              {/* @ts-ignore */}
              <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%80%E1%85%A2%E1%86%AF%E1%84%85%E1%85%A5%E1%84%85%E1%85%B5-tGC4k4B6lyLqElXHe1RVa9xMTPNeRX.webm" type="video/webm" />
                {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
              </video>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{isKorean ? "2. 캔버스에서 원하는 작업만 필터링" : "2. Filter Desired Work from Canvas"}</h4>
            <p className="text-muted-foreground leading-relaxed">
              {isKorean
                ? "갤러리의 강력한 필터링 기능을 활용해 타입·모델·생성 시점 등 다양한 기준으로 결과물을 정렬할 수 있습니다. 원하는 조건으로 빠르게 찾아낸 결과물을 다시 캔버스로 불러와 효율적으로 작업할 수 있습니다."
                : "Use the powerful filtering features of the gallery to sort results by various criteria such as type, model, and generation time. Quickly find results under your desired conditions and reload them to the canvas for efficient work."}
            </p>
            <div className="w-full aspect-video overflow-hidden rounded-lg border border-border bg-muted">
              {/* @ts-ignore */}
              <video key="gallery-filter-video" className="w-full h-full object-contain" autoPlay loop muted playsInline>
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%80%E1%85%A2%E1%86%AF%E1%84%85%E1%85%A5%E1%84%85%E1%85%B5%20%E1%84%87%E1%85%AE%E1%86%A8%E1%84%86%E1%85%A1%E1%84%8F%E1%85%B3-j3dSiUVY2g2TytfdlhC7sp0heFMjLt.webm" type="video/webm" />
                {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})
